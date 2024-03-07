import React from "react";
import HeadingProps from "@/_lib/models/HeadingProps";

const SectionHeading: React.FC<{ headingProps: HeadingProps }> = ({ headingProps }) => {
    return (
        <h4 className="capitalize font-medium dark:text-white">{headingProps?.text}</h4>
    );
}

export default SectionHeading;