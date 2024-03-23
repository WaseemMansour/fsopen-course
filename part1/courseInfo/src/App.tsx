import {Header} from "./Course/components/Header";
import {Content} from "./Course/components/Content";
import {Course} from "./types";
import {Total} from "./Course/components/Total";
import {useState} from "react";


const App = () => {

  const course: Course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', numOfExercises: 10, id: 1 },
      { name: 'Using props to pass data', numOfExercises: 7, id: 2 },
      { name: 'State of a component', numOfExercises: 14, id: 3 }
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
