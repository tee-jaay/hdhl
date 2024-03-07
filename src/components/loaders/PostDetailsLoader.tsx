import React from "react";

const PostDetailsLoader: React.FC = () => {
    return (
        <div className=" mx-auto animate-pulse flex flex-col space-y-8">
            <div className="bg-gray-200 w-full h-[500px]"></div>
            <div className="space-y-4">
                <div className="bg-gray-200 h-3"></div>
                <div className="bg-gray-200 h-2"></div>
                <div className="bg-gray-200 h-2"></div>
                <div className="bg-gray-200 h-2"></div>
                <div className="bg-gray-200 h-3"></div>
                <div className="bg-gray-200 h-2"></div>
                <div className="bg-gray-200 h-2"></div>
            </div>
            <br />
            <div className="space-y-4">
                <div className="bg-gray-200 h-3"></div>
                <div className="bg-gray-200 h-2"></div>
                <div className="bg-gray-200 h-2"></div>
                <div className="bg-gray-200 h-2"></div>
                <div className="bg-gray-200 h-3"></div>
                <div className="bg-gray-200 h-2"></div>
                <div className="bg-gray-200 h-2"></div>
            </div>
        </div>
    );
}

export default PostDetailsLoader;