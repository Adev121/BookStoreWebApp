import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Course() {
  console.log(list);
  return (
    <>
      <Navbar />
      <div className="min-h-screen max-w-screen-2xl container mx-auto my-4 ">
        <div className="border border-slate-100 flex flex-col items-center p-5 bg-slate-200 rounded-xl">
          <h1 className="text:sm md:text-2xl font-bold mx-5 py-5 text-pink-500  ">
            We are Delighted to have you here{" "}
            <span className="text-2xl">😊</span>
          </h1>
          <p className="text-sm md:text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi modi
            excepturi obcaecati, illo ipsa distinctio ipsum similique neque
            adipisci reprehenderit voluptas earum dolores deleniti placeat
            blanditiis atque fugiat consectetur? Vitae quibusdam ipsum impedit
            veritatis deleniti autem sit minus praesentium possimus, nobis
            laboriosam adipisci soluta. Blanditiis natus aliquam aperiam sunt
            officiis.
          </p>
          <div className="flex flex-row justify-center">
        <Link to="/">
        <button className=" my-4 w-22 md:w-54 bg-pink-500 text-white hover:cursor-pointer hover:bg-pink-600 py-2  px-10 text-sm md:text-xl rounded-2xl ">
          Back
        </button>
        </Link>
        
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 py-4">
            {
                list.map((item)=>(
                    <Cards item={item} key={item.id}/>
                ))
            }
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Course;
