import React from "react";
import DashboardLayout from "../../Doctor/DashboardLayout/DashboardLayout";
import "../../../stylesheets/health/WorkoutPageStyle.css";

const BicepExercises = () => {
 const data = {
   type: "Biceps",
   imageUrl: "https://gifer.com/en/WSyZ",
   durationInMin: 30,
   exercises: [
     {
       exercise: "Barbell curls",
       videoUrl:
         "https://www.inspireusafoundation.org/wp-content/uploads/2023/03/wide-grip-barbell-curls.gif",
       sets: 3,
       reps: 10,
       rest: 60,
       description:
         "Benefits of barbell curls for biceps include increased muscle mass and strength. Variations like preacher curls and reverse curls target different parts for balanced development.",
     },
     {
       exercise: "Dumbbell curls",
       videoUrl:
         "https://www.inspireusafoundation.org/wp-content/uploads/2022/03/dumbbell-bicep-curl.gif",
       sets: 3,
       reps: 10,
       rest: 60,
       description:
         "Dumbbell curls target biceps, promoting muscle growth and strength. Variations like hammer curls and concentration curls offer diverse angles for effective bicep development.",
     },
     {
       exercise: "Standing biceps cable curl",
       videoUrl:
         "https://newlife.com.cy/wp-content/uploads/2019/11/08681301-Cable-Curl-m_Upper-Arms_360.gif",
       sets: 3,
       reps: 10,
       rest: 60,
       description:
         "Standing biceps cable curl provides constant tension, targeting biceps for size and strength. Variations include single-arm curls for balance and unilateral development.",
     },
   ],
 };

  return (
    <>
      <DashboardLayout>
        <div className="workout">
          <h1 className="exercise-heading"> {data.type} </h1>
          <div className="workout__exercises">
            {data.exercises.map((item, index) => {
              return (
                <div
                  className={
                    index % 2 === 0
                      ? "workout__exercise"
                      : "workout__exercise workout__exercise--reverse"
                  }
                >
                  <h3>{index + 1}</h3>
                  <div className="workout__exercise__image">
                    <img src={item.videoUrl} alt="" />
                  </div>
                  <div className="workout__exercise__content">
                    <h2>{item.exercise}</h2>
                    <span>
                      {item.sets} sets X {item.reps} reps
                    </span>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};
export default BicepExercises;
