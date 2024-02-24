import Image from "next/image";

import formatDate from "@/_helpers/formatPostDate";

interface Comment {
    id: string,
    date: string,
    content: string,
    approved: boolean,
    author: {
        node: {
            name: string,
            avatar: {
                url: string
            }
        }
    }
}

interface Comments {
    comments: Comment[]
}

const PostComment = ({ comment }: { comment: Comment }) => <div className="comment_single flex space-x-4 border-b-2 pb-6">
    <div className="commenter_avatar w-1/12">
        <Image
            src={comment?.author?.node?.avatar?.url ?? "https://i.pravatar.cc/80"}
            alt={comment?.author?.node?.name}
            width={80}
            height={80}
            className="rounded-full"
        />
    </div>
    <div className="comment space-y-2 w-11/12">
        <div className="commenter_name capitalize font-medium text-lg">{comment?.author?.node?.name}</div>
        <div className="comment_date">{formatDate(comment?.date, "numeric")}</div>
        <div className="comment_text text-[#444] font-light" dangerouslySetInnerHTML={{ __html: comment?.content ?? "" }} />
    </div>
</div>

const PostComments = ({ comments }: Comments) => {
    return (
        <div className="comments py-6">
            <h3 className="capitalize font-medium text-[#000]">comments</h3>
            <div className="comments_list space-y-8">
                {comments && comments.map((comment, _i) => <PostComment key={comment.id} comment={comment} />)}
                {comments.length < 1 && <p>No comment yet.</p>}
            </div>
            <div className="comment_leave mt-8">
                <h3 className="capitalize font-medium text-[#000]">
                    Leave a Comment
                </h3>
                <div className="comment_form flex flex-col space-y-4">
                    <textarea cols={30} rows={5} placeholder="Message" className="flex-1 bg-[#f1f1f1] py-4 px-8 font-light text-lg" ></textarea>
                    <div className="flex space-x-4">
                        <input type="text" placeholder="Name" className="flex-1 bg-[#f1f1f1] py-2 px-8 font-light text-lg" />
                        <input type="email" placeholder="Email" className="flex-1 bg-[#f1f1f1] py-2 px-8 font-light text-lg" />
                    </div>
                    <input type="text" placeholder="Website" className="flex-1 bg-[#f1f1f1] py-2 px-8 font-light text-lg" />
                </div>
                <div className="comment_save_info my-6">
                    <div className="flex space-x-2">
                        <input type="checkbox" />
                        <div className="font-light text-lg text-[#666]">Save my name, email, website in this browser for my future comments</div>
                    </div>
                </div>
                <div className="comment_submit flex">
                    <button className="flex-1 capitalize text-[#FFF] bg-[#444] py-3 text-lg font-light hover:bg-[#4ce5a2] transition ease-in-out duration-300">submit comment</button>
                </div>
            </div>
        </div>
    );
}

export default PostComments;