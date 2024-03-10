import React from "react";
import Link from "next/link";
import { publicAppUrl } from "@/_lib/variables/constants";

const ReadMore: React.FC<{ slug: string }> = ({ slug }) => {
    return (
        <div className="post_read_more mt-7">
            <Link href={`${publicAppUrl}/${slug}`} className="capitalize flex items-center text-[#000] border border-[#e2e2e2] py-1 px-2 space-x-2 w-fit dark:text-white hover:text-[#43A047] hover:border-[#43A047] transition ease-in-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <span className="text-sm">
                    read more
                </span>
            </Link>
        </div>
    );
}

export default ReadMore;