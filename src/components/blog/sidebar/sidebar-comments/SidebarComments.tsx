import React from "react";
import Link from "next/link";
import Image from "next/image";

import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getLatestComments from "@/_lib/graphQl/queries/getLatestComments";
import formatDate from "@/_helpers/formatPostDate";
import SidebarComment from "@/_models/SidebarComment";
import SectionHeading from "../SectionHeading";
import PublishMonthDateYear from "@/components/common/PublishMonthDateYear";

const getData = async () => {
    // Construct the query and variables
    const query = getLatestComments();
    const variables = {
        first: 3,
        status: "APPROVE"
    };
    try {
        // Make the request and return the data
        const data = await gqlQuery(query, variables);
        return data?.comments?.nodes;
    } catch (error) {
        // Handle the error here
        console.error(error);
        throw error;
    }
}

const CommentCard: React.FC<{ comment: SidebarComment }> = ({ comment }) => <Link href={`/${comment?.commentedOn?.node?.slug}`} className="comment-single flex space-x-4 py-6">
    <div className="comment_image w-1/4">
        <Image className="rounded-full" src={comment?.author?.node?.avatar?.url} alt={comment?.author?.node?.name} width={120} height={120} />
    </div>
    <div className="comment_meta flex flex-col w-3/4">
        <div className="comment_name">
            <h5 className="capitalize line-clamp-1 dark:text-white">{comment?.author?.node?.name}</h5>
        </div>
        <div className="comment_date">
            <PublishMonthDateYear color="text-[#666]" dateMDY={formatDate(comment?.date, "numeric")} />
        </div>
        <div className="comment_content line-clamp-2 text-[#444] dark:text-[#FEFEFE] font-light"
            dangerouslySetInnerHTML={{ __html: comment?.content ?? "" }}
        />
    </div>
</Link>

const SidebarComments: React.FC = async () => {
    const comments = await getData();
    return (
        <div>
            <SectionHeading headingProps={{ text: "comments" }} />
            <div className="comments_list flex flex-col divide-y-2">
                {comments && comments.map((comment: SidebarComment, _i: number) => <CommentCard key={comment?.id} comment={comment} />)}
                {comments.length < 1 && <p>No comment yet.</p>}
            </div>
        </div>
    );
}

export default SidebarComments;