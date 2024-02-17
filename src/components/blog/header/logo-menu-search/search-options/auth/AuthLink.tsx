import Link from "next/link";

const AuthLink = () => {
    return (
        <div>
            <Link href={"/auth/login"} className="text-xs font-extralight bg-[#000000] text-white hover:bg-[#4ce5a2] transition ease-in-out duration-300 py-2 px-4">Login</Link>
        </div>
    );
}

export default AuthLink;