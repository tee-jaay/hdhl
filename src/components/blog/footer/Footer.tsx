import FooterTop from "./FooterTop"
import FooterBottom from "./FooterBottom"

const Footer = () => {
    return (
        <section className="bg-[#161B2B]">
            <footer className="mx-auto" style={{ width: "1120px" }}>
                <FooterTop />
                <div className="border-t-2 border-gray-700">
                    <FooterBottom />
                </div>
            </footer>
        </section>
    )
}

export default Footer