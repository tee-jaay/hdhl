import React from "react";

const PostHeaderLoader: React.FC = () => {
    return (
        <div className=" mx-auto animate-pulse flex flex-col space-y-8 py-16 px-32" style={{ width: "1024px" }}>
            <div className="bg-gray-200 w-full h-6"></div>
            <div className="flex space-x-4 justify-center">
                <div className="bg-gray-200 w-1/5 h-3"></div>
                <div className="bg-gray-200 w-1/5 h-3"></div>
            </div>
        </div>
    );
}

export default PostHeaderLoader;