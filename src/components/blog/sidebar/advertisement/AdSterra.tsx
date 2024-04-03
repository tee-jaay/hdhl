"use client";
import React, { useEffect } from "react";

const AdsterraAd = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.innerHTML = `
      atOptions = {
        'key' : '1bc1b1376a6093cee5772c8748bfee12',
        'format' : 'iframe',
        'height' : 300,
        'width' : 160,
        'params' : {}
      };
      document.write('<scr' + 'ipt type="text/javascript" src="//www.topcreativeformat.com/1bc1b1376a6093cee5772c8748bfee12/invoke.js"></scr' + 'ipt>');
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="adsterra-ads" />;
};

export default AdsterraAd;