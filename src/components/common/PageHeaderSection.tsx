"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import getPostBySlug from "@/_lib/graphQl/queries/getPostBySlug";
import PostHeaderLoader from "../loaders/PostHeaderLoader";

const PageHeaderSection = () => {
    const pathName = usePathname();
    const [post, setPost] = useState({
        title: "",
        categoryName: "",
        categorySlug: "",
    });
    const [isLoading, setIsLoading] = useState(true);

    // This function removes the forward slash from a string
    const removeForwardSlash = (str: string) => {
        return str.replace(/\//g, '');
    };

    useEffect(() => {
        const cleanUrl = removeForwardSlash(pathName);

        // Construct the GraphQL query and variables
        const query = getPostBySlug();
        const variables = {
            slug: cleanUrl,
        };

        // Send the GraphQL query to the API
        fetch("/api/blog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query,
                variables,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the data returned from the API
                const post = data?.post;
                setPost({
                    title: post?.title,
                    categoryName: post?.categories?.nodes[0]?.name,
                    categorySlug: post?.categories?.nodes[0]?.slug,
                });
            })
            .catch((error) => {
                // Handle the error here
                console.error(error);
            })
            .finally(() => setIsLoading(false));
    }, [pathName]);

    if (isLoading) return (<PostHeaderLoader />);

    return (
        <div className="blog_header py-16 bg-[#FBFAFA] w-full">
            <h2 className="text-[#000000] text-center text-3xl font-medium tracking-wide">{post?.title}</h2>
            <h6 className="text-[#8F8E8E] text-lg flex justify-center items-center">
                Home <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
                <Link href={`/categories/${post?.categorySlug}/12`}>{post?.categoryName}</Link>
            </h6>
        </div>
    );
}

export default PageHeaderSection;