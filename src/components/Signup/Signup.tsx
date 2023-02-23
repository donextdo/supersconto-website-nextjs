import Link from "next/link";
import { useState } from 'react';
import {
  BsFillPersonFill,
  BsTelephoneFill,
  BsFillLockFill,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
var bcrypt = require('bcryptjs');
// import axios from 'axios';

import { http } from "../../../utils/request";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  fullname: yup.string().required(),
  contactNumber: yup.number().positive().integer().required(),
  email: yup.string().email().required(),
  username: yup.string().required(),
  password: yup.string().required(),
  confirmPassword: yup.string().oneOf([yup.ref('password')]).required(),
}).required();
type FormData = yup.InferType<typeof schema>;



const Signup = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [fullname, setFullname] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const onSubmit = async (e: any) => {
    // e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword)

    const data = {
      fullName: fullname,
      phone: contactNumber,
      email: email,
      username: username,
      password: hashedPassword,
      userType: 2,
      isVerified: 1,
      isDelete: 0
    };

    try {
      const response = await http.post(`/auth/signup`, { ...data });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="w-80 xxl:w-[400px] xxxl:w-[480px]">
      <form onSubmit={handleSubmit(onSubmit)} >
        
          <section className=" mt-8 overflow-y-scroll overflow-x-hidden sm:h-[35vh] l">
            <div className="flex flex-raw relative items-center mx-2">
              <BsFillPersonFill className="fill-[#CD212A] absolute ml-2" />
              <input
                type="text"
                {...register("fullname", { required: true })}
                // name="fullName"
                placeholder="Full Name"
                className="pl-8 py-2 w-full border border-gray-400 placeholder-gray-600"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}

              />

            </div>
            <p className="pl-2 text-red-600">{errors.fullname && "First name is required"} </p>

            <div className="flex flex-raw relative items-center mx-2 mt-5">
              <BsTelephoneFill className="fill-[#CD212A] absolute ml-2" />
              <input
                type="text"
                // name="contactNumber"
                {...register("contactNumber", { required: true })}
                placeholder="Contact Number"
                className="pl-8 py-2 w-full border border-gray-400 placeholder-gray-600"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}

              />
            </div>
            <p className="pl-2 text-red-600">{errors.fullname && "Contact Number is required"} </p>

            <div className="flex flex-raw relative items-center mx-2 mt-5">
              <MdEmail className="fill-[#CD212A] absolute ml-2" />
              <input
                type="email"
                // name="email"
                {...register("email", { required: true })}
                placeholder="Email"
                className="pl-8 py-2 w-full border border-gray-400 placeholder-gray-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}

              />
            </div>
            <p className="pl-2 text-red-600">{errors.fullname && "Email is required"} </p>

            <div className="flex flex-raw relative items-center mx-2 mt-5">
              <BsFillPersonFill className="fill-[#CD212A] absolute ml-2" />
              <input
                type="text"
                // name="username"
                {...register("username", { required: true })}
                placeholder="Username"
                className="pl-8 py-2 w-full border border-gray-400 placeholder-gray-600"
                value={username}
                onChange={(e) => setUsername(e.target.value)}

              />
            </div>
            <p className="pl-2 text-red-600">{errors.fullname && "Username is required"} </p>

            <div className="flex flex-raw relative items-center mx-2 mt-5">
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
            <p className="pl-2 text-red-600">{errors.fullname && "Password is required"} </p>

            <div className="flex flex-raw relative items-center mx-2 mt-5">
              <BsFillLockFill className="fill-[#CD212A] absolute ml-2" />
              <input
                type="password"
                // name="confirmPassword"
                {...register("confirmPassword", { required: true })}
                placeholder="Confirm Password"
                className="pl-8 py-2 w-full border border-gray-400 placeholder-gray-600"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}

              />
            </div>
            <p className="pl-2 text-red-600">{errors.fullname && "Passwords do not match"} </p>

          </section>

          
            <p className="text-xs mx-2 mt-16 ">
              By clicking the `Sign Up` button you will agree to our terms and
              conditions
            </p>

            <div className="mt-8 xmd:mt-14 ">
              <button type="submit" className="bg-[#8DC14F] text-white w-[305px] xxl:w-[390px] xxxl:w-[470px] rounded-lg mx-2 py-2 mb-4 ">
                Sign Up
              </button>
            </div>

            {/* <div className="relative">
              <button type="submit" className="bg-[#8DC14F] text-white w-[305px] xxl:w-[390px] xxxl:w-[470px] rounded-lg mx-2 py-2 mt-8 mb-4 fixed bottom-8">
                Sign Up
              </button>
              </div> */}
          
        
      </form>
    </div>
  );
};

export default Signup;
