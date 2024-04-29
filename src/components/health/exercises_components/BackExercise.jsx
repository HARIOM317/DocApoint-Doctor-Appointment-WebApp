import React from "react";
import DashboardLayout from "../../Doctor/DashboardLayout/DashboardLayout";
import "../../../stylesheets/health/WorkoutPageStyle.css";

const BackExercises = () => {

   const data = {
     type: "Back",
     imageUrl: "https://gifer.com/en/WSyZ",
     durationInMin: 30,
     exercises: [
       {
         exercise: "Band Bent Over Row",
         videoUrl:
           "https://www.inspireusafoundation.org/wp-content/uploads/2023/11/close-grip-band-row.gif",
         sets: 3,
         reps: 10,
         rest: 60,
         description:
           "Benefits of bent over rows: Targets upper back muscles, improves posture, and enhances strength. Variations include underhand grip, T-bar rows, and single-arm rows.",
       },
       {
         exercise: "Pull Up",
         videoUrl:
           "https://www.inspireusafoundation.org/wp-content/uploads/2022/10/pull-up.gif",
         sets: 3,
         reps: 10,
         rest: 60,
         description:
           "Pull-ups strengthen upper back, lats, and biceps. Variations like wide grip target different muscles. Builds functional strength and improves posture.",
       },
       {
         exercise: "Arm rows",
         videoUrl:
           "https://i.pinimg.com/originals/c8/92/49/c89249371e09ecbdf2992250e973dfe5.gif",
         sets: 3,
         reps: 10,
         rest: 60,
         description:
           "Benefits of arm rows for the back: Targets upper back muscles, improves posture, enhances grip strength. Variations include single-arm rows, T-bar rows, and cable rows.",
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
export default BackExercises;
