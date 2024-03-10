import {CoursePart} from "../../types";

type Props = {
  courseParts: CoursePart[];
}

export const Total = ({ courseParts }: Props) => {
  return (
    <p>Number of exercises {courseParts.reduce((acc, part) => acc + part.numOfExercises, 0)}</p>
  )
}
