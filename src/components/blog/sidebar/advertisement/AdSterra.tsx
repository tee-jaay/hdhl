import React, { Suspense } from "react";

const AdsterraAd: React.FC = () => {
  return <Suspense fallback={<p>...</p>}>
    <iframe
      src="//www.topcreativeformat.com/1bc1b1376a6093cee5772c8748bfee12/invoke.js"
      height="300"
      width="160"
    ></iframe>
  </Suspense>
};

export default AdsterraAd;