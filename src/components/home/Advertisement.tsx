import Link from "next/link";

const Advertisement = () => {
    return (
        <section className="flex flex-col items-center justify-center mx-auto h-28 border border-black my-8" style={{ width: "1120px" }}>
            <h3 className="text-xl uppercase">Advertisement</h3>
            <h4>Please <Link href="/contact-us"><span className="italic">Contact Us</span></Link> for the details.</h4>
        </section>
    );
}

export default Advertisement;