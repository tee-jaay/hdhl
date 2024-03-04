"use client";

import { useEffect, useState } from "react";
import getLatestPosts from "@/_lib/graphQl/queries/getLatestPosts";
import PostsList from "@/components/blog/posts/PostsList";
import BlogListLoader from "@/components/loaders/BlogListLoader";

// Get data
const getData = async (cursors: { startCursor: string, endCursor: string }) => {
    // Construct the query and variables
    const query = getLatestPosts();
    const variables = { limit: 6, startCursor: cursors.startCursor || "", endCursor: cursors.endCursor || "" };
    try {
        // Make the request and return the data
        const response = await fetch("/api/blog", {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({ query: query, variables: variables, })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        // Handle the error here
        console.error(error);
        throw error;
    }
}

const Blog = () => {
    // const posts = await getData();
    const [posts, setPosts] = useState<any[]>([]);
    const [pageInfo, setPageInfo] = useState({
        startCursor: "",
        endCursor: "",
        hasNextPage: false,
        hasPreviousPage: false,
    });
    const [isFetching, setIsFetching] = useState(false);

    // Handle pagination
    const handlePreviousPage = () => {
        setIsFetching(true);
        try {
            getData({ startCursor: pageInfo?.startCursor, endCursor: pageInfo?.endCursor })
                .then((res) => {
                    setPosts([]);
                    setPosts([...res?.posts?.nodes]);
                    setPageInfo(res?.posts?.pageInfo);
                })
                .catch((e) => console.error(e))
                .finally(() => setIsFetching(false));
        } catch (error) {
            console.error(error);
        }
    };

    const handleNextPage = () => {
        setIsFetching(true);
        try {
            getData({ startCursor: "", endCursor: pageInfo?.endCursor })
                .then((res) => {
                    setPosts([]);
                    setPosts([...res?.posts?.nodes]);
                    setPageInfo(res?.posts?.pageInfo);
                })
                .catch((e) => console.error(e))
                .finally(() => setIsFetching(false));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        setIsFetching(true);
        handleNextPage()
        getData({ startCursor: "", endCursor: "" })
            .then((res) => {
                setPosts(res?.posts?.nodes);
                setPageInfo(res?.posts?.pageInfo);
            })
            .catch((e) => console.log(e))
            .finally(() => setIsFetching(false)
            );
    }, []);

    if (isFetching)
        return <BlogListLoader />

    if (!isFetching)
        return (
            <div className="posts_container">
                <PostsList posts={posts} />
                {pageInfo?.hasNextPage || pageInfo?.hasPreviousPage ? (
                    <div className="paginations mt-8 flex space-x-2">
                        {pageInfo?.hasNextPage && (<div className="pagination_item text-[#444] cursor-pointer border font-medium text-sm flex items-center justify-center w-14 h-7 capitalize hover:text-[#4ce5a2] hover:border-[#4ce5a2] transition ease-in-out duration-300" onClick={handleNextPage}>next</div>)}
                        {pageInfo?.hasPreviousPage && (<div className="pagination_item text-[#444] cursor-pointer border font-medium text-sm flex items-center justify-center w-14 h-7 capitalize hover:text-[#4ce5a2] hover:border-[#4ce5a2] transition ease-in-out duration-300" onClick={handlePreviousPage}>prev</div>)}
                    </div>
                ) : null}
            </div>
        );
}

export default Blog;