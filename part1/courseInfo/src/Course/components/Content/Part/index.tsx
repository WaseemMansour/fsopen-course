import {CoursePart} from "../../../../types";

export const Part = ({ name, numOfExercises }: CoursePart) => {
  return (
    <p>
      {name} {numOfExercises}
    </p>
  )
}
