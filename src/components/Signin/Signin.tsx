import Link from "next/link";
import { BsFillPersonFill, BsFillLockFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';
import { http } from "../../../utils/request";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    email: yup.string().email().required(),
    username: yup.string().required(),
    password: yup.string().required(),
}).required();
type FormData = yup.InferType<typeof schema>;


const Signin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
    });


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');




    const onSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const details = {
                email,
                password,
                role: 2
            }

            const res = await http.post(`/auth/signin`, { ...details });


            console.log(res.data)
            JSON.stringify(res.data)
            btoa(JSON.stringify(res.data))
            localStorage.setItem('data', btoa(JSON.stringify(res.data)))

        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div className="mt-10 flex flex-col gap-3 w-80 xxl:w-[400px] xxxl:w-[480px]">
            <section className="px-2">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-5">
                        <div className="flex flex-raw relative items-center">
                            <BsFillPersonFill className="fill-[#CD212A] absolute ml-2" />
                            <input
                                type="email"
                                // name="email"
                                {...register("email", { required: true })}
                                placeholder="Email and Contact Number"
                                className="pl-8 py-2 w-full border border-gray-400 placeholder-gray-600"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <p className="pl-2 text-red-600">{errors.email && "Email is required"} </p>


                        <div className="flex flex-raw relative items-center">
                            <BsFillLockFill className="fill-[#CD212A] absolute ml-2" />
                            <input
                                type="password"
                                // name="password"
                                {...register("password", { required: true })}
                                placeholder="Password"
                                className="pl-8 py-2 w-full border border-gray-400 placeholder-gray-600"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <p className="pl-2 text-red-600">{errors.password && "Password is required"} </p>


                        {/* <p className="mx-2 text-[#CD212A] text-xs"><Link href="#">Forget Password ?</Link></p> */}

                        <button className="bg-[#8DC14F] text-white w-full rounded-lg py-2" type="submit">
                            Login
                        </button>
                    </div>
                </form>
            </section>

            <div className="flex items-center gap-2 px-2 my-4">
                <span className="w-full h-[1px] bg-gray-400 flex-1"></span>
                <span className="text-gray-800 font-semibold text-base">or</span>
                <span className="w-full h-[1px] bg-gray-400 flex-1"></span>
            </div>

            {/* <div className="flex flex-raw gap-1 mx-2 mt-10">
                <hr className=" text-black bg-black h-px w-5/12" />
                <p className="w-2/12 text-center"> or </p>
                <hr className=" text-black bg-black h-px w-5/12" />
            </div> */}

            <div className="flex flex-raw relative items-center mx-auto ">
                <FcGoogle className="fill-blue-500 absolute ml-4 " />
                <button
                    className="border border-[#8DC14F] rounded-lg text-[#8DC14F] py-1 w-[300px] xxl:w-[390px] xxxl:w-[460px] pl-6 hover:bg-[#8DC14F] hover:text-white ">
                    Login with Google
                </button>
            </div>

            {/* <div className="flex flex-raw relative items-center mx-20 mt-7 mb-20">
                <FaFacebook className="fill-blue-500 absolute ml-4  " />
                <button className="border border-[#8DC14F] rounded-lg text-[#8DC14F] py-1 w-56 pl-6">Login with Facebook</button>
            </div> */}

        </div>
    );
};

export default Signin;
