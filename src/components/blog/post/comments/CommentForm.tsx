"use client";

import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import FormActionNotificationBox from "@/components/common/notifications/FormActionNotificationBox";



const CommentForm: React.FC<{ postId: number }> = ({ postId }) => {
    const [isBusy, setIsBusy] = useState(false);
    const [notification, setNotification] = useState<{
        type: "success" | "error" | "warning";
        message: string;
    } | null>(null);
    const validationSchema = Yup.object().shape({
        message: Yup.string().required("Message is required"),
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        website: Yup.string().url("Invalid website URL"),
    });

    const formik = useFormik({
        initialValues: {
            message: "",
            name: localStorage.getItem("commentFormName") || "",
            email: localStorage.getItem("commentFormEmail") || "",
            website: localStorage.getItem("commentFormWebsite") || "",
            saveInfo: false,
            postId: postId,
        },
        validationSchema,
        onSubmit: async (values) => {
            setIsBusy(true);
            try {
                if (typeof window !== "undefined" && window.localStorage) {
                    if (values.saveInfo) {
                        localStorage.setItem("commentFormName", values.name);
                        localStorage.setItem("commentFormEmail", values.email);
                        localStorage.setItem("commentFormWebsite", values.website);
                    } else {
                        localStorage.removeItem("commentFormName");
                        localStorage.removeItem("commentFormEmail");
                        localStorage.removeItem("commentFormWebsite");
                    }
                }

                const res = await fetch("/api/blog/posts/comments", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(values),
                });

                if (res.ok) {
                    // Success
                    setNotification({ type: "success", message: "Message sent successfully!" });
                    // Clear the message field
                    formik.setFieldValue("message", "");
                } else if (res.status == 429) {
                    // Too many requests
                    setNotification({ type: "warning", message: "Too Many Requests. Please try again later." });
                } else {
                    // Error
                    setNotification({ type: "error", message: "An error occurred. Please try again later." });
                }
                setIsBusy(false);
            } catch (error) {
                // Handle error case if needed
                console.log(error);
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
        <div className="comment_leave mt-8">
            <h3 className="capitalize font-medium text-[#000] dark:text-white">
                Leave a Comment
            </h3>
            <form onSubmit={formik.handleSubmit}>
                <div className="comment_form flex flex-col space-y-4">
                    <div>
                        <textarea
                            name="message"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Message"
                            className={`flex-1 bg-[#f1f1f1] dark:bg-[#222] dark:text-[#FEFEFE] py-4 px-8 font-light text-lg w-full ${formik.touched.message && formik.errors.message
                                ? "border-red-500"
                                : ""
                                }`}
                        ></textarea>
                        {formik.touched.message && formik.errors.message && (
                            <div className="text-red-500">{formik.errors.message}</div>
                        )}
                    </div>
                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <input
                                type="text"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Name"
                                className={`bg-[#f1f1f1] dark:bg-[#222] dark:text-[#FEFEFE] py-2 px-8 w-full font-light text-lg ${formik.touched.name && formik.errors.name ? "border-red-500" : ""
                                    }`}
                            />
                            {formik.touched.name && formik.errors.name && (
                                <div className="text-red-500">{formik.errors.name}</div>
                            )}
                        </div>
                        <div className="flex-1">
                            <input
                                type="email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Email"
                                className={`bg-[#f1f1f1] dark:bg-[#222] dark:text-[#FEFEFE] py-2 px-8 w-full font-light text-lg ${formik.touched.email && formik.errors.email ? "border-red-500" : ""
                                    }`}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <div className="text-red-500">{formik.errors.email}</div>
                            )}
                        </div>
                    </div>
                    <div className="flex">
                        <input
                            type="text"
                            name="website"
                            value={formik.values.website}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Website"
                            className={`flex-1 bg-[#f1f1f1] dark:bg-[#222] dark:text-[#FEFEFE] py-2 px-8 font-light text-lg ${formik.touched.website && formik.errors.website
                                ? "border-red-500"
                                : ""
                                }`}
                        />
                        {formik.touched.website && formik.errors.website && (
                            <div className="text-red-500">{formik.errors.website}</div>
                        )}
                    </div>
                </div>
                <div className="comment_save_info my-6">
                    <div className="flex space-x-2">
                        <input
                            type="checkbox"
                            name="saveInfo"
                            checked={formik.values.saveInfo}
                            onChange={formik.handleChange}
                        />
                        <div className="font-light text-lg text-[#666] dark:text-[#FEFEFE]">
                            Save my name, email, website in this browser for my future
                            comments
                        </div>
                    </div>
                </div>
                <div className="comment_submit flex">
                    <input
                        value="submit comment"
                        type="submit"
                        className={`${isBusy ? "cursor-not-allowed bg-[#999]" : "cursor-pointer bg-[#222] hover:bg-[#43A047]"}  text-[#FFF] capitalize w-full py-2 transition ease-in-out duration-300`}
                    />
                </div>
                {/* Show notification if present */}
                <FormActionNotificationBox
                    message={notification?.message || ""}
                    type={notification?.type || ""}
                />
            </form>
        </div>
    );
};

export default CommentForm;