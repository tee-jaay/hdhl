import SocialsLinksIcons from "@/components/common/SocialsLinksIcons";

const ContactPage = () => {
    return (
        <div className="contact_us">
            <h2 className="capitalize">get in touch</h2>
            <div className="address_contact_form flex">
                <div className="address_info w-2/5 flex flex-col space-y-8">
                    <div className="call_us"></div>

                    <div className="email_address">
                        <h5 className="capitalize">email address</h5>
                        <div className="text-[#777]">
                            contact@healthydiethappylife.com
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
                            className="flex-1 font-light text-lg bg-[#F9F9F9] py-2 px-8"
                            type="text"
                            placeholder="Your Name*"
                            required
                        />
                        <input
                            className="flex-1 font-light text-lg bg-[#F9F9F9] py-2 px-8"
                            type="email"
                            placeholder="Your Email*"
                            required
                        />
                    </div>
                    <div className="flex space-x-4">
                        <input
                            className="flex-1 font-light text-lg bg-[#F9F9F9] py-2 px-8"
                            type="text"
                            placeholder="Subject*"
                            required
                        />
                        <input
                            className="flex-1 font-light text-lg bg-[#F9F9F9] py-2 px-8"
                            type="url"
                            placeholder="Website (optional)"
                        />
                    </div>
                    <textarea
                        className="message font-light text-lg bg-[#F9F9F9] py-2 px-8"
                        rows={6}
                        cols={30}
                        placeholder="Message*"
                        required
                    />
                    <div className="submit">
                        <input
                            type="submit"
                            value="Send"
                            className="text-[#FFF] bg-[#4CE5A2] w-full py-2 hover:bg-[#222] transition ease-in-out duration-300"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;