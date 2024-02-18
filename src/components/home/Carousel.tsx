import CarouselItem from './carousel/CarouselItem';

const Carousel = () => {
    return (
        <section className="carousel flex py-16 mx-auto" style={{ width: '1200px' }}>
            <div className="navigation flex flex-1/5 items-center space-x-4">
                <div className="navigation_left rounded-full cursor-pointer bg-gray-200 p-3 hover:bg-[#4ce5a2] hover:text-white transition ease-in-out duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>
                </div>
                <div className="navigation_right rounded-full cursor-pointer bg-gray-200 p-3 hover:bg-[#4ce5a2] hover:text-white transition ease-in-out duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </div>
            </div>
            <div className="items flex flex-4/5 ml-auto space-x-8">
                <CarouselItem imgAlt={""} imgSrc={"https://picsum.photos/80/100?q=1"} categorySlug={"travel"} category={"Travel"} title={"Debitis voluptate illo"} date={"April 20, 2022"} />
                <CarouselItem imgAlt={""} imgSrc={"https://picsum.photos/80/100?q=2"} categorySlug={"design"} category={"Design"} title={"Voluptate illo veniam"} date={"June 13, 2022"} />
                <CarouselItem imgAlt={""} imgSrc={"https://picsum.photos/80/100?q=3"} categorySlug={"fashion"} category={"Fashion"} title={"Debitis illo veniam"} date={"January 5, 2023"} />
            </div>
        </section>
    );
}

export default Carousel;