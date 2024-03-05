import React from "react";
import Advertisement from "./advertisement/Advertisement";
import FollowUs from "./follow-us/FollowUs";
import GetInTouch from "./get-in-touch/GetInTouch";
import LatestPosts from "./latest-posts/LatestPosts";
import Search from "./search/Search";
import SidebarComments from "./sidebar-comments/SidebarComments";
import SidebarTags from "./sidebar-tags/SidebarTags";

const Sidebar: React.FC = () => {
    return (
        <aside className="sticky top-1 space-y-12 pb-12">
            <Search />
            <GetInTouch />
            <LatestPosts />
            <Advertisement />
            <FollowUs />
            <SidebarComments />
            <SidebarTags />
        </aside>
    );
}

export default Sidebar;