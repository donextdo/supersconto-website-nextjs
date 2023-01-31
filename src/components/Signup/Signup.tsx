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

import {http} from "../../../utils/request";

const Signup = () => {

  
  
  const [fullname, setFullname] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async(e :any) => {
    e.preventDefault();
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
      const response = await http.post(`/auth/signup`, {...data});
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    };

  return (
    <>
      <form onSubmit={handleSubmit} >

        <section className="space-y-5 mt-10">
          <div className="flex flex-raw relative items-center mx-2">
            <BsFillPersonFill className="fill-[#CD212A] absolute ml-2" />
            <input
              type="text"
              name="enter name"
              placeholder="Full Name"
              className="pl-8 py-2 w-full border border-gray-400 placeholder-gray-600"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>

          <div className="flex flex-raw relative items-center mx-2">
            <BsTelephoneFill className="fill-[#CD212A] absolute ml-2" />
            <input
              type="text"
              name="enter name"
              placeholder="Contact Number"
              className="pl-8 py-2 w-full border border-gray-400 placeholder-gray-600"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>

          <div className="flex flex-raw relative items-center mx-2">
            <MdEmail className="fill-[#CD212A] absolute ml-2" />
            <input
              type="text"
              name="enter name"
              placeholder="Email"
              className="pl-8 py-2 w-full border border-gray-400 placeholder-gray-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-raw relative items-center mx-2">
            <BsFillPersonFill className="fill-[#CD212A] absolute ml-2" />
            <input
              type="text"
              name="enter name"
              placeholder="Username"
              className="pl-8 py-2 w-full border border-gray-400 placeholder-gray-600"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex flex-raw relative items-center mx-2">
            <BsFillLockFill className="fill-[#CD212A] absolute ml-2" />
            <input
              type="text"
              name="enter name"
              placeholder="Password"
              className="pl-8 py-2 w-full border border-gray-400 placeholder-gray-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-raw relative items-center mx-2">
            <BsFillLockFill className="fill-[#CD212A] absolute ml-2" />
            <input
              type="text"
              name="enter name"
              placeholder="Confirm Password"
              className="pl-8 py-2 w-full border border-gray-400 placeholder-gray-600"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </section>

        <p className="text-xs mx-2 mt-6">
          By clicking the `Sign Up` button you will agree to our terms and
          conditions
        </p>

        <button type="submit" className="bg-[#8DC14F] text-white w-full rounded-lg mx-2 py-2 mt-12 mb-4">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default Signup;
