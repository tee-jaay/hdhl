import React from "react";
import Image from "next/image";
import Link from "next/link";

import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getUserBySlug from "@/_lib/graphQl/queries/getUserBySlug";
import getUserProfile from "@/_lib/graphQl/queries/getUserProfile";

const getData = async (params: string) => {
    // Construct the query and variables
    const query = getUserBySlug();
    const profileQuery = getUserProfile();
    const variables = { id: params, };
    try {
        // Make the request and return the data
        const userData = await gqlQuery(query, variables);
        const profileData = await gqlQuery(profileQuery, variables);
        return {
            user: userData?.user,
            profileImg: profileData?.guprofile,
        };
    } catch (error) {
        // Handle the error here
        console.error(error);
        throw error;
    }
}

const AuthorDetailsPageHeaderSection: React.FC<{ slug: string }> = async ({ slug }) => {
    const { user, profileImg } = await getData(slug);
    return (
        <div className="blog_header py-16 bg-[#FBFAFA] dark:bg-[#333] w-full">
            <h2 className="tab:w-[640px] laptop:w-[768px] desktop:w-full mx-auto  text-[#222] dark:text-white text-center tab:text-2xl laptop:text-3xl desktop:text-4xl font-medium tracking-wide">{user?.name}</h2>
            <h6 className="text-[#8F8E8E] dark:text-white text-lg flex justify-center items-center capitalize">
                <Link href={"/"}>home</Link>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
                <Link href="/blog">blog</Link> <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
                <Link href={"/authors"}>authors</Link> <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
                <span>
                    {user?.name}
                </span>
            </h6>
            <div className="user_avatar mt-4 flex justify-center">
                <Image alt={profileImg?.featuredImage?.node?.altText} src={profileImg?.featuredImage?.node?.sourceUrl} width={100} height={100} />
            </div>
            <div className="tab:w-[640px] laptop:w-[768px] desktop:[1024px] mx-auto  mt-6 text-center dark:text-white text-[#555] phone:px-1 tab:px-2 laptop:px-4" dangerouslySetInnerHTML={{ __html: user?.description }} />
        </div>
    );
}

export default AuthorDetailsPageHeaderSection;