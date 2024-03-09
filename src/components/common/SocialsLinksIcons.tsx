import React from 'react';

import gqlQuery from '@/_lib/graphQl/gqlQuery';
import getSocialLinks from '@/_lib/graphQl/queries/getSocialLinks';
import SocialIconLinkTitleProps from '@/_lib/models/SocialIconLinkTitleProps';
import SocialIcon from '@/components/common/SocialIcon';
import generateProfileLink from '@/_lib/helpers/generateProfileLink';
import generateProfileIcon from '@/_lib/helpers/generateProfileIcon';

const getData = async () => {
    // Construct the query and variables
    const query = getSocialLinks();
    const variables = {};
    try {
        // Make the request and return the data
        const data = await gqlQuery(query, variables);
        return data?.gslinks?.nodes;
    } catch (error) {
        // Handle the error here
        console.error(error);
        throw error;
    }
}

const SocialsLinksIcons: React.FC<{}> = async () => {
    const socials: SocialIconLinkTitleProps[] = await getData();
    return (
        <div className="socials flex justify-center">
            <div className="flex space-x-4">
                {socials && socials.map((social, i) => (
                    <SocialIcon key={i}
                        icon={generateProfileIcon(social?.title)}
                        link={generateProfileLink(social?.title, social?.content)}
                        title={social?.title}
                    />
                ))}
            </div>
        </div>
    );
}

export default SocialsLinksIcons;