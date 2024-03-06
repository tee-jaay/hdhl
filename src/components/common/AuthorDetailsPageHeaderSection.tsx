import Image from "next/image";
import Link from "next/link";

import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getUserBySlug from "@/_lib/graphQl/queries/getUserBySlug";

const getData = async (params: string) => {
    // Construct the query and variables
    const query = getUserBySlug();
    const variables = { id: params, };
    try {
        // Make the request and return the data
        const data = await gqlQuery(query, variables);
        return data?.user;
    } catch (error) {
        // Handle the error here
        console.error(error);
        throw error;
    }
}

const AuthorDetailsPageHeaderSection = async ({ slug }: { slug: string }) => {
    const user = await getData(slug);
    return (
        <div className="blog_header py-16 bg-[#FBFAFA] w-full">
            <h2 className="w-[1024px] mx-auto text-[#000000] text-center text-3xl font-medium tracking-wide">{user?.name}</h2>
            <h6 className="text-[#8F8E8E] text-lg flex justify-center items-center capitalize">
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
                <Image alt="" src={user?.avatar?.url} width={100} height={100} />
            </div>
            <div className="w-[1024px] mt-6 mx-auto text-center text-[#555] px-24" dangerouslySetInnerHTML={{ __html: user?.description }} />
        </div>
    );
}

export default AuthorDetailsPageHeaderSection;