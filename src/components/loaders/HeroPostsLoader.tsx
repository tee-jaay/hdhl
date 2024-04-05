import React from "react";

const HeroPostsLoader: React.FC = () => {
    return (
        <section className="hero phone:h-[400px] laptop:h-[400px] desktop:h-[580px] flex space-x-6">
            <div className="hero_right tab:w-1/2 laptop:w-1/2 h-full flex-1 flex-col space-y-6 overflow-clip phone:hidden tab:block">
                <div className="mx-auto animate-pulse flex flex-col space-y-6">
                    <div className="bg-gray-200 w-full h-[500px]"></div>
                </div>
            </div>
            <div className="hero_right tab:w-1/2 laptop:w-1/2 h-full flex-1 flex-col space-y-6 overflow-clip phone:hidden tab:block">
                <div className="h-1/2">
                    <div className="mx-auto animate-pulse flex flex-col space-y-6">
                        <div className="bg-gray-200 w-full h-[500px]"></div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default HeroPostsLoader;