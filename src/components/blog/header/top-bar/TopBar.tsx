import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'

const TopBar = () => {
    return (
        <div className="topbar flex bg-[#222]">
            <div className="latest_news flex-1">
                <span className="latest_news_title text-white">latest news</span>
                <span className="text-white">Magni accusamus suscipit nisi explicabo commodi</span>
            </div>
            <div className="follow_us flex-1 text-slate-200">
                <div className="flex">
                    <div className="flex-1">follow us</div>
                    <div className="dash flex-1">----</div>
                    <div className="socials flex-1">
                        <div className="social_items flex">
                            <FontAwesomeIcon className="" icon={faLaptop} />
                            <FontAwesomeIcon className="" icon={faLaptop} />
                            <FontAwesomeIcon className="" icon={faLaptop} />
                            <FontAwesomeIcon className="" icon={faLaptop} />
                            <FontAwesomeIcon className="" icon={faLaptop} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar