import Advertisement from "./advertisement/Advertisement";
import FollowUs from "./follow-us/FollowUs";
import GetInTouch from "./get-in-touch/GetInTouch";
import LatestPosts from "./latest-posts/LatestPosts";
import Search from "./search/Search";
import SidebarComments from "./sidebar-comments/SidebarComments";

const Sidebar = () => {
    return (
        <aside className="space-y-12">
            <Search />
            <GetInTouch />
            <LatestPosts />
            <Advertisement />
            <FollowUs />
            <SidebarComments />
            <h4>tags</h4>
        </aside>
    );
}

export default Sidebar;