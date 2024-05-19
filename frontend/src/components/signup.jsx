import React from "react";

const signup = () => {
  return (
    <div className=" bg-gray-500 grid place-items-center min-h-screen p-6 ">
      <div className=" rounded-md bg-slate-50 w-[35rem] h-[35rem] p-6 ">
        <form>
          <div className=" mb-2">
            <h1 className=" text-black text-6xl mb-4">Sign Up</h1>
            <p className=" text-2xl text-gray-400 mb-6">
              Enter your information to create an account
            </p>
            <div className=" mb-2 flex">
              <label htmlFor="firstName" className=" block">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className=" border-solid border-2 hover:border-t-4  border-slate-400 w-full"
              />
            </div>
            <div className=" mb-2 flex">
              <label htmlFor="lastName" className=" block">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className=" border-solid border-2 hover:border-t-4  border-slate-400 w-full"
              />
            </div>
            <h1>Email</h1>
            <input type="text" />
            <h1>Password</h1>
            <input type="text" />
            <button className=" bg-black text-white">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default signup;
