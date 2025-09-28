/** @format */

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"; // If you're using navigation
import "swiper/css/pagination"; // If you're using pagination
import imgA from "../../assets/imgA.png";
import imgB from "../../assets/imgB.png";
import imgC from "../../assets/imgC.png";
import imgD from "../../assets/imgD.png";
import vector from "../../assets/vector.png";

const OurCourses = () => {
  const slides = [
    {
      img: imgA,
      header: "Climate Change Fundamentals",
      text: "Understand the science behind climate change, its causes, and impacts on the global environment.",
    },
    {
      img: imgB,
      header: "Sustainable Gardening",
      text: "Learn techniques for creating and maintaining environmentally friendly gardens that support biodiversity.",
    },
    {
      img: imgC,
      header: "Composting Techniques",
      text: "Understand the process of composting organic waste to enrich soil and reduce landfill use.",
    },
    {
      img: imgD,
      header: "Climate Change Advocacy",
      text: "Develop skills to effectively advocate for climate action    and influence policy changes.",
    },
  ];
  const autoplayDelay = 2000;

  return (
    <div className="mx-10 mt-12">
      <h1 className={`font-figtree font-medium text-2xl  mt-4 `}>
        Our Courses
        <hr className="w-full border border-black " />
      </h1>
      <div className="justify-center mt-8 my-swiper-container ">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          // spaceBetween={5}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: autoplayDelay, disableOnInteraction: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            640: {
              slidesPerView: 1.5, // Show more slides on small screens
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2, // Medium screens
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3, // Larger screens
              spaceBetween: 30,
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center px-10 "
            >
              <div className="py-4 px-5  bg-[#FFFFFF]  h-[367px] lg:w-[380px] rounded-[10px]  shadow-custom relative mb-8">
                <img src={slide.img} alt="" />
                <h1 className="mt-4 text-2xl font-medium font-figtree">
                  {slide.header}
                </h1>
                <p className="text-base font-normal leading-6 font-figtree">
                  {slide.text}
                </p>
                <div className="absolute mx-4 button-container bottom-4">
                  <button className="border  button  bg-[#008056] h-9 w-36 rounded-lg ">
                    <p
                      className={`text-base font-normal text-white font-figtree`}
                    >
                      See more
                    </p>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex-col items-center justify-center h-full mx-auto mb-20 ">
          <button className="w-20 h-20 rounded-[49px] flex justify-center items-center m-auto bg-[#D8F8FD] mt-4">
            <img
              src={vector}
              width={38}
              height={26}
              alt="Description of the image"
              // className="item-center"
            />
          </button>
          <p className="mt-2 text-center font-figtree">View all</p>
        </div>
      </div>
    </div>
  );
};

export default OurCourses;
