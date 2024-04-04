"use client";

import React, { Suspense, useEffect, useRef } from 'react';

const AdSterra: React.FC<{ height: number, width: number, adKey: string }> = ({ height, width, adKey }) => {
    const bannerRef = useRef<HTMLDivElement>(null);

    const adOptions = {
        key: adKey,
        format: 'iframe',
        height: height,
        width: width,
        params: {},
    };

    useEffect(() => {
        if (bannerRef.current && !bannerRef.current.firstChild) {
            const confScript = document.createElement('script');
            const adScript = document.createElement('script');

            confScript.type = 'text/javascript';
            confScript.innerHTML = `atOptions = ${JSON.stringify(adOptions)}`;

            adScript.type = 'text/javascript';
            adScript.src = `//www.topcreativeformat.com/${adOptions.key}/invoke.js`;

            bannerRef.current.appendChild(confScript);
            bannerRef.current.appendChild(adScript);
        }
    }, []);

    return (
        <Suspense fallback={<p>...</p>}>
            <div
                className="mx-2 my-5 border border-gray-200 justify-center items-center text-white text-center"
                ref={bannerRef}
            >
                {/* Ads content will be loaded here */}
            </div>
        </Suspense>
    );
};

export default AdSterra;
