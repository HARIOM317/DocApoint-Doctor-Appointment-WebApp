import React from "react";
import DashboardLayout from "../../Doctor/DashboardLayout/DashboardLayout";
import "../../../stylesheets/health/WorkoutPageStyle.css";

const AbsExercises = () => {
  const data = {
    type: "Abs",
    imageUrl: "https://gifer.com/en/WSyZ",
    durationInMin: 30,
    exercises: [
      {
        exercise: "Planks",
        videoUrl:
          "https://www.inspireusafoundation.org/wp-content/uploads/2022/11/body-saw-plank.gif",
        sets: 3,
        reps: 10,
        rest: 60,
        description:
          "Planks strengthen core muscles, improving stability and posture. Variations like side planks and plank twists target obliques, enhancing overall abdominal strength.",
      },
      {
        exercise: "Leg raises",
        videoUrl:
          "https://homeworkouts.org/wp-content/uploads/anim-leg-raise.gif",
        sets: 3,
        reps: 10,
        rest: 60,
        description:
          "Leg raises target lower abdominal muscles, enhancing core strength. Variations like hanging leg raises or flutter kicks intensify the workout, promoting abdominal definition.",
      },
      {
        exercise: "Crunches",
        videoUrl:
          "https://www.inspireusafoundation.org/wp-content/uploads/2022/12/knee-touch-crunch.gif",
        sets: 3,
        reps: 10,
        rest: 60,
        description:
          "Crunches target abdominal muscles, promoting core strength and definition. Variations like bicycle crunches engage obliques, enhancing overall abdominal development.",
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
export default AbsExercises;
