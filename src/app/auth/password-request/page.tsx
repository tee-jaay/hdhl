"use client";

import React from "react";

const PasswordRequest: React.FC = () => {
    return (
        <div className="phone:w-full tab:w-full laptop:w-[1024px] desktop:w-[1024px] mx-auto">
            <div className="form-container w-1/3 mx-auto my-48">
                <form className="space-y-4">
                    <div>
                        <input className="w-full py-2 px-4 bg-slate-100" type="email" name="email" placeholder="email@example.com" />
                    </div>
                    <div>
                        <button disabled className="bg-[#222] text-white py-2 px-8 hover:bg-[#43A047] transition ease-in-out duration-200 capitalize" type="submit">password request</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PasswordRequest;