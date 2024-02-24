import Advertisement from "./advertisement/Advertisement";
import FollowUs from "./follow-us/FollowUs";
import GetInTouch from "./get-in-touch/GetInTouch";
import LatestPosts from "./latest-posts/LatestPosts";
import Search from "./search/Search";

const Sidebar = () => {
    return (
        <aside className="py-12">
            <Search />
            <GetInTouch />
            <LatestPosts />
            <Advertisement />
            <FollowUs />
            <h4>comments</h4>
            <h4>tags</h4>
        </aside>
    );
}

export default Sidebar;