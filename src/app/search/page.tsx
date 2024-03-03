"use client";

import Link from "next/link";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PostCardProps from "@/_models/PostCardProps";

const Search = () => {
    const params = useSearchParams();
    const [posts, setPosts] = useState([]);

    const searchText = params.get('s');
    console.log(searchText);
    const encodedString = searchText ? searchText?.toString() : "";
    const decodedString = decodeURIComponent(encodedString);

    const fetchData = async (searchText: string) => {
        try {
            // Make the request and return the data
            const res = await fetch("/api/blog/search", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ searchText }),
            });
            const data = await res.json();
            setPosts(data);
            return data;
        } catch (error) {
            // Handle the error here
            console.error(error);
            throw error;
        }
    };

    useEffect(() => {
        fetchData(decodedString);
    }, [decodedString]);

    return (
        <div className="posts_list space-y-8">
            {posts && posts.map((post: PostCardProps, _i: number) => <PostItem key={post.id} post={post} />)}

            {posts.length < 1 && <p>No content found.</p>}
        </div>
    );
}

const PostItem = ({ post }: { post: PostCardProps }) => <div className="post_item shadow-md px-8 py-10">
    <h2>
        <Link href={post?.slug} className="text-[#444]">{post?.title}</Link>
    </h2>
    <p className="text-[#444]" dangerouslySetInnerHTML={{ __html: post?.excerpt ?? "" }} />
    <Link href={post?.slug} className="text-[#444] font-medium flex mt-4 space-x-2 items-center">
        <div className="capitalize">continue reading</div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
    </Link>
</div>

const SearchPosts = () => {
    return (
        <Suspense>
            <Search />
        </Suspense>
    );
}

export default SearchPosts;
