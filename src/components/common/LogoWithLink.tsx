import Link from 'next/link';
import Image from 'next/image';

const LogoWithLink = () => {
    return (
        <Link href={"/"} title="website name">
            <div className="flex h-full items-center space-x-2">
                <Image className="justify-center align-middle" src="https://picsum.photos/200/60" alt="" width={100} height={60} />
                <span className="font-extrabold text-2xl">H<span className="underline">D</span>HL</span>
            </div>
        </Link>
    );
}

export default LogoWithLink;