import React from "react";

const FormActionNotification: React.FC<{ bgColor: String, textColor: String, message: String }> = ({ bgColor, textColor, message }) => {
    return (
        <div className={`notification ${bgColor} ${textColor} px-4 py-1 my-2`}>
            {message}
        </div>
    );
}

export default FormActionNotification;