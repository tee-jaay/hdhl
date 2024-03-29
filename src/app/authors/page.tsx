import React from "react";
import Link from "next/link";
import { IconDefinition, faFacebookSquare, faInstagramSquare, faSquareXTwitter, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getUserProfiles from "@/_lib/graphQl/queries/getUserProfiles";
import ProfileProps from "@/_lib/models/ProfileProps";
import removeHtmlTags from "@/_lib/helpers/removeHtmlTags";
import stringToObject from "@/_lib/helpers/stringToObject";

const addNameAndPosts = (array1: any[], array2: any[]) => {
    // Iterate over the first array
    for (let i = 0; i < array1.length; i++) {
        // Check if the current element in the first array has a slug property
        if (array1[i].slug) {
            // Find the matching object in the second array based on slug
            const matchingObject = array2.find((obj) => obj.slug === array1[i].slug);

            // If a matching object is found, add the name
            if (matchingObject) {
                array1[i].name = matchingObject.name;
            }
        }
    }

    // Return the modified first array
    return array1;
};

const getData = async () => {
    // Construct the query and variables
    const query = getUserProfiles();
    // Convert the limit to an integer
    const variables = {};
    try {
        let arr: ProfileProps[] = [];
        // Make the request and return the data
        const data = await gqlQuery(query, variables);

        const guprofiles = data?.guprofiles?.nodes;
        const users = data?.users?.nodes;

        if (guprofiles && users) {
            arr = addNameAndPosts(guprofiles, users);
            return arr;
        } else {
            return arr;
        }
    } catch (error) {
        // Handle the error here
        console.error(error);
        throw error;
    }
}

interface GenerateProfileSocialLinkProps {
    data: string;
}

const GenerateProfileSocialLink: React.FC<GenerateProfileSocialLinkProps> = ({ data }) => {
    const socialColors: { [key: string]: string } = {
        facebook: "text-[#0866ff]",
        instagram: "text-[#FF3385]",
        twitter: "text-[#46C7FF]",
        youtube: "text-[#EF242B]",
    };

    const socialUrlStr: { [key: string]: string } = {
        facebook: "https://www.facebook.com",
        instagram: "https://www.instagram.com",
        twitter: "https://twitter.com",
        youtube: "https://www.youtube.com/channel",
    };

    const socialIcons: { [key: string]: IconDefinition } = {
        facebook: faFacebookSquare,
        instagram: faInstagramSquare,
        twitter: faSquareXTwitter,
        youtube: faYoutubeSquare,
    };

    const filteredHtml = removeHtmlTags(data);
    const socials = stringToObject(filteredHtml);

    return (
        <div className="socials flex mb-4 space-x-2 justify-center">
            {Object.keys(socials).map((social, i) => {
                const icon = socialIcons[social];
                return (
                    <Link key={i} href={socials[social] ? `${socialUrlStr[social]}/${socials[social]}` : "/"}>
                        {icon && <FontAwesomeIcon className={`${socialColors[social]} w-8 h-8 mx-1`} icon={icon} width={20} />}
                    </Link>
                )
            })}
        </div>
    );
};

const AuthorCard: React.FC<{ author: ProfileProps }> = ({ author }) => <div className="author_card flex flex-col">
    <div className="flex flex-col h-52 bg-cover bg-no-repeat justify-end" style={{ backgroundImage: `url(${author?.featuredImage?.node?.sourceUrl})` }}>
        <GenerateProfileSocialLink data={author?.content} />
    </div>
    <div className="flex flex-col items-center mt-4">
        <Link href={`/authors/${author?.slug}`}>
            <h5>{author?.name}</h5>
        </Link>
        <h6 className="font-light capitalize" dangerouslySetInnerHTML={{ __html: author?.excerpt ?? "" }} />
    </div>
</div>

const Authors: React.FC<{}> = async () => {
    const profiles = await getData();
    return (
        <div className="dark:bg-[#333]">
            <div className="tab:w-[640px] laptop:w-[768px] desktop:w-full mx-auto dark:bg-[#333] dark:text-white py-16">
                <h2 className="capitalize text-center dark:text-white font-medium">meet our authors</h2>
                <div className="authors_list phone:w-full phone:px-2 tab:px-1 desktop:w-[1024px] mx-auto dark:bg-[#333] grid phone:grid-cols-1 tab:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-x-6 gap-y-8">
                    {profiles && profiles.map((user: ProfileProps, _i: number) => <AuthorCard key={user?.slug} author={user} />)}
                </div>
            </div>
        </div>
    );
}

export default Authors;