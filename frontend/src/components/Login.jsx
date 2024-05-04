import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate= useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => 
  {
    console.log(data);
    // console.log(JSON.stringify(data.email));
    const userInfo={
      email:data.email,
      password:data.password
    }
    await axios.post("http://localhost:3000/userCol/login",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        // alert("Login Successfully");
        toast.success('Login Successfully!');
        localStorage.setItem("user",JSON.stringify(res.data));
        document.getElementById("my_modal_3").close();
        setTimeout(() => {
          navigate("/");
          window.location.reload();
      }, 1000);
        // if(user is on '/signup' page)
        //   then route to '/courses'
        
      }
    })
    .catch((err)=>{
      console.log(err.response.data)
      // alert("Login attempt Failed !"+JSON.stringify(err.response.data.message));
      toast.error(err.response.data.message);
    })
  }

  return (
    <>
      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <button
                type="button"
                onClick={() => document.getElementById("my_modal_3").close()}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>

              <h3 className="font-bold text-lg">Login</h3>
              {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}

              <div className="my-4 py-4 flex flex-col gap-4">
                {/* Email imput */}
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
                  <input
                    type="text"
                    className="grow"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                  
                </label>
                {errors.email && <span className="text-red-400">This field is required</span>}
                {/* Password imput */}
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
                  <input
                    type="password"
                    className="grow"
                    placeholder="password"
                    {...register("password", { required: true })}
                  />
                </label>
                {errors.password && <span className="text-red-400">Password should be between 8-16 characters</span>}
                <button
                  type="submit"
                  className="bg-pink-400 p-2 text-white rounded-xl hover:bg-pink-500"
                >
                  Login
                </button>
                <div>
                  <Link to="/signup">
                    Not Registerd!{" "}
                    <span className="text-pink-500 hover:text-pink-700" onClick={() => document.getElementById("my_modal_3").close()}>
                      SignUp here
                    </span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
