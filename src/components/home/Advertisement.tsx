import Link from "next/link";

const Advertisement = () => {
    return (
        <section className="flex flex-col items-center justify-center mx-auto h-28 border border-black my-12" style={{ width: "1024px" }}>
            <p className="text-xl uppercase">Advertisement</p>
            <p>Want to show your advertisement? <br /> Please <Link href="/contact-us"><span className="italic underline">Contact Us</span></Link> for the details.</p>
        </section>
    );
}

export default Advertisement;