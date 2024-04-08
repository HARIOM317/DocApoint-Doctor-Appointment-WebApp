import React from "react";
import "../../stylesheets/homeStylesheets/Gallery.css";
import { Image } from "antd";
import { sliderSettings } from "../../utils/common";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

// Gallery images
import image1 from "../../images/gallery/1.jpg";
import image2 from "../../images/gallery/2.jpg";
import image3 from "../../images/gallery/3.jpg";
import image4 from "../../images/gallery/4.jpg";
import image5 from "../../images/gallery/5.jpg";
import image6 from "../../images/gallery/6.jpg";
import image7 from "../../images/gallery/7.jpg";
import image8 from "../../images/gallery/8.jpg";
import image9 from "../../images/gallery/9.jpg";
import image10 from "../../images/gallery/10.jpg";

const Gallery = () => {
  const imageArray = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];
  return (
    <section className="gallery container">
      <div className="text-center mb-5">
        <div className="section-title mb-3">
          <h2>Gallery</h2>
          <p style={{ color: "var(--textLight)" }}>
            These are the photos of our professional environment{" "}
          </p>
        </div>
      </div>

      <div className="paddings innerWidth">
        <Swiper {...sliderSettings}>
          {/* Buttons for slider */}
          <SliderButtons />

          {imageArray.map((element, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flexColCenter gallery-item">
                  <Image
                    src={element}
                    alt=""
                    className="w-100 gallery-slider"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;

const SliderButtons = () => {
  // useSwiper Hook
  const swiper = useSwiper();

  return (
    <div className="slider-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
