import FooterTop from "./FooterTop"
import FooterBottom from "./FooterBottom"

const Footer = () => {
    return (
        <section className="bg-[#161B2B]">
            <footer className="mx-auto" style={{ width: "1120px" }}>
                <FooterTop />
                <FooterBottom />
            </footer>
        </section>
    )
}

export default Footer