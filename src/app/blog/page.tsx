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
    });
    const [isFetching, setIsFetching] = useState(false);

    // Load more posts
    const loadMore = () => {
        setIsFetching(true);
        try {
            getData({ startCursor: pageInfo?.startCursor, endCursor: pageInfo?.endCursor })
                .then((res) => {
                    setPosts([]);
                    setPosts([...res?.posts?.nodes] || []);
                    setPageInfo(res?.posts?.pageInfo || {});
                    // Scroll to top of the page
                    window.scrollTo({
                        top: 320,
                        behavior: "smooth",
                    });
                })
                .catch((e) => console.error(e))
                .finally(() => setIsFetching(false));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        setIsFetching(true);
        getData({ startCursor: "", endCursor: "" })
            .then((res) => {
                setPosts(res?.posts?.nodes || []);
                setPageInfo(res?.posts?.pageInfo || {});
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
                <div className="paginations mt-8 flex space-x-2 justify-center">
                    <div className="pagination_item text-[#444] dark:text-white cursor-pointer border font-medium text-sm flex items-center justify-center h-10 w-32 capitalize hover:bg-[#4ce5a2] hover:text-[#FFF] hover:border-[#4ce5a2] transition ease-in-out duration-300" onClick={loadMore}>view previous</div>
                </div>
            </div>
        );
}

export default Blog;