import Link from "next/link";

interface Tag {
    name: string,
    slug: string,
}

interface Tags {
    tags: Tag[]
}

const PostTags = ({ tags }: Tags) => {
    return (
        <div className="tags_links flex flex-wrap items-start">
            {tags?.map((tag, _i) => (
                <div key={tag.slug} className="mr-1 mb-2 text-xs">
                    <Link title={tag.name} href={`/tags/${tag.slug}`}>
                        <span className="capitalize text-[#444444] border border-[#cccccc] py-1 px-4">
                            {tag.name}
                        </span>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default PostTags;