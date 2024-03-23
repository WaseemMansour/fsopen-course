import {CoursePart} from "../../../types";

export const Part = ({ name, numOfExercises }: Omit<CoursePart, 'id'>) => {
  return (
    <p>
      {name} {numOfExercises}
    </p>
  )
}
