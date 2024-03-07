"use client";

import React, { useEffect, useState } from "react";

const ScrollToTop: React.FC = () => {
    const [showScroll, setShowScroll] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        });
        return () => {
            window.removeEventListener("scroll", () => { });
        };
    }, []);

    return (
        <div>
            <button
                onClick={scrollToTop}
                className={`${showScroll ? "block" : "hidden"
                    } fixed right-5 bottom-5 z-10 bg-gradient-to-b from-[#2E8B57] to-[#43A047] dark:bg-white p-2 rounded-full shadow-lg`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </div>
    );
}

export default ScrollToTop;