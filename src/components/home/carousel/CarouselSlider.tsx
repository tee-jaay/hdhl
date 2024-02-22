"use client";
import React, { useState } from 'react';
import CarouselItem from './CarouselItem';
import formatDate from '@/_helpers/formatPostDate';
import truncateString from '@/_helpers/truncrateString';

interface FeaturedImage {
    node: {
        altText: string,
        sourceUrl: string,
    }
}

interface Category {
    name: string,
    slug: string
}

interface CarouselSingle {
    imgAlt: "string",
    imgSrc: "string",
    categories: {
        nodes: Category[]
    },
    title: "string",
    slug: "string",
    date: "string",
    featuredImage: FeaturedImage,
}

interface CarouselItems {
    carouselItems: CarouselSingle[],
}

const CarouselSlider = ({ carouselItems }: CarouselItems) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalItems - itemsToShow));
    };

    const itemsToShow = 3;
    const totalItems = 5; // Total number of items in the carousel

    const startItem = Math.min(currentIndex, totalItems - itemsToShow);
    const endItem = startItem + itemsToShow;

    return (
        <div className="carousel_slider flex">
            <div className="navigation flex flex-1/5 items-center space-x-4 mr-8">
                {/* Left navigation */}
                <div
                    className="navigation_left rounded-full cursor-pointer bg-gray-200 p-3 hover:bg-[#4ce5a2] hover:text-white transition ease-in-out duration-300"
                    onClick={handlePrev}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>
                </div>
                {/* Right navigation */}
                <div
                    className="navigation_right rounded-full cursor-pointer bg-gray-200 p-3 hover:bg-[#4ce5a2] hover:text-white transition ease-in-out duration-300"
                    onClick={handleNext}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </div>
            </div>
            <div className="items flex flex-4/5 ml-auto space-x-8">
                {carouselItems.slice(startItem, endItem).map((item, index) => (
                    <CarouselItem
                        key={index}
                        imgAlt={item?.featuredImage?.node?.altText}
                        imgSrc={item?.featuredImage?.node?.sourceUrl}
                        categorySlug={item?.categories?.nodes[0]?.slug}
                        category={truncateString(item?.categories?.nodes[0]?.name, 8)}
                        title={truncateString(item?.title, 20)}
                        slug={item?.slug}
                        date={formatDate(item?.date, undefined)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CarouselSlider;
