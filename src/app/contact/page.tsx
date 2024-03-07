"use client";

import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import SocialsLinksIcons from "@/components/common/SocialsLinksIcons";

import FormActionNotificationBox from "@/components/common/notifications/FormActionNotificationBox";

const ContactPage: React.FC = () => {
    const [isBusy, setIsBusy] = useState(false);
    const [notification, setNotification] = useState<{
        type: "success" | "error" | "warning";
        message: string;
    } | null>(null);

    const validationSchema = Yup.object({
        name: Yup.string().required("Please enter your name"),
        email: Yup.string().email("Invalid email address").required("Please enter your email"),
        subject: Yup.string().required("Please enter a subject"),
        message: Yup.string().required("Please enter a message"),
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            setIsBusy(true);
            const res = await fetch("/api/pages/contact-us", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });
            const data = await res.json();

            if (data.messageId) {
                // Success
                setNotification({ type: "success", message: "Message sent successfully!" });
                // Clear form inputs
                resetForm();
            } else if (res.status == 429) {
                // Too many requests
                setNotification({ type: "warning", message: "Too Many Requests. Please try again later." });
            } else {
                // Error
                setNotification({ type: "error", message: "An error occurred. Please try again later." });
            }
            setIsBusy(false);
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
        <div className="contact_us">
            <h2 className="capitalize">get in touch</h2>
            <div className="address_contact_form flex">
                <div className="address_info w-2/5 flex flex-col space-y-8">
                    <div className="email_address">
                        <h5 className="capitalize">email address</h5>
                        <div className="text-[#777]">
                            {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                        </div>
                    </div>

                    <div className="social_share flex flex-col items-start">
                        <h5 className="capitalize">social share</h5>
                        <div>
                            <SocialsLinksIcons />
                        </div>
                    </div>
                </div>
                <div className="contact_form w-3/5">
                    <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-4">
                        <div className="flex space-x-8">
                            <div className="flex-1">
                                <input
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                    className=" font-light text-lg bg-[#F9F9F9] py-2 px-8 w-full"
                                    type="text"
                                    placeholder="Your Name"
                                    name="name"
                                    required
                                />
                                {formik.touched.name && formik.errors.name && (
                                    <div className="text-red-400">{formik.errors.name}</div>
                                )}
                            </div>
                            <div className="flex-1">
                                <input
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    className=" font-light text-lg bg-[#F9F9F9] py-2 px-8 w-full"
                                    type="email"
                                    placeholder="Your Email"
                                    name="email"
                                    required
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <div className="text-red-400">{formik.errors.email}</div>
                                )}
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <div className="w-full">
                                <input
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.subject}
                                    className="flex-1 font-light text-lg bg-[#F9F9F9] py-2 px-8 w-full"
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    required
                                />
                                {formik.touched.subject && formik.errors.subject && (
                                    <div className="text-red-400">{formik.errors.subject}</div>
                                )}
                            </div>
                        </div>
                        <div>
                            <textarea
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.message}
                                className="message font-light text-lg bg-[#F9F9F9] py-2 px-8 w-full"
                                rows={6}
                                cols={30}
                                placeholder="Message"
                                name="message"
                                required
                            />
                            {formik.touched.message && formik.errors.message && (
                                <div className="text-red-400">{formik.errors.message}</div>
                            )}
                        </div>
                        <div className="send_btn">
                            <input
                                type="submit"
                                value="Send"
                                className={`${isBusy ? "cursor-not-allowed bg-[#999]" : "cursor-pointer bg-[#222] hover:bg-[#43A047]"}  text-[#FFF]  w-full py-2 transition ease-in-out duration-300`}
                            />
                        </div>
                    </form>
                    {/* Show notification if present */}
                    <FormActionNotificationBox message={notification?.message || ""} type={notification?.type || ""} />
                </div>
            </div>
        </div>
    );
}

export default ContactPage;