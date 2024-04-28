import React from "react";

function Banner() {
  return (
    <>
      <div>
        <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center text-gray-600 body-font bg-slate-300 dark:bg-slate-500 dark:text-white">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-bold text-gray-900">
              Welcome to the{" "}
              <span className="text-red-500 font-bold text-6xl">BOOKSTORE</span>
              <br className="hidden lg:inline-block" />
              Are you ready to learn something new ?
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex flex-col justify-center items-center text-center my-4 gap-5">
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered w-80 h-10 max-w-sm "
              />
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-2xl text-lg">
                Lets get started !
              </button>
              {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-2xl"
              alt="hero"
              src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1714231013~exp=1714234613~hmac=e4b461eae91bf4ec08d1f494ca6a9abbbd3aa3d33fe24b83cfc46c704e5b3bd4&w=740"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
