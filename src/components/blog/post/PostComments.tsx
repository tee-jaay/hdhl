import Image from "next/image";

const PostComments = () => {
    return (
        <div className="comments py-6">
            <h3 className="capitalize font-medium text-[#000]">comments</h3>
            <div className="comments_list space-y-8">
                <div className="comment_single flex space-x-4 border-b-2 pb-6">
                    <div className="commenter_avatar w-48">
                        <Image
                            src={"https://picsum.photos/70/70"}
                            alt=""
                            width={70}
                            height={70}
                            className="rounded-full"
                        /></div>
                    <div className="comment space-y-2">
                        <div className="commenter_name capitalize font-medium text-lg">jhon doe</div>
                        <div className="comment_date">22 April, 2023</div>
                        <div className="comment_text text-[#444] font-light">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quis porro voluptas, ullam ducimus at mollitia neque doloremque illum id dicta laboriosam ea repudiandae iure hic assumenda voluptatum incidunt quibusdam?
                        </div>
                    </div>
                </div>
                <div className="comment_single flex space-x-4 border-b-2 pb-6">
                    <div className="commenter_avatar w-48">
                        <Image
                            src={"https://picsum.photos/70/70"}
                            alt=""
                            width={70}
                            height={70}
                            className="rounded-full"
                        /></div>
                    <div className="comment space-y-2">
                        <div className="commenter_name capitalize font-medium text-lg">jhon doe</div>
                        <div className="comment_date">22 April, 2023</div>
                        <div className="comment_text text-[#444] font-light">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quis porro voluptas, ullam ducimus at mollitia neque doloremque illum id dicta laboriosam ea repudiandae iure hic assumenda voluptatum incidunt quibusdam?
                        </div>
                    </div>
                </div>
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