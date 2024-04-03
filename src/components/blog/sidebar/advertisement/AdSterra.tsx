"use client";

import React, { useEffect, useRef } from 'react';

const AdSterra: React.FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  const adOptions = {
    key: process.env.NEXT_PUBLIC_ADSTERRA_KEY, // Replace with your Adsterra key
    format: 'iframe',
    height: 250,
    width: 320,
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
    <div
      className="mx-2 my-5 border border-gray-200 justify-center items-center text-white text-center"
      ref={bannerRef}
    >
      {/* Ads content will be loaded here */}
    </div>
  );
};

export default AdSterra;
