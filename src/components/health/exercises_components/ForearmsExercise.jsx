import React from "react";
import DashboardLayout from "../../Doctor/DashboardLayout/DashboardLayout";
import "../../../stylesheets/health/WorkoutPageStyle.css";

const ForearmsExercises = () => {
  const data = {
    type: "Forearms",
    imageUrl: "https://gifer.com/en/WSyZ",
    durationInMin: 30,
    exercises: [
      {
        exercise: "Wrist Curl",
        videoUrl:
          "https://www.inspireusafoundation.org/wp-content/uploads/2023/07/dumbbell-wrist-curl.gif",
        sets: 3,
        reps: 10,
        rest: 60,
        description:
          "Wrist curls are performed by gripping a weight with palms facing up, lifting and lowering to target flexor muscles. Reverse curls involve palms facing down for extensor muscles.",
      },
      {
        exercise: "Farmer Walks",
        videoUrl:
          "https://burnfit.io/wp-content/uploads/2023/11/FARMER_WALK.gif",
        sets: 3,
        reps: 10,
        rest: 60,
        description:
          "Farmer walks strengthen grip, wrist, and forearm muscles. Benefits include improved endurance, grip strength, and overall forearm development.",
      },
      {
        exercise: "Chin Up",
        videoUrl:
          "https://www.inspireusafoundation.org/wp-content/uploads/2023/04/band-assisted-chin-up.gif",
        sets: 3,
        reps: 10,
        rest: 60,
        description:
          "Chin-ups engage forearm muscles, improving grip strength and overall forearm development. Variations like hammer grip or towel hangs intensify forearm activation.",
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
export default ForearmsExercises;
