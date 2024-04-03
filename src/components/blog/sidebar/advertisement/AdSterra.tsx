import React from "react";
import Script from "next/script";

const AdsterraAd: React.FC = () => {
  return <Script
    strategy="lazyOnload"
    type="text/javascript"
    src="//www.topcreativeformat.com/1bc1b1376a6093cee5772c8748bfee12/invoke.js"
  />;
};

export default AdsterraAd;