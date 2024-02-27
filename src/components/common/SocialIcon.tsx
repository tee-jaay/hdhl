import Link from 'next/link';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';

import SocialIconProps from '@/_models/SocialIconProps';


const SocialIcon = ({ link, title, icon }: SocialIconProps) => {
    return (
        <Link href={link} target="_blank" title={title}>
            <FontAwesomeIcon className="w-3 h-3 text-gray-400 hover:text-white transition ease-in-out duration-300" icon={icon} />
        </Link>
    )
}

export default SocialIcon;