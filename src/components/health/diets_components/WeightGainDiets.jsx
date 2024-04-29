import React from "react";
import DashboardLayout from "../../Doctor/DashboardLayout/DashboardLayout";
import "../../../stylesheets/health/DietView.css";
import dietAPI from "../../../apis/dietAPI";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Select } from "antd";
import Search from "antd/es/input/Search";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WeightGainDiets = () => {
  const handleChange = (value) => {};

  const onSearch = (value) => {};

  return (
    <>
      <DashboardLayout>
        <>
          <div className="search-bar-header">
            <Select
              defaultValue="All"
              className="search-dropdown"
              onChange={handleChange}
              options={[
                {
                  label: <span>Diet Type</span>,
                  title: "Diet Type",
                  options: [
                    {
                      label: <span>Vegetarian</span>,
                      value: "vegetarian",
                    },
                    {
                      label: <span>Non-Vegetarian</span>,
                      value: "non-vegetarian",
                    },
                  ],
                },
                {
                  label: <span>Suggestions</span>,
                  title: "Suggestions",
                  options: [
                    {
                      label: <span>Avoid Diet</span>,
                      value: "avoid-diet",
                    },
                    {
                      label: <span>Recommended Exercises</span>,
                      value: "recommended-exercises",
                    },
                  ],
                },
              ]}
            />

            <Search
              placeholder="Search"
              onSearch={onSearch}
              enterButton
              allowClear
              className="search-bar"
            />
          </div>

          {/* Recommended Diets */}
          <section className="diet-view">
            <h1 className="diet-heading">Weight Gain</h1>
            <div className="healthy-diets">
              {dietAPI[1].flexitariansDiet.map((item, index) => {
                return (
                  <div
                    className={
                      index % 2 === 0
                        ? "healthy-diet"
                        : "healthy-diet healthy-diet-reverse"
                    }
                  >
                    <div className="healthy-diet-image">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="healthy-diet-content">
                      <h2>{item.dietName}</h2>
                      <span className="diet-time">{item.dietTime}</span>
                      <span className="quantity">{item.quantity}</span>
                      <p className="nutrition">
                        <span>Available Nutrition:</span>{" "}
                        {item.availableNutrition}
                      </p>
                      <p className="benefits">
                        <span>Benefits:</span> {item.benefits}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <hr
              style={{
                height: "1.5px",
                color: "var(--textColor)",
                opacity: "0.35",
              }}
            />
          </section>

          {/* Avoiding Diets */}
          <section className="avoiding-diets">
            <h1 className="diet-heading">Avoid These Foods</h1>
            <div className="row">
              {dietAPI[1].avoidingDiet.map((item, index) => {
                return (
                  <>
                    <div
                      className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mb-3"
                      key={index}
                    >
                      <div className="info-card">
                        <span className="diet-img">
                          <img src={item.img} alt="" />
                        </span>

                        <div className="content" style={{ marginTop: "20px" }}>
                          <div className="name">
                            <span className="diet-name">{item.dietName}</span>
                          </div>

                          <p className="diet-benefits">{item.disadvantage}</p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </section>

          {/* Recommended exercises */}
          <section className="recommended-exercises">
            <h1 className="exercise-heading">Recommended Exercises</h1>
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                576: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1100: {
                  slidesPerView: 3,
                },
              }}
              modules={[Pagination, Autoplay]}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
            >
              {dietAPI[1].recommendedExercises &&
                dietAPI[1].recommendedExercises.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="mb-3" key={index}>
                        <div className="info-card">
                          <span className="exercise-img">
                            <img src={item.img} alt="" />
                          </span>

                          <div
                            className="content"
                            style={{ marginTop: "20px" }}
                          >
                            <div className="name">
                              <span className="exercise-name">
                                {item.exerciseName}
                              </span>
                            </div>

                            <div className="exercise-timing">
                              <span className="exercise-time">{item.time}</span>
                              <span className="exercise-time">
                                {item.repetition}
                              </span>
                            </div>

                            <p className="exercise-benefits">{item.benefits}</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </section>
        </>
      </DashboardLayout>
    </>
  );
};
export default WeightGainDiets;
