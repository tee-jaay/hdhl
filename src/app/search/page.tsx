"use client";

import Link from "next/link";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

import PostCardProps from "@/_lib/models/PostCardProps";
import SearchResultLoader from "@/components/loaders/SearchResultLoader";

const Search = () => {
    const params = useSearchParams();
    const [posts, setPosts] = useState([]);
    const [isSerching, setIsSerching] = useState(false);

    const searchText = params.get('s');
    const encodedString = searchText ? searchText?.toString() : "";
    const decodedString = decodeURIComponent(encodedString);

    const fetchData = async (searchText: string) => {
        setIsSerching(true);
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
            setIsSerching(false);
            return data;
        } catch (error) {
            // Handle the error here
            console.error(error);
            setIsSerching(false);
            throw error;
        }
    };

    useEffect(() => {
        fetchData(decodedString);
    }, [decodedString]);

    return (
        <div>
            <h2 className="text-[#222] text-start text-4xl font-medium tracking-wide">Search result for: "{searchText}"</h2>
            <hr className="mb-6" />
            <div className="posts_list space-y-8">
                {posts && posts.map((post: PostCardProps, _i: number) => <PostItem key={post.id} post={post} />)}
                {isSerching && <SearchResultLoader />}
            </div>
        </div>
    );
}

const PostItem = ({ post }: { post: PostCardProps }) => <div className="post_item shadow-md px-8 py-10">
    <h2>
        <Link href={post?.slug} className="text-[#444] tab:text-base laptop:text-2xl desktop:text-3xl tab:line-clamp-2 laptop:line-clamp-3 desktop:line-clamp-4 hover:text-[#43A047] transition ease-in-out duration-30">{post?.title}</Link>
    </h2>
    <p className="text-[#444]" dangerouslySetInnerHTML={{ __html: post?.excerpt ?? "" }} />
    <Link href={post?.slug} className="text-[#444] font-medium flex mt-4 space-x-2 items-center">
        <div className="capitalize hover:text-[#43A047] transition ease-in-out duration-30">continue reading</div>
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

