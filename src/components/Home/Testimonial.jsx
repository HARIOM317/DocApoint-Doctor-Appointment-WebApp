import React from "react";
import "../../stylesheets/homeStylesheets/Testimonial.css";
import { useGetAllReviewsQuery } from "../../redux/api/reviewsApi";
import StarRatings from "react-star-ratings";
import { truncate } from "../../utils/truncate";
import { FaCheckDouble } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Lottie from "lottie-react";
import Loading from "../../animations/loading.json";
import NoDataFound from "../../animations/no_data_found.json";
import SomethingWrong from "../../animations/something_wrong.json";

const Testimonial = () => {
  const { data, isLoading, isError } = useGetAllReviewsQuery({});
  let content = null;
  if (!isLoading && !isError && data?.length > 0)
    content = (
      <>
        {data &&
          data.slice(0, 10)?.map((item, key) => (
            <SwiperSlide key={item.id + key}>
              <div
                className="p-3 my-5 mx-0"
                key={item?.id + key}
                style={{
                  background: "var(--bgLight)",
                  border: "1.5px solid var(--borderColor)",
                  boxShadow: "var(--materialShadow)",
                  borderRadius: "16px",
                  height: "300px",
                }}
              >
                <div className="d-flex flex-column gap-2 align-items-start justify-content-between h-100">
                  <div className="review-img">
                    {item.patient.img && (
                      <img src={item.patient.img} alt="" className="shadow" />
                    )}
                    <div style={{ marginTop: "0.5rem", textWrap: "nowrap" }}>
                      <h5 className="text-secondary">
                        {item?.patient?.firstName +
                          " " +
                          item?.patient?.lastName}
                      </h5>
                    </div>
                  </div>

                  <div style={{ marginTop: "1rem" }}>
                    <p
                      className="text-start text-secondary"
                      style={{
                        minHeight: "72px",
                        overflow: "hidden",
                        marginTop: "1rem",
                      }}
                    >
                      {" "}
                      {truncate(item?.description, 100)}
                    </p>
                    <p className="recomended">
                      <FaCheckDouble /> Recommended
                    </p>
                    <StarRatings
                      rating={parseInt(item?.star)}
                      starRatedColor="#f4c150"
                      numberOfStars={5}
                      name="rating"
                      className="star"
                      starDimension="20px"
                      starSpacing="5px"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </>
    );
  return (
    <div className="container" style={{ marginTop: "0.5rem" }}>
      <div className="mb-4 section-title text-center">
        <h2>TESTIMONIAL</h2>
        <p style={{ color: "var(--textLight)" }}>What Our Patients Says.</p>
      </div>
      {isLoading ? (
        <div className=" m-0 p-0 d-flex flex-column align-items-center justify-content-center">
          <Lottie
            loop={true}
            animationData={Loading}
            style={{ width: "300px" }}
          />
        </div>
      ) : !isLoading && isError ? (
        <div className="m-0 p-0 d-flex flex-column align-items-center justify-content-center">
          <Lottie
            loop={true}
            animationData={SomethingWrong}
            style={{ width: "300px" }}
          />
          <div
            style={{
              color: "var(--headingColor)",
              fontWeight: "bold",
              fontSize: "1.3rem",
            }}
          >
            Something went wrong!
          </div>
        </div>
      ) : !isLoading && !isError && data?.length === 0 ? (
        <div className=" m-0 p-0 d-flex align-items-center justify-content-center">
          <Lottie
            loop={true}
            animationData={NoDataFound}
            style={{ width: "300px" }}
          />
        </div>
      ) : (
        <div>
          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            modules={[Autoplay]}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              280: {
                slidesPerView: 1,
                centeredSlides: true,
              },
              992: {
                slidesPerView: 2,
                centeredSlides: false,
              },
            }}
          >
            {content}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Testimonial;
