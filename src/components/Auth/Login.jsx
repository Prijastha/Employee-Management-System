// import React from 'react'

import { useState } from "react";

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitHandler= (e)=>{
        e.preventDefault();
        handleLogin(email,password)
        console.log("email is",email)
        console.log("Password is",password)
        setEmail("")
        setPassword("")
    }
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="border-2 border-purple-400 p-20 rounded-lg">
        <form action="" className="flex flex-col items-center justify-center">
          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
            required
            className="  border-2 outline-none bg-transparent border-purple-400 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your Email"
          />
          <input
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
            required
            className=" border-2 outline-none bg-transparent mt-4 border-purple-400 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
            type="password"
            placeholder="Enter Password"
          />
          <button onClick={(e)=>{
            submitHandler(e);
          }} className="text-white   outline-none bg-purple-400 mt-4 text-xl py-3 px-5 rounded-full placeholder:text-white">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
