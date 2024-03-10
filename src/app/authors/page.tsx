import React from "react";
import Link from "next/link";
import { faFacebookSquare, faInstagramSquare, faSquareXTwitter, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import UserProps from "@/_lib/models/UserProps";
import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getAllUsers from "@/_lib/graphQl/queries/getAllUsers";

const getData = async () => {
    // Construct the query and variables
    const query = getAllUsers();
    // Convert the limit to an integer
    const variables = {};
    try {
        // Make the request and return the data
        const data = await gqlQuery(query, variables);
        return data?.users?.nodes;
    } catch (error) {
        // Handle the error here
        console.error(error);
        throw error;
    }
}

const AuthorCard: React.FC<{ author: UserProps }> = ({ author }) => <div className="author_card flex flex-col">
    <div className="flex flex-col h-52 bg-cover bg-no-repeat justify-end" style={{ backgroundImage: `url(${author?.avatar?.url})` }}>
        <div className="socials flex mb-4 space-x-2 justify-center">
            <Link className="social" href={`/authors/${author?.slug}`}>
                <FontAwesomeIcon className="text-[#0866ff]" icon={faFacebookSquare} width={20} />
            </Link>
            <Link className="social" href={`/authors/${author?.slug}`}>
                <FontAwesomeIcon className="text-[#FF3385]" icon={faInstagramSquare} width={20} />
            </Link>
            <Link className="social" href={`/authors/${author?.slug}`}>
                <FontAwesomeIcon className="text-[#46C7FF]" icon={faSquareXTwitter} width={20} />
            </Link>
            <Link className="social" href={`/authors/${author?.slug}`}>
                <FontAwesomeIcon className="text-[#EF242B]" icon={faYoutubeSquare} width={20} />
            </Link>
        </div>
    </div>
    <div className="flex flex-col items-center mt-4">
        <Link href={`/authors/${author?.slug}`}>
            <h5>{author?.name}</h5>
        </Link>
        <h6 className="font-light capitalize">...</h6>
    </div>
</div>

const Authors: React.FC<{}> = async () => {
    const users = await getData();
    return (
        <div className="dark:bg-[#333]">
            <div className="tab:w-[640px] laptop:w-[768px] desktop:w-full mx-auto dark:bg-[#333] dark:text-white py-16">
                <h2 className="capitalize text-center dark:text-white font-medium">meet our authors</h2>
                <div className="authors_list dark:bg-[#333] grid phone:grid-cols-1 tab:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-x-6 gap-y-8">
                    {users && users.map((user: UserProps, _i: number) => <AuthorCard key={user?.id} author={user} />)}
                </div>
            </div>
        </div>
    );
}

export default Authors;