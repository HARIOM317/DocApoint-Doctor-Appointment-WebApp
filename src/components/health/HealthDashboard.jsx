import React from "react";
import DashboardLayout from "../Doctor/DashboardLayout/DashboardLayout";
import "../../stylesheets/health/HealthDashboard.css";
import { sliderSettings } from "../../utils/common";

import { Flex, Progress, Button } from "antd";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


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

const HealthDashboard = () => {
  const conicColors = {
    "0%": "#ec7e8f",
    "100%": "#ec1839",
  };

  let data = [
    {
      name: "Calories Intake",
      value: 2000,
      unit: "kcal",
      goal: 2500,
      goalUnit: "kcal",
      lastUpdate: "17 Feb 24 05:30 PM",
    },
    {
      name: "Sleep",
      value: 8,
      unit: "hrs",
      goal: 8,
      goalUnit: "hrs",
      lastUpdate: "17 Feb 24 05:32 PM",
    },
    {
      name: "Steps",
      value: 50,
      unit: "steps",
      goal: 10000,
      goalUnit: "steps",
      lastUpdate: "17 Feb 24 04:42 PM",
    },
    {
      name: "Water",
      value: 2000,
      unit: "ml",
      goal: 3000,
      goalUnit: "ml",
      lastUpdate: "17 Feb 24 06:30 PM",
    },
    {
      name: "Weight",
      value: 75,
      unit: "kg",
      goal: 70,
      goalUnit: "kg",
      lastUpdate: "17 Feb 24 05:58 PM",
    },
    {
      name: "Workout",
      value: 2,
      unit: "days",
      goal: 6,
      goalUnit: "days",
      lastUpdate: "17 Feb 24 04:22 PM",
    },
  ];

  return (
    <>
      <DashboardLayout>
        <section className="container">
          <div className="paddings innerWidth theme-container meters">
            <div className="theme-head flexColStart">
              <span className="primaryText">Dashboard</span>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
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
              className="mySwiper"
            >
              {/* Buttons for slider */}

              <SliderButtons />

              {
                <div className="">
                  {data?.length > 0 &&
                    data.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <div className="card" key={index}>
                            {/* Add Icon */}
                            <div className="icon-right">
                              <i
                                className="fa-solid fa-plus"
                                onClick={() => {}}
                              ></i>
                            </div>

                            <div className="card-header">
                              <div className="card-header-box">
                                <div className="card-header-box-name">
                                  {item.name}
                                </div>
                                <div className="card-header-box-value">
                                  {item.value} {item.unit}
                                </div>
                              </div>
                              <div className="card-header-box">
                                <div className="card-header-box-name">
                                  Target
                                </div>
                                <div className="card-header-box-value">
                                  {item.goal} {item.goalUnit}
                                </div>
                              </div>
                            </div>

                            <Flex gap="small" wrap="wrap">
                              <Progress
                                type="circle"
                                percent={(
                                  (item.value / item.goal) *
                                  100
                                ).toFixed(1)}
                                size={90}
                                strokeColor={conicColors}
                              />
                            </Flex>

                            <Button
                              type="primary"
                              onClick={() => {
                                window.location.href = `/report/${item.name}`;
                              }}
                            >
                              Show Report
                            </Button>

                            <div className="last-update-time">
                              <span>Last Updated - {item.lastUpdate}</span>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                </div>
              }
            </Swiper>

            {/* {showCalorieIntakePopup && (
              <CalorieIntakePopup
                setShowCalorieIntakePopup={setShowCalorieIntakePopup}
              />
            )} */}
          </div>
        </section>
      </DashboardLayout>
    </>
  );
};

export default HealthDashboard;
