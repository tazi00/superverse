import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import dots1 from "../img/dots1.png";
import dots2 from "../img/dots2.png";
import "swiper/css";
import "swiper/css/navigation";

export function HomeSlider() {
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
        <SwiperSlide>
          <div className="slider-box">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrj3DbbZKgXN52rLppxI4iG5Bo1JkFZbu7nQ&usqp=CAU"
              alt=""
            />
            <div className="content">
              <div className="side">
                <h4 className="comic">Comics</h4>
                <h3>
                  Wonder Woman: Tom King Teases a Defiant, New Mission for Diana
                  Prince
                </h3>
                <p>
                  In an interview with CBR, Wonder Woman writer Tom King reveals
                  details about the Amazon superhero's rebellious place in the
                  DC Universe.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-box">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC25ZqXZsbLBkQwQcbkVa0IjtfoIWyCMWvUg&usqp=CAU"
              alt=""
            />
            <div className="content">
              <div className="side">
                <h4 className="comic">Comics</h4>
                <h3>
                  Wonder Woman: Tom King Teases a Defiant, New Mission for Diana
                  Prince
                </h3>
                <p>
                  In an interview with CBR, Wonder Woman writer Tom King reveals
                  details about the Amazon superhero's rebellious place in the
                  DC Universe.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
export default HomeSlider;
