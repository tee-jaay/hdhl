import React from "react";
import TagsPageLoader from "@/components/loaders/TagsPageLoader";

const Loading: React.FC = () => {
    return (
        <div className="py-20">
            <TagsPageLoader />
        </div>
    );
}

export default Loading;