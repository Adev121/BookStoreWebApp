import React from "react";
import list from "../../public/list.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";

function Freebook() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const filterData = list.filter((data) => data.category === "Free");

  return (
    <>
      <div className="max-w-screen-lg container p-4 my-5 bg-slate-200 mx-auto rounded-lg md:max-w-screen-2xl dark:text-white dark:bg-slate-800">
        <h1 className="font-bold text-2xl text-pink-500">Free Offered Courses</h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          consequatur suscipit officiis quaerat esse eos tempore culpa, rerum
          voluptates nobis asperiores quam. Ea corrupti, non harum quasi est
          consequatur accusantium ullam, ad, dicta earum atque?
        </p>
      </div>
      <div className="max-w-screen-lg container my-5 mx-auto md:max-w-screen-2xl">
        <Slider {...settings}>
          {filterData.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Freebook;
