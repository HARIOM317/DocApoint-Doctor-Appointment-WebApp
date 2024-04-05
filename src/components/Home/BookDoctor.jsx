import React, { useEffect } from "react";
import "../../stylesheets/homeStylesheets/BookDoctor.css";
import { NavLink } from "react-router-dom";
import { useGetDoctorsQuery } from "../../redux/api/doctorApi";
import { FaRegHeart } from "react-icons/fa";
import { useAddFavouriteMutation } from "../../redux/api/favouriteApi";
import { message } from "antd";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { sliderSettings } from "../../utils/common";
import profileImage from "../../images/home/doctorProfile.jpg";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";

<<<<<<< HEAD


=======
import Lottie from "lottie-react";
import Loading from "../../animations/loading.json";
import NoDataFound from "../../animations/no_data_found.json";
import SomethingWrong from "../../animations/something_wrong.json";
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BookDoctor = () => {
  const navigate = useNavigate();

  const { data, isError, isLoading } = useGetDoctorsQuery({ limit: 10 });
  const doctors = data?.doctors;
  const [
    addFavourite,
    { isSuccess, isLoading: FIsLoading, isError: fIsError, error },
  ] = useAddFavouriteMutation();

  const handleAddFavourite = (id) => {
    addFavourite({ doctorId: id });
  };

  useEffect(() => {
    if (!FIsLoading && fIsError) {
      message.error(error?.data?.message);
    }
    if (isSuccess) {
<<<<<<< HEAD
      message.success("Successfully Favourite Adde");
=======
      message.success("Successfully Favourite Added!");
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
    }
  }, [isSuccess, fIsError, FIsLoading, error?.data?.message]);

  let content = null;
<<<<<<< HEAD
  if (!isLoading && isError) content = <div>Something Went Wrong !</div>;
  if (!isLoading && !isError && doctors?.length === 0)
    content = <div>Empty</div>;
=======
  
  if (isLoading)
    content = (
      <div className=" m-0 p-0 d-flex flex-column align-items-center justify-content-center">
        <Lottie
          loop={true}
          animationData={Loading}
          style={{ width: "300px" }}
        />
      </div>
    );

  if (!isLoading && isError)
    content = (
      <div className=" m-0 p-0 d-flex flex-column align-items-center justify-content-center">
        <Lottie
          loop={true}
          animationData={SomethingWrong}
          style={{ width: "300px" }}
        />
        <div style={{color: 'var(--headingColor)', fontWeight: 'bold', fontSize: '1.3rem'}}>Something went wrong!</div>
      </div>
    );
  if (!isLoading && !isError && doctors?.length === 0)
    content = (
      <div className=" m-0 p-0 d-flex flex-column align-items-center justify-content-center">
        <Lottie
          loop={true}
          animationData={NoDataFound}
          style={{ width: "300px" }}
        />
      </div>
    );
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
  if (!isLoading && !isError && doctors?.length > 0)
    content = (
      <>
        {doctors &&
          doctors?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flexColCenter profile-card">
                <a
                  style={{
                    cursor: "pointer",
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                  }}
                  onClick={() => handleAddFavourite(item?.id)}
                >
                  <FaRegHeart />
                </a>

                <div className="image">
                  <img
                    className="profile-img"
                    alt=""
                    src={item.img == null ? profileImage : item.img}
                  />
                </div>

                <div className="text-data">
                  <span className="name">
                    {item?.firstName + " " + item?.lastName}
                  </span>
                  <span className="job">
                    {item?.designation} {item?.specialization}
                  </span>
                </div>

                <div className="actionBtn">
                  <NavLink to={`/doctors/profile/${item?.id}`}>
                    View Profile
                  </NavLink>
                  <NavLink to={`/booking/${item?.id}`}>Book Now</NavLink>
                </div>

                <div className="w-100 d-flex align-items-center justify-content-center">
                  <StarRatings
                    rating={5}
                    starRatedColor="#ffba22"
                    numberOfStars={5}
                    name="rating"
                    className="star"
                    starDimension="20px"
                    starSpacing="5px"
                  />
                  <span className="d-inline-block text-secondary mt-2">
                    (27)
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </>
    );
  return (
    <section className="our-doctors container">
      <div className="mb-5 section-title text-center">
        <h2>Book Doctor</h2>
        <p className="m-0">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>
<<<<<<< HEAD
      <div className="paddings innerWidth">
=======
      <div className="innerWidth">
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
        <Swiper
          {...sliderSettings}
          modules={[Pagination, Autoplay]}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
        >
          {/* <SliderButtons /> */}
          {content}
        </Swiper>
      </div>
    </section>
  );
};

export default BookDoctor;

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
