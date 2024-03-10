import {Header} from "./components/Header";
import {Content} from "./components/Content";
import {CoursePart} from "../types";
import {Total} from "./components/Total";


const App = () => {
  const courseTitle = 'Half Stack application development'
  const courseParts: CoursePart[] =  [
    { name: 'Fundamentals of React', numOfExercises: 10 },
    { name: 'Using props to pass data', numOfExercises: 7 },
    { name: 'State of a component', numOfExercises: 14 },
  ]

  return (
    <div>
      <Header courseTitle={courseTitle} />
      <Content courseParts={courseParts} />
      <Total courseParts={courseParts} />
    </div>
  )
}

export default App
