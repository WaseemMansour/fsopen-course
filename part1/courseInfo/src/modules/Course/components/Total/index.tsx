import {CoursePart} from "../../types";

type Props = {
  courseParts: CoursePart[];
}

export const Total = ({ courseParts }: Props) => {
  return (
    <h5>Total of {courseParts.reduce((acc, part) => acc + part.numOfExercises, 0)} exercises</h5>
  )
}
