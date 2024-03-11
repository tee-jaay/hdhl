"use client";

import Link from "next/link";
import React, { MouseEvent } from "react";

const Login: React.FC = () => {
    const login = (e: MouseEvent<HTMLButtonElement> | undefined) => {
        e?.preventDefault();
        console.log('login');
    }
    return (
        <div className="phone:w-full tab:w-full laptop:w-[1024px] desktop:w-[1024px] mx-auto">
            <div className="form-container w-1/3 mx-auto my-48">
                <form className="space-y-4">
                    <div>
                        <input className="w-full py-2 px-4 bg-slate-100" type="email" name="email" placeholder="email@example.com" />
                    </div>
                    <div>
                        <input className="w-full py-2 px-4 bg-slate-100" type="password" name="password" placeholder="Password" />
                    </div>
                    <div>
                        <button className="font-medium bg-[#222] text-white py-2 px-8 hover:bg-[#43A047] transition ease-in-out duration-300 capitalize" type="submit" onClick={(e) => login(e)}>Login</button>
                    </div>
                    <div className="flex flex-row justify-between">
                        <span>
                            <Link href={"/auth/register"} className="underline text-gray-700 hover:text-[#43A047] transition ease-in-out duration-300 capitalize">new account</Link>
                        </span>
                        <span>
                            <Link href={"/auth/password-request"} className="underline text-gray-700 hover:text-[#43A047] transition ease-in-out duration-300 capitalize">remember password</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;