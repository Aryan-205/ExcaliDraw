"use client";

import NamedInput from "./NamedInput";

export function AuthPage({isSignin}: {
    isSignin: boolean
}) {
    return ( 
    <div className="w-screen h-screen flex bg-black">
        <div className="w-1/2 h-full flex-center">
            <div className="flex flex-col gap-4 w-full px-20">
                <p className="text-white text-5xl font-semibold">{isSignin ? 'Login' : "Create Account" }</p>
                <div className="py-12 flex-center flex-col gap-8 w-full">
                    {isSignin ?    
                        <div className="hidden"/>
                        : 
                        <div className="flex-center w-full gap-8">
                            <NamedInput name="First Name" />
                            <NamedInput name="Last Name"  />
                        </div>
                    }
                    <NamedInput name="Email" />
                    <NamedInput name="Password" />
                </div>
                <button  className="px-8 py-3 text-white shadow-[inset_0_0px_15px_10px_rgba(40,0,170)] bg-blue-500 hover:bg-blue-600 rounded-lg transition transform hover:scale-105">
                    {isSignin ? 'Login' : "Create Account"}
                </button>
            </div>
        </div>
        <div className="w-1/2 h-full relative overflow-hidden flex-center">
            <div className="flex-center rounded-2xl w-[80%] h-[80%] z-10 backdrop-blur-xl">
                <p className="text-white font-semibold text-8xl text-center font-serif">Lets get Started</p>
            </div>
            <img src="/CloseUpofWhiteCoral.png" className="w-full h-full object-cover absolute inset-0" alt="" />
        </div>
    </div>
    )
}

