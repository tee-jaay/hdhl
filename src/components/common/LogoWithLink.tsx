import Link from 'next/link';
import Image from 'next/image';

const LogoWithLink = () => {
    return (
        <Link href={"/"} title={process.env.APP_NAME}>
            <div className="flex h-full items-center space-x-2">
                <Image className="justify-center align-middle" src="/logo.png" alt="hdhl" width={100} height={60} style={{ width: "26px", height: "24px" }} />
                <span className="font-extrabold text-2xl">H<span className="underline">D</span>HL</span>
            </div>
        </Link>
    );
}

export default LogoWithLink;