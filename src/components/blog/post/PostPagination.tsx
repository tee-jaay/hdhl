import React from 'react';
import Link from 'next/link';

import gqlQuery from '@/_lib/graphQl/gqlQuery';
import getPostCursorById from '@/_lib/graphQl/queries/getPostCursorById';
import getPrevNextPosts from '@/_lib/graphQl/queries/getPrevNextPosts';
import truncateString from '@/_lib/helpers/truncrateString';

const getData = async (postId: number) => {
    // Construct the query and variables
    const query = getPostCursorById();
    const variables = { id: postId, };
    try {
        // Make the request and return the data
        const data = await gqlQuery(query, variables);
        return data?.posts?.pageInfo?.startCursor;
    } catch (error) {
        // Handle the error here
        console.error(error);
        throw error;
    }
}

const getPrevNextPostsData = async (cursor: string) => {
    // Construct the query and variables
    const query = getPrevNextPosts();
    const variables = { cursor: cursor, };
    try {
        // Make the request and return the data
        const data = await gqlQuery(query, variables);
        return data;
    } catch (error) {
        // Handle the error here
        console.error(error);
        throw error;
    }
}

const PostPagination: React.FC<{ postId: number }> = async ({ postId }) => {
    const cursor = await getData(postId);
    const posts = await getPrevNextPostsData(cursor);
    return (
        <div className="paginations flex justify-between mt-8">
            {posts?.prevPost?.nodes[0]?.title.length > 0 ?
                <Link href={`/${posts?.prevPost?.nodes[0]?.slug}`} title={posts?.prevPost?.nodes[0]?.title}>
                    <div className="prev_post_link">
                        <div className="flex space-x-2 align-middle">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500 dark:text-[#FEFEFE]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                </svg>
                            </div>
                            <div className="capitalize text-gray-400 dark:text-[#FEFEFE] text-xl font-light">previous post</div>
                        </div>
                        <div>
                            <h5 className="font-medium capitalize pl-6 text-[#444] dark:text-white hover:text-[#43A047] transition ease-in-out duration-200 dark:hover:text-[#43A047]">{truncateString(posts?.prevPost?.nodes[0]?.title, 30)}...</h5>
                        </div>
                    </div>
                </Link> : <div></div>
            }
            {posts?.nextPost?.nodes[0]?.title.length > 0 ?
                <Link href={`/${posts?.nextPost?.nodes[0]?.slug}`} title={posts?.nextPost?.nodes[0]?.title}>
                    <div className="next_post_link">
                        <div className="flex space-x-2 align-middle justify-end">
                            <div className="capitalize text-gray-400 dark:text-[#FEFEFE] text-xl font-light">next post</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-[#FEFEFE]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h5 className="font-medium capitalize pr-6 text-[#444] dark:text-white hover:text-[#43A047] transition ease-in-out duration-200 dark:hover:text-[#43A047]">{truncateString(posts?.nextPost?.nodes[0]?.title, 30)}...</h5>
                        </div>
                    </div>
                </Link> : <div></div>
            }
        </div>
    );
}

export default PostPagination;