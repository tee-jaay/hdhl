"use client";

import React, { MouseEvent } from "react";

const Register: React.FC = () => {
    const register = (e: MouseEvent<HTMLButtonElement> | undefined) => {
        e?.preventDefault();
        console.log('register');
    }
    return (
        <div className="phone:w-full tab:w-full laptop:w-[1024px] desktop:w-[1024px] mx-auto">
            <div className="form-container phone:w-full tab:w-1/2 laptop:w-1/3 tab:mx-auto phone:px-2 my-32">
                <form className="space-y-4">
                    <div>
                        <input className="w-full py-2 px-4 bg-slate-100" type="email" name="email" placeholder="email@example.com" />
                    </div>
                    <div>
                        <input className="w-full py-2 px-4 bg-slate-100" type="text" name="username" placeholder="UserName" />
                    </div>
                    <div>
                        <input className="w-full py-2 px-4 bg-slate-100" type="password" name="password" placeholder="Password" />
                    </div>
                    <div>
                        <input className="w-full py-2 px-4 bg-slate-100" type="password" name="password" placeholder="Password Confirmation" />
                    </div>
                    <div>
                        <button className="bg-[#222] text-white py-2 px-8" type="submit" onClick={(e) => register(e)}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;