import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="bg-slate-200 py-4 dark:bg-slate-500">
        <div className="card w-72 h-96 bg-slate-300 shadow-xl m-8 hover:cursor-pointer hover:shadow-slate-800 border border-1 border-slate-400 dark:bg-slate-600 dark:text-white">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline text-lg py-4">Rs. {item.price}</div>
              <div className="badge badge-outline py-4 bg-pink-500 text-white border-none hover:bg-pink-600 hover:duration-200 ease-in-out">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
