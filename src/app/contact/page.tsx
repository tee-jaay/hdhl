"use client";

import React, { useEffect, useState } from "react";
import SocialsLinksIcons from "@/components/common/SocialsLinksIcons";

const ContactPage: React.FC = () => {
    const [isBusy, setIsBusy] = useState(false);
    const [formData, setFormData] = useState<{
        name: string; email: string; subject: string; message: string;
    }>({
        name: "", email: "", subject: "", message: "",
    });
    const [notification, setNotification] = useState<{
        type: "success" | "error";
        message: string;
    } | null>(null);

    const submitForm = async () => {
        setIsBusy(true);
        const res = await fetch("/api/pages/contact-us",
            {
                method: "POST",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify(formData),
            }
        )
        const data = await res.json();
        if (data.messageId) {
            // Success
            setNotification({ type: "success", message: "Message sent successfully!" });
        } else {
            // Error
            setNotification({ type: "error", message: "An error occurred. Please try again later." });
        }
        setIsBusy(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // Update the form data
        setFormData({ ...formData, [name]: value });
    };

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
                <div className="contact_form w-3/5 flex flex-col space-y-4">
                    <div className="flex space-x-4">
                        <input
                            onChange={handleInputChange}
                            className="flex-1 font-light text-lg bg-[#F9F9F9] py-2 px-8"
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            required
                        />
                        <input
                            onChange={handleInputChange}
                            className="flex-1 font-light text-lg bg-[#F9F9F9] py-2 px-8"
                            type="email"
                            placeholder="Your Email"
                            name="email"
                            required
                        />
                    </div>
                    <div className="flex space-x-4">
                        <input
                            onChange={handleInputChange}
                            className="flex-1 font-light text-lg bg-[#F9F9F9] py-2 px-8"
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required
                        />
                    </div>
                    <textarea
                        onChange={handleInputChange}
                        className="message font-light text-lg bg-[#F9F9F9] py-2 px-8"
                        rows={6}
                        cols={30}
                        placeholder="Message"
                        name="message"
                        required
                    />
                    <div className="send_btn">
                        <input
                            onClick={() => submitForm()}
                            type="button"
                            value="Send"
                            className={`${isBusy ? "cursor-not-allowed bg-[#999]" : "cursor-pointer bg-[#222] hover:bg-[#4CE5A2]"}  text-[#FFF]  w-full py-2 transition ease-in-out duration-300`}
                        />
                    </div>
                    {/* Show notification if present */}
                    {notification && (
                        <div className={`notification ${notification.type === "success" ? "bg-green-500" : "bg-red-500"} text-white px-4 py-1 my-2`}>
                            {notification.message}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ContactPage;