"use client";

import React, { useEffect, useState } from 'react';

import { publicAppUrl } from '@/_lib/variables/constants';
import SocialIconLinkTitleProps from '@/_lib/models/SocialIconLinkTitleProps';
import SocialIcon from '@/components/common/SocialIcon';
import generateProfileLink from '@/_lib/helpers/generateProfileLink';
import generateProfileIcon from '@/_lib/helpers/generateProfileIcon';

const SocialsLinksIcons: React.FC<{}> = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [socials, setSocials] = useState<SocialIconLinkTitleProps[]>([]);

    const getData = async () => {
        const response = await fetch(`${publicAppUrl}/api/common/social-links`);
        const data = await response.json();
        return data;
    }

    useEffect(() => {
        setIsLoading(true);
        getData()
            .then((res) => { setSocials(res); })
            .catch((e) => console.log(e))
            .finally(() => setIsLoading(false));
    }, []);


    return (
        <div className="socials flex justify-center">
            <div className="flex space-x-4">
                {isLoading && <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </div>}
                {!isLoading && socials && socials.map((social, i) => (
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