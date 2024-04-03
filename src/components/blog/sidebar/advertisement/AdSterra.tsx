"use client";
import React, { Suspense } from "react";

const AdsterraAd: React.FC = () => {
  return <Suspense fallback={<p>...</p>}>
    <iframe
      src="//www.topcreativeformat.com/1bc1b1376a6093cee5772c8748bfee12/invoke.js"
      width={160}
      height={300}
      style={{ border: 'none' }}
      allowFullScreen
      title="Ad Frame"
    />
  </Suspense>
};

export default AdsterraAd;