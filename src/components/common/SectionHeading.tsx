import React from "react";

import SectionHeadingProps from "@/_lib/models/SectionHeadingProps";

const SectionHeading: React.FC<SectionHeadingProps> = ({ text, color }) => {
    return (
        <h2 className={`mb-6 text-3xl font-semibold ${color} dark:text-white`}>{text}</h2>
    );
}

export default SectionHeading;