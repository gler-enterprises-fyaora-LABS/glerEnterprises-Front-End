import React, { useState } from "react";
import "@/styles/global.css";
import Image from "next/image";
import AuthButton from "@/components/AuthButton";
import Link from "next/link";
import { Api } from "@/api/Api";

export default function Index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // To toggle password visibility
  const apiClient = new Api();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please fill out user and password fields.");
      return;
    }

    // Create a LoginDTO object
    const loginData: LoginDTO = {
      username: username,
      password: password,
    };

    try {
      // Call the authenticate function
      const response = await apiClient.api.authenticate(loginData);

      // Optionally handle the response
      console.log("Login successful:", response);

      setError(""); // Clear error state on successful login
    } catch (error) {
      // Handle errors, e.g., invalid credentials
      console.error("Login failed:", error);
      setError("Invalid credentials or server error. Please try again.");
    }
  };

  return (
    <div className="flex w-full bg-slate-50]">
      {/*<div className="hidden md:block bg-neutral-500 md:w-[80%] md: border-2 border-red-600"></div>*/}
      <div className="flex flex-col items-center w-full bg-white">
        <Image
          src="/Frame 62678.png"
          alt="logo"
          width={200}
          height={200}
          className="w-[89.55px] h-[74.519px] mb-[10px]"
        />
        <div className=" flex items-center justify-center w-[390px] h-10 mt-5 mb-5">
          <h1 className="text-neutral-100 font-semibold text-4xl">Sign in</h1>
        </div>
        <div className="flex flex-col space-y-4 justify-center items-center w-[390px] py-4 px-6">
          <AuthButton
            imgSRC="/Group 62621.png"
            buttonText="Continue with Google"
            altText="Google"
          />
          <AuthButton
            imgSRC="/Vector.png"
            buttonText="Sign in with Apple"
            altText="Google"
          />
        </div>
        <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 justify-center items-center w-[390px] border-t-2  py-4 px-6 mt-6"
        >
          <div className="w-full ">
            <input
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Email"
                className="w-[342px] h-[56px] px-4 py-2 rounded-md border-2 border-neutral-300 focus:outline-none focus:border-blue-500"
                required
            />
          </div>

          <div className="w-[342px] relative">
            <input
                type={showPassword ? "text" : "password"} // Dynamically change input type
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-[342px] h-[56px] px-4 py-2 rounded-md border-2 border-neutral-300 focus:outline-none focus:border-blue-500"
                required
            />
            <Image
                src={showPassword ? "/eye-off.svg" : "/eye-on.svg"} // Change icon based on visibility
                alt="Toggle password visibility"
                width={24}
                height={24}
                className="absolute right-4 top-4 cursor-pointer"
                onClick={() => setShowPassword((prevState) => !prevState)} // Toggle visibility state
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="w-full flex justify-end text-center ">
            <Link href="#" className="text-neutral-400 mb-5 text-sm hover:underline ">
              Forgot Password?
            </Link>
          </div>
          <div className="w-full flex justify-between items-center">
            <button
                type="submit"
                className="w-[342px] bg-blue-600 text-white py-2 rounded-3xl h-[48px]"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className=" w-[430px] h-[65px] mt-[85px] flex items-center justify-center">
          <Link href='#' className="text-neutral-400">New here?</Link>
          <Link href='#' className="text-blue-600">Creat account</Link>
        </div>
      </div>
    </div>
  );
}
