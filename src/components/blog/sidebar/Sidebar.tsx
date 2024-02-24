import GetInTouch from "./get-in-touch/GetInTouch";
import Search from "./search/Search";

const Sidebar = () => {
    return (
        <aside className="py-12">
            <Search />
            <GetInTouch />
            <h4>latest posts</h4>
            <div>advertismenet</div>
            <h4>follow us</h4>
            <h4>comments</h4>
            <h4>tags</h4>
        </aside>
    );
}

export default Sidebar;