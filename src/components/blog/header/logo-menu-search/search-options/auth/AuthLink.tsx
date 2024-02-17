import Link from "next/link";

const AuthLink = () => {
    return (
        <div>
            <Link href={"/auth/login"} className="text-xs font-extralight bg-[#4ce5a2] text-white py-2 px-4">Login</Link>
        </div>
    );
}

export default AuthLink;