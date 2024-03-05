"use client";

import React, { useState } from "react";
import SocialsLinksIcons from "@/components/common/SocialsLinksIcons";

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState<{
        name: string; email: string; subject: string; message: string;
    }>({
        name: "", email: "", subject: "", message: "",
    });

    const submitForm = async () => {
        const res = await fetch("/api/pages/contact-us",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }
        )
        const data = await res.json();
        console.log('submitForm', data);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // Update the form data
        setFormData({ ...formData, [name]: value });
    };


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
                            className="cursor-pointer text-[#FFF] bg-[#222] w-full py-2 hover:bg-[#4CE5A2] transition ease-in-out duration-300"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;