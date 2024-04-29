import React from "react";
import DashboardLayout from "../Doctor/DashboardLayout/DashboardLayout";
import "../../stylesheets/health/Exercises.css";
import { NavLink } from "react-router-dom";

import absExercise from "../../images/Exercises/abs.jpg";
import backExercise from "../../images/Exercises/back.jpg";
import bicepsExercise from "../../images/Exercises/biceps.jpg";
import cardioExercise from "../../images/Exercises/cardio.jpg";
import chestExercise from "../../images/Exercises/chest.jpg";
import forearmsExercise from "../../images/Exercises/forearms.jpg";
import legsExercise from "../../images/Exercises/legs.jpg";
import shoulderExercise from "../../images/Exercises/shoulder.jpg";
import tricepsExercise from "../../images/Exercises/triceps.jpg";

const Exercises = () => {
  let workoutData = [
    {
      type: "Chest Exercise",
      image: chestExercise,
      benefits:
        "Strengthens chest muscles, improves posture, and enhances upper body strength.",
      path: "/health/exercise/chest",
    },
    {
      type: "Abs Exercise",
      image: absExercise,
      benefits:
        "Strengthens core muscles, improves posture, and enhances overall stability.",
      path: "/health/exercise/abs",
    },
    {
      type: "Shoulder Exercise",
      image: shoulderExercise,
      benefits:
        "Strengthens shoulder muscles, improves posture, and enhances upper body strength.",
      path: "/health/exercise/shoulder",
    },
    {
      type: "Back Exercise",
      image: backExercise,
      benefits:
        "Strengthens back muscles, improves posture, and reduces risk of injury.",
      path: "/health/exercise/back",
    },
    {
      type: "Biceps Exercise",
      image: bicepsExercise,
      benefits:
        "Strengthens biceps muscles, improves arm strength, and enhances overall aesthetics.",
      path: "/health/exercise/biceps",
    },
    {
      type: "Triceps Exercise",
      image: tricepsExercise,
      benefits:
        "Strengthens triceps muscles, improves arm strength, and enhances overall arm definition.",
      path: "/health/exercise/triceps",
    },

    {
      type: "Legs Exercise",
      image: legsExercise,
      benefits:
        "Strengthens leg muscles, improves balance, and enhances overall lower-body strength.",
      path: "/health/exercise/legs",
    },

    {
      type: "Cardio Exercise",
      image: cardioExercise,
      benefits:
        "Improves cardiovascular health, burns calories, boosts mood, and increases endurance.",
      path: "/health/exercise/cardio",
    },

    {
      type: "Forearms Exercise",
      image: forearmsExercise,
      benefits:
        "Strengthens forearm muscles, improves grip strength, and enhances arm aesthetics.",
      path: "/health/exercise/forearms",
    },
  ];

  return (
    <>
      <DashboardLayout>
        <div className="row exercises">
          {workoutData.map((item, index) => {
            return (
              <>
                <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mb-3">
                  <div className="info-card">
                    <span className="exercise-img">
                      <img src={item.image} alt="" />
                    </span>

                    <div className="content" style={{ marginTop: "20px" }}>
                      <div className="name">
                        <span className="exercise-name">{item.type}</span>
                      </div>

                      <p className="exercise-benefits">{item.benefits}</p>

                      <div className="btn">
                        <NavLink to={item.path} className="show-btn">
                          View{" "}
                          <span style={{ fontSize: "8px" }}>
                            <i class="fa-solid fa-angles-right"></i>
                          </span>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </DashboardLayout>
    </>
  );
};
export default Exercises;
