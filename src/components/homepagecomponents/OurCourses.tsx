import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
    <section className="mx-6 md:mx-10 mt-12">
      <h1 className="font-figtree font-medium text-2xl mt-4">
        Our Courses
        <hr className="w-full border border-black" />
      </h1>
      <div className="justify-center mt-8 my-swiper-container">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: autoplayDelay, disableOnInteraction: true }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="flex h-auto items-stretch justify-center px-4 sm:px-6"
            >
              <article className="course-card mb-8 w-full max-w-[380px] min-h-[390px]">
                <img
                  src={slide.img}
                  alt={slide.header}
                  className="course-card-image"
                />
                <h2 className="course-card-title mt-4 text-xl font-medium leading-snug font-figtree sm:text-2xl">
                  {slide.header}
                </h2>
                <p className="course-card-description mt-2 text-base font-normal leading-6 font-figtree">
                  {slide.text}
                </p>
                <button className="course-card-action mt-6 self-start font-figtree">
                  See more
                </button>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex-col items-center justify-center h-full mx-auto mb-20 ">
          <button className="w-20 h-20 rounded-[49px] flex justify-center items-center m-auto bg-[#D8F8FD] mt-4">
            <img
              src={vector}
              width={38}
              height={26}
              alt=""
            />
          </button>
          <p className="mt-2 text-center font-figtree">View all</p>
        </div>
      </div>
    </section>
  );
};

export default OurCourses;
