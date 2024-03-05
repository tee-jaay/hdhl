import Image from "next/image";
import Link from "next/link";
import truncateString from "@/_helpers/truncrateString";
import UserProps from "@/_models/UserProps";

const PostAuthor = ({ author }: { author: UserProps }) => {
    return (
        <div className="author flex space-x-6 bg-[#F9F9F9] dark:bg-[#333] mt-14 py-9 px-8 ">
            <div className="avatar w-2/12">
                <Image
                    alt={author?.name}
                    src={author?.avatar?.url}
                    width={200}
                    height={200}
                    className="rounded-full"
                />
            </div>
            <div className="author-info flex flex-col w-10/12">
                <div className="author_name text-2xl tracking-wide font-medium text-[#000] dark:text-white">{author?.name}</div>
                <div className="author_bio text-[#505050] dark:text-[#FEFEFE]">{truncateString(author?.description, 240)}</div>
                <div className="all_stories mt-2 text-[#000] dark:text-white">
                    All articles by: <Link href={`/authors/${author?.slug}`} title={author?.name}>{author?.name}</Link>
                </div>
            </div>
        </div>
    );
}

export default PostAuthor;