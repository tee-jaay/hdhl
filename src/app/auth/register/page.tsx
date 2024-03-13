"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormActionNotificationBox from "@/components/common/notifications/FormActionNotificationBox";

const Register: React.FC = () => {
    const [isBusy, setIsBusy] = useState(false);
    const [notification, setNotification] = useState<{
        type: "success" | "error" | "warning";
        message: string;
    } | null>(null);
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Email is required"),
        username: Yup.string().min(6).max(24),
        password: Yup.string().min(8).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/).required("Password is required"),
        passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), undefined], 'Passwords must match'),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            username: "",
            passwordConfirmation: "",
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            setIsBusy(true);
            try {
                const res = await fetch("/api/auth/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(values),
                });
                const data = await res.json();

                if (res.ok) {
                    // Store user data to local storage
                    localStorage.setItem("authToken", data?.authToken);
                    localStorage.setItem("refreshToken", data?.refreshToken);
                    localStorage.setItem("user", JSON.stringify(data?.user));
                    // Success
                    setNotification({ type: "success", message: "Registration successful!" });
                    // Clear form inputs
                    resetForm();
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

    if (isBusy) return <h1>loading...</h1>

    return (
        <div className="phone:w-full tab:w-full laptop:w-[1024px] desktop:w-[1024px] mx-auto">
            <div className="phone:w-full tab:w-1/2 laptop:w-1/3 mx-auto phone:px-1 tab:px-2 laptop:px-0 my-48">
                <form className="space-y-4" onSubmit={formik.handleSubmit}>
                    <div>
                        <input
                            className="w-full py-2 px-4 bg-slate-100"
                            type="email"
                            name="email"
                            placeholder="email@example.com"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-500">{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div>
                        <input
                            className="w-full py-2 px-4 bg-slate-100"
                            type="text"
                            name="username"
                            placeholder="UserName"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <div>
                        <input
                            className="w-full py-2 px-4 bg-slate-100"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-red-500">{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <div>
                        <input
                            className="w-full py-2 px-4 bg-slate-100"
                            type="password"
                            name="passwordConfirmation"
                            placeholder="Password Confirmation"
                            value={formik.values.passwordConfirmation}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? (
                            <div className="text-red-500">{formik.errors.passwordConfirmation}</div>
                        ) : null}
                    </div>
                    <div>
                        <button
                            className={`${isBusy ? "cursor-not-allowed bg-[#999]" : "bg-[#222]"} "font-medium text-white py-2 px-8 hover:bg-[#43A047] transition ease-in-out duration-200 capitalize`}
                            type="submit"
                        >
                            Register
                        </button>
                    </div>
                    {/* Show notification if present */}
                    <FormActionNotificationBox
                        message={notification?.message || ""}
                        type={notification?.type || ""}
                    />
                </form>
            </div>
        </div>
    );
}

export default Register;