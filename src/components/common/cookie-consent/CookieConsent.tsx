"use client";
import React from "react";

import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";

const CookieConsent: React.FC<{}> = () => {
    const [showConsent, setShowConsent] = React.useState(true);

    React.useEffect(() => {
        setShowConsent(hasCookie("localConsent"));
    }, []);

    const acceptCookie = () => {
        setShowConsent(true);
        setCookie("localConsent", "true", {});
    };

    if (showConsent) {
        return null;
    }

    return (
        <div className="">
            <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-4 bg-gray-100">
                <span className="text-dark text-base mr-16">
                    This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our <Link href="/pages/cookie-policy" className="text-[#43a047]">Cookie Policy</Link>.
                </span>
                <button className="bg-[#43a047] py-2 px-8 text-white" onClick={() => acceptCookie()}>
                    Accept
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;