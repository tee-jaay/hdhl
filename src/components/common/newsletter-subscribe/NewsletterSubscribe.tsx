"use client";

import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

import FormActionNotificationBox from "../notifications/FormActionNotificationBox";
import { publicAppUrl } from "@/_lib/variables/constants";

const NewsletterSubscribe: React.FC = () => {
    const [isBusy, setIsBusy] = useState(false);
    const [notification, setNotification] = useState<{
        type: "success" | "error" | "warning";
        message: string;
    } | null>(null);

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email address").required("Please enter your email"),
    });

    const formik = useFormik({
        initialValues: { email: "" },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            setIsBusy(true);

            try {
                const response = await fetch(`${publicAppUrl}/api/blog/subscribers`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(values),
                });

                if (response.status === 200) {
                    // Success
                    const data = await response.json();
                    setNotification({ type: "success", message: `${data?.email_address} is ${data?.status}` });
                    // Clear form inputs
                    resetForm();
                } else if (response.status === 429) {
                    setNotification({ type: "warning", message: "Too many requests. Please try later." });
                } else {
                    // Error
                    const errorData = await response.json();
                    if (errorData?.error?.response?.text) {
                        const errorText = JSON.parse(errorData?.error?.response?.text);
                        setNotification({ type: "error", message: errorText?.detail });
                    } else {
                        setNotification({ type: "error", message: "Error occurred." });
                    }
                }
            } catch (error) {
                // Handle any unexpected errors
                setNotification({ type: "error", message: "Something went wrong. Please try again." });
            } finally {
                setIsBusy(false);
            }
        },
    });

    useEffect(() => {
        // If the notification is present, start a timer to clear it after 3.5 seconds
        if (notification) {
            const timer = setTimeout(() => {
                setNotification(null);
            }, 3500);

            // Clear the timer when the component unmounts
            return () => clearTimeout(timer);
        }
    }, [notification]);

    return (
        <div className="mt-3">
            <form onSubmit={formik.handleSubmit} className="mt-3">
                <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="bg-[#333] text-white py-1 px-2"
                    type="email"
                    placeholder="Enter Your Email"
                    required
                    name="email"
                />
                {formik.touched.email && formik.errors.email && (
                    <div className="text-red-400">{formik.errors.email}</div>
                )}
                <input
                    type="submit"
                    value="subscribe"
                    className={`${isBusy ? "cursor-not-allowed bg-[#999]" : "cursor-pointer bg-[#43A047] hover:bg-[#333]"}  text-[#FFF] mt-4 py-1 px-4 font-light capitalize transition ease-in-out duration-200`}
                />
            </form>
            <FormActionNotificationBox message={notification?.message || ""} type={notification?.type || ""} />
        </div>
    );
}

export default NewsletterSubscribe;