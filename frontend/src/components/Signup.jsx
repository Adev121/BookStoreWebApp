import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useForm } from "react-hook-form";

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => console.log(data)
  return (
    <>
      <Navbar />
      <div className="max-w-screen-lg container mx-auto md:max-w-screen-2xl">
        <div className=" bg-slate-100 flex flex-col  justify-center w-96 mx-auto rounded-xl my-40 border border-slate-200 py-4 shadow-2xl">
          <h2 className="text-pink-500 text-2xl font-bold text-center">
            SignUp
          </h2>
          <form
            method="dialog"
            className="flex flex-col gap-3 my-10 w-72 mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-auto h-4 opacity-70 "
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" className="grow" placeholder="Fullname"  {...register("Fullname", { required: true })}/>
            </label>
            {errors.Fullname && <span className="text-red-400">This field is required</span>}
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" {...register("Email", { required: true })}/>
            </label>
            {errors.Email && <span className="text-red-400">This field is required</span>}
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="password" className="grow" placeholder="password" {...register("Password", { required: true })}/>
            </label>
            {errors.Password && <span className="text-red-400">This field is required</span>}
            <button className="bg-pink-400 hover:bg-pink-500 rounded-2xl py-2 text-lg font-semibold text-white">
              SignUp
            </button>
          </form>
          <h2 className="text-center pb-6">
            Have an account!{" "}
            <span
              className="text-pink-500 hover:text-pink-700 hover:cursor-pointer"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Login
            </span>
          </h2>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
