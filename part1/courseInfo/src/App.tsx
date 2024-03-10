import {Header} from "./components/Header";
import {Content} from "./components/Content";
import {Course} from "./types";
import {Total} from "./components/Total";


const App = () => {
  const course: Course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', numOfExercises: 10 },
      { name: 'Using props to pass data', numOfExercises: 7 },
      { name: 'State of a component', numOfExercises: 14 },
    ]
  }

  return (
    <div>
      <Header courseTitle={course.name} />
      <Content courseParts={course.parts} />
      <Total courseParts={course.parts} />
    </div>
  )
}

export default App
