import React from "react";
import DashboardLayout from "../../Doctor/DashboardLayout/DashboardLayout";
import "../../../stylesheets/health/WorkoutPageStyle.css";

const ShoulderExercises = () => {
  const data = {
    type: "Shoulder",
    imageUrl: "https://gifer.com/en/WSyZ",
    durationInMin: 30,
    exercises: [
      {
        exercise: "Dumbbell Shoulder Press",
        videoUrl:
          "https://homeworkouts.org/wp-content/uploads/anim-dumbbell-shoulder-press.gif",
        sets: 3,
        reps: 10,
        rest: 60,
        description:
          "Benefits of dumbbell shoulder press: Targets deltoids for strength and size. Improves shoulder stability. Variations include seated, standing, and Arnold press for added challenge.",
      },
      {
        exercise: "Face Pull",
        videoUrl:
          "https://www.inspireusafoundation.org/wp-content/uploads/2022/03/cable-face-pull.gif",
        sets: 3,
        reps: 10,
        rest: 60,
        description:
          "Face pulls target rear deltoids and upper traps, improving shoulder stability and posture. Use a cable machine, pull towards face, emphasizing contraction for shoulder health and aesthetics.",
      },
      {
        exercise: "Standing Military Tress",
        videoUrl:
          "https://www.inspireusafoundation.org/wp-content/uploads/2022/04/push-press.gif",
        sets: 3,
        reps: 10,
        rest: 60,
        description:
          "Benefits of standing military press: Builds shoulder strength, stability, and muscle mass. Variations include dumbbell press, barbell press, and kettlebell press.",
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
export default ShoulderExercises;
