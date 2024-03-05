import Link from "next/link";

const Advertisement = () => {
    return (
        <section className="w-[1024px] dark:text-white flex flex-col items-center justify-center mx-auto h-28 border border-black dark:border-white my-12">
            <p className="text-xl uppercase">Advertisement</p>
            <p>Want to show your advertisement? <br /> Please <Link href="/contact"><span className="italic underline">Contact Us</span></Link> for the details.</p>
        </section>
    );
}

export default Advertisement;