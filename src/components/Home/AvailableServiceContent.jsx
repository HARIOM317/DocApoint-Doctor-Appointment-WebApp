import img1 from '../../images/services/icu.jpg';
import img2 from '../../images/services/patient_ward.jpg';
import img3 from '../../images/services/test_room.jpg';
import img4 from '../../images/services/laboratory.jpg';
import img5 from '../../images/services/chamber.jpg';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const AvailableServiceContent = () => {
  const availabeServiceArray = [
    { title: "ICU", img: img1 },
    { title: "Chamber", img: img5 },
    { title: "Patient Ward", img: img2 },
    { title: "Test Room", img: img3 },
    { title: "Laboratory", img: img4 },
  ];
  return (
    <div className="d-flex justify-content-center align-items-center gap-4">
      <Swiper
        spaceBetween={2}
        slidesPerView={3}
        modules={[Navigation, Autoplay]}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        {availabeServiceArray.map((item) => (
          <SwiperSlide key={item.title} className="my-2">
            <div className="feature-item text-center">
              <img src={item.img} className="img-fluid" alt="" />
              <p>{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AvailableServiceContent;