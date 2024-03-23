import {Header} from "./components/Header";
import {Content} from "./components/Content";
import {Total} from "./components/Total";
import {Course } from "./types";

type Props = {
  course: Course;
}

export const CourseContainer = ({ course }: Props) => {
  return (
    <div>
      <Header courseTitle={course.name} />
      <Content courseParts={course.parts} />
      <Total courseParts={course.parts} />
    </div>
  )
}
