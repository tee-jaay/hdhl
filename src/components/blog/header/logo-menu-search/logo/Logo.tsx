import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <div className="logo flex-1/4">
            <Link href={"/"}>
                <div className="flex items-center space-x-2">
                    <Image src="https://picsum.photos/200/60" alt="" width={200} height={60} />
                    <span className="font-extrabold text-2xl">H<span className="underline">D</span>HL</span>
                </div>
            </Link>
        </div>
    );
}

export default Logo;