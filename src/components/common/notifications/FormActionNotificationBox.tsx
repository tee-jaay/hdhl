import React from "react";

import FormActionNotification from "./FormActionNotification";

const FormActionNotificationBox: React.FC<{ type: String, message: String }> = ({ type, message }) => {
    return (
        <div className="notification_box flex">
            {type === "success" &&
                <FormActionNotification
                    bgColor={"bg-green-500"}
                    textColor={"text-white"}
                    message={message}
                />
            }
            {type === "error" &&
                <FormActionNotification
                    bgColor={"bg-red-500"}
                    textColor={"text-white"}
                    message={message}
                />
            }
            {type === "warning" &&
                <FormActionNotification
                    bgColor={"bg-yellow-500"}
                    textColor={"text-black"}
                    message={message}
                />
            }
        </div>
    );
}

export default FormActionNotificationBox;