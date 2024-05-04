import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

function Contact() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <>
      <Navbar />
      <div className='container mx-auto my-10 border p-4 rounded-xl bg-slate-100 dark:bg-slate-400'>
        <h1 className='text-3xl font-bold mb-5'>Contact Me</h1>
        <p className='mb-5'>
          Feel free to reach out to me with any questions, feedback, or
          inquiries you may have. I'd love to hear from you!
        </p>
        <form className='max-w-md' onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-gray-700 font-bold'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Your Name'
              className='form-input mt-1 block w-full border border-slate-300 rounded-md focus:border-blue-400 focus:outline-none'
              {...register("name", { required: true })}
            />
            {errors.name && <span className="text-red-400">This field is required</span>}
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700 font-bold'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Your Email'
              className='form-input mt-1 block w-full border border-slate-300 rounded-md focus:border-blue-400 focus:outline-none'
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-red-400">This field is required</span>}
          </div>
          <div className='mb-4'>
            <label
              htmlFor='message'
              className='block text-gray-700 font-bold'
            >
              Message
            </label>
            <textarea
              id='message'
              name='message'
              placeholder='Your Message'
              rows='4'
              className='form-textarea mt-1 block w-full border border-slate-300 rounded-md focus:border-blue-400 focus:outline-none'
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && <span className="text-red-400">This field is required</span>}
          </div>
          <button
            type='submit'
            className='bg-blue-500 text-white font-bold my-5 py-2 px-4 rounded hover:bg-blue-600'
            onClick={()=>{
              toast.success("message submitted !!")
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;