import React from "react";
import Advertisement from "./advertisement/Advertisement";
import FollowUs from "./follow-us/FollowUs";
import GetInTouch from "./get-in-touch/GetInTouch";
import LatestPosts from "./latest-posts/LatestPosts";
import Search from "./search/Search";
import SidebarComments from "./sidebar-comments/SidebarComments";
import SidebarTags from "./sidebar-tags/SidebarTags";
import ScrollToTop from "@/components/common/ScrollToTop";

const Sidebar: React.FC = () => {
    return (
        <aside className="sticky top-1 space-y-12 pb-12">
            <Search />
            <GetInTouch />
            <Advertisement />
            <LatestPosts />
            <FollowUs />
            <SidebarComments />
            <SidebarTags />
            <ScrollToTop />
        </aside>
    );
}

export default Sidebar;