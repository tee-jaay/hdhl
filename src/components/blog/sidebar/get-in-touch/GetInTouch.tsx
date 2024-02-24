import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

const ConnectionItem = () => <Link href={"/"} className="connection_item flex space-x-2 shadow-lg p-1">
    <div className="conenction_icon">
        <FontAwesomeIcon className="text-[#0866FF]" icon={faFacebookSquare} height={32} width={32} />
    </div>
    <div className="text_count text-[#000] text-xs">
        <div className="capitalize">followers</div>
        <div className="text-[#999]">750</div>
    </div>
</Link>

const GetInTouch = () => {
    return (
        <div className="mt-10">
            <h4 className="capitalize font-medium">get in touch</h4>
            <div className="socials_connections mt-3 grid grid-cols-2 gap-x-5 gap-y-4">
                <ConnectionItem />
                <ConnectionItem />
                <ConnectionItem />
                <ConnectionItem />
                <ConnectionItem />
                <ConnectionItem />
            </div>
        </div>
    );
}

export default GetInTouch;