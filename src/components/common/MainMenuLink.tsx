import Link from "next/link";

const MainMenuLink = ({ path, text }: { path: string, text: string }) => {
    return (
        <li>
            <Link className="font-medium text-sm hover:text-[#4ce5a2] transition ease-in-out duration-300" href={`${path}`}>{text}</Link>
        </li>
    );
}

export default MainMenuLink;