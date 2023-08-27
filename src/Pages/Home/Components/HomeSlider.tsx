import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles\
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import dots1 from "../img/dots1.png";
import dots2 from "../img/dots2.png";
import "swiper/css";
import "swiper/css/navigation";
import { fetchNews } from "../../../Api/HomeApi/HomeSliderApi";
import Button from "../../../Ui/Components/Button";

export function HomeSlider() {
  const data = useQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
  });
  console.log(data);

  return (
    <section className="hero-slider">
      <img src={dots1} alt="" className="dot1" />
      <img src={dots2} alt="" className="dot2" />
      <Swiper
        grabCursor={true}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {console.log(data?.data)}
        {data?.data ? (
          data.data?.map((item) => {
            return (
              <SwiperSlide key={item?.id}>
                <div className="slider-box">
                  <figure className={`${data.isLoading && "load"}`}>
                    <img src={item?.img} alt="" />
                  </figure>
                  <div className="content ">
                    <div className="side">
                      <h4
                        className={`${data.isLoading ? "load comic" : "comic"}`}
                      >
                        {item?.newsTag}
                      </h4>
                      <h3 className={`${data.isLoading ? "load " : ""}`}>
                        {item?.newsTitle}
                      </h3>
                      <p className={`${data.isLoading ? "load " : ""}`}>
                        {item?.desc}
                      </p>
                      <Button variant="primary">See Now</Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })
        ) : (
          <>
            <SwiperSlide>
              <div className="slider-box">
                <figure className={`${data.isLoading && "load"}`}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC25ZqXZsbLBkQwQcbkVa0IjtfoIWyCMWvUg&usqp=CAU"
                    alt=""
                  />
                </figure>
                <div className="content ">
                  <div className="side">
                    <h4
                      className={`${data.isLoading ? "load comic" : "comic"}`}
                    >
                      Comic
                    </h4>
                    <h3 className={`${data.isLoading ? "load " : ""}`}>
                      Spider-Man: No Way Home to Doctor Strange in the
                      Multiverse of Madness, here's how to watch the multiverse
                      saga in ...
                    </h3>
                    <p className={`${data.isLoading ? "load " : ""}`}>
                      Spider-Man: No Way Home to Doctor Strange in the
                      Multiverse of Madness, here's how to watch the multiverse
                      saga in ...
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </>
        )}
      </Swiper>
    </section>
  );
}
export default HomeSlider;
