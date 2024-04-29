import React from "react";
import DashboardLayout from "../../Doctor/DashboardLayout/DashboardLayout";
import "../../../stylesheets/health/WorkoutPageStyle.css";

const ChestExercises = () => {
  const data = {
    type: "Chest",
    imageUrl: "https://gifer.com/en/WSyZ",
    durationInMin: 30,
    exercises: [
      {
        exercise: "Bench Press",
        videoUrl:
          "https://www.inspireusafoundation.org/wp-content/uploads/2022/08/dumbbell-chest-fly-muscles.gif",
        sets: 3,
        reps: 10,
        rest: 60,
        description:
          "Targets multiple muscles simultaneously, including the pectoralis major (chest), anterior deltoids (shoulders), and triceps. This compound nature makes it an efficient exercise for overall upper body strength and muscle growth.",
      },
      {
        exercise: "Push Up",
        videoUrl:
          "https://www.inspireusafoundation.org/wp-content/uploads/2023/04/incline-push-up-bench.gif",
        sets: 3,
        reps: 10,
        rest: 60,
        description:
          "Push-ups target chest muscles, enhancing strength and definition. Variations like wide grip and decline engage different chest areas for comprehensive development",
      },
      {
        exercise: "Chest Stretch",
        videoUrl:
          "https://i.pinimg.com/originals/f9/69/17/f96917eca63c436bcd85f7798a38aaac.gif",
        sets: 3,
        reps: 10,
        rest: 60,
        description:
          "Regularly performing Chest Stretches can help to increase flexibility and mobility in the upper body. As well, Chest Stretches can help to alleviate pain or tightness associated with poor posture. Chest Stretches are also a great way to help the body recover from an injury such as a muscle strain in the chest.",
      },
    ],
  };

  return (
    <>
      <DashboardLayout>
        <div className="workout" >
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
export default ChestExercises;
