import Image from 'next/image';
import SectionHeading from '../SectionHeading';

const FollowUs = () => {
    return (
        <div>
            <SectionHeading headingProps={{ text: "follow us" }} />
            <div className="follow_us_section mt-4 grid grid-cols-2 gap-2">
                <div>
                    <Image src={"https://picsum.photos/300/200"} alt='' width={300} height={200} />
                </div>
                <div>
                    <Image src={"https://picsum.photos/300/200"} alt='' width={300} height={200} />
                </div>
                <div>
                    <Image src={"https://picsum.photos/300/200"} alt='' width={300} height={200} />
                </div>
                <div>
                    <Image src={"https://picsum.photos/300/200"} alt='' width={300} height={200} />
                </div>
                <div>
                    <Image src={"https://picsum.photos/300/200"} alt='' width={300} height={200} />
                </div>
                <div>
                    <Image src={"https://picsum.photos/300/200"} alt='' width={300} height={200} />
                </div>
            </div>
        </div>
    );
}

export default FollowUs;