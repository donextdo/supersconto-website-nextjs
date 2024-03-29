import { useRouter } from "next/router";
import React, { useState } from "react";
import { http } from "../../../../../utils/request";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormValues = {
  usernameoremail: string;
  password: string;
};

type Props = {
  onSubmit: (values: FormValues) => void;
};

const Login: React.FC<Props> = () => {
  const [usernameoremail, setUsernameoremail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<React.ReactNode>("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const details = {
      email: usernameoremail,
      password: password,
    };

    try {
      const response = await http.post(`/users/login`, details);
      console.log(response);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("id", response.data._id);
      localStorage.setItem("email", response.data.email);

      if (response.status == 200) {
        //  location.reload();
        // toast.success('You have successfully logged in.', {
        //   position: "top-right",
        //   autoClose: 2000,
        //   hideProgressBar: true,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,

        // });
        // router.push('/account');
        toast.success("You have successfully logged in.", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          router.push("/account");
        }, 2000);
      }
    } catch (error: any) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
        confirmButtonText: "Done",
        confirmButtonColor: "#8DC14F",
      });
    }
  };

  async function handleClick() {
    setIsLoading(true);
    if (!usernameoremail) {
      setErrorMsg("Username is required.");
    } else if (!password) {
      setErrorMsg("The password field is empty.");
    }
    setIsLoading(false);
  }
  return (
    <>
      <div className="max-w-lg mx-auto  border-t-0 ">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-5 mb-16">
          <div className="mx-2 gap-y-6 gap-x-8 ">
            <div>
              <label
                htmlFor="username-email"
                className="block text-sm text-gray-900 "
              >
                Username or email address *
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  name="username-email"
                  id="username-email"
                  autoComplete="given-username-email"
                  required
                  className="block w-full border-0 py-2 px-3.5 text-gray-900 bg-[#f3f4f7] "
                  value={usernameoremail}
                  onChange={(e) => setUsernameoremail(e.target.value)}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="password" className="block text-sm text-gray-900">
                Password *
              </label>
              <div className="mt-2.5">
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

          <div className="flex pl-3 mt-5 ">
            <input type="checkbox" className="bg-[#f3f4f7]" />
            <p className="px-3">Remember me</p>
          </div>

          <div className="mx-2 mt-5 mb-10 ">
            <button
              type="submit"
              className={`rounded-md w-full block bg-[#8DC14F] px-3.5 py-2.5 text-center text-sm font-semibold text-white${
                isLoading ? "loading" : ""
              }`}
              onClick={handleClick}
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
            <ToastContainer />
          </div>
          {errorMsg && (
            <div className="border border-gray-300 p-3 mx-2 flex items-center">
              <span className="font-bold text-black mr-2">Error:</span>
              <div className="text-black text-sm">{errorMsg}</div>
            </div>
          )}
        </form>
      </div>
    </>
  );
};
export default Login;
