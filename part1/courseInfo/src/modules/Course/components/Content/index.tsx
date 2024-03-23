import {CoursePart} from "../../types";
import {Part} from "./Part";

type Props = {
  courseParts: CoursePart[];
}
export const Content = ({ courseParts }: Props) => {
  if(!courseParts.length) return null
  
  return (
    <div>
      {courseParts.map(({ name, numOfExercises }) => (
        <Part key={name} name={name} numOfExercises={numOfExercises} />
      ))}
    </div>
  )
}
