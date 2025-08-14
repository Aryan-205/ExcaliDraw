"use client";

import Sigin from "@/app/signin";
import Signup from "@/app/signup";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Idetails {
    name:string,
    email:string,
    password:string
}


export function AuthPage({isSignin}: { isSignin: boolean }) {

    const router = useRouter()

    async function EnterButton(){
        let result
        if(isSignin){
            result = await Sigin(details)
            if(result?.success){
                router.push("/room")
            }
        } else {
            result = await Signup(details)
            if(result?.success){
                router.push("/signin")
            }
        }
    }
    const [details, setDetails] = useState<Idetails>({ name: '', email: '', password: '' });

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
                                <div className="w-full">
                                    <p className="text-white font-semibold text-xl">Name</p>
                                    <input value={details.name} onChange={(e)=>setDetails({ ...details, name: e.target.value })} className="border border-white rounded-lg text-gray-300 px-4 py-2 w-full" type="text" placeholder={`Enter your Name`} />
                                </div>
                        </div>
                    }
                    <div className="w-full">
                        <p className="text-white font-semibold text-xl">Email</p>
                        <input value={details.email} onChange={(e)=>setDetails({ ...details, email: e.target.value })} className="border border-white rounded-lg text-gray-300 px-4 py-2 w-full" type="text" placeholder={`Enter your Email`} />
                    </div>
                    <div className="w-full">
                        <p className="text-white font-semibold text-xl">Password</p>
                        <input value={details.password} onChange={(e)=>setDetails({ ...details, password: e.target.value })} className="border border-white rounded-lg text-gray-300 px-4 py-2 w-full" type="password" placeholder={`Enter your Password`} />
                    </div>
                </div>
                <button onClick={EnterButton}  className="px-8 py-3 text-white shadow-[inset_0_0px_15px_10px_rgba(40,0,170)] bg-blue-500 hover:bg-blue-600 rounded-lg transition transform hover:scale-105">
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

