
import Link from "next/link";
import React, { useState } from "react";
import { http } from "../../../../../utils/request";
import { useRouter } from "next/router";

import { POSITION, position } from "html2canvas/dist/types/css/property-descriptors/position";
import Swal from "sweetalert2";


type FormValues = {
  email: string;
  password: string;
};

type Props = {
  onSubmit: (values: FormValues) => void;
  setActiveTab:any
};

const Register: React.FC<Props> = ({setActiveTab}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      email: email,
      password: password,
      userName: email
    }
   
    try {
      const response = await http.post(`/users/register`, data);
      console.log(response.data); // do something with the response data
      if (response.status==201){
        Swal.fire({
          title: 'Success',
          text: 'Congratulations, your account has been successfully created.',
          icon: 'success',
          confirmButtonText: 'Done',
          confirmButtonColor: '#8DC14F',
          
        })

      }
      setActiveTab("tab1")

    } catch (error) {
      console.log(error); // handle the error
    }
  };
  return (
    <>
      <div className="max-w-lg mx-auto  border-t-0">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-5 mb-16">
          <div className="mx-2 gap-y-6 gap-x-8 ">
            <div>
              <label htmlFor="email" className="block text-sm text-gray-900 ">
                Email address *
              </label>
              <div className="mt-3">
                <input
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required 
                  className="block w-full border-0 py-2 px-3.5 text-gray-900 bg-[#f3f4f7] "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="password" className="block text-sm text-gray-900">
                Password *
              </label>
              <div className="mt-3">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="password"
                  required 
                  className="block w-full border-0 py-2 px-3.5 text-gray-900 bg-[#f3f4f7]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="pl-3 mt-5">
            <span className="justify-center  text-[12px] text-gray-600">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </span>
          </div>

          <div className="mx-2 mt-5 mb-10 ">
            <button
              type="submit"
              className=" rounded-md w-full block bg-[#8DC14F]  px-3.5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Register;
