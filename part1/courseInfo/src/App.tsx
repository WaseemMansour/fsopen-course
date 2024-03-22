import {Header} from "./components/Header";
import {Content} from "./components/Content";
import {Course} from "./types";
import {Total} from "./components/Total";
import {useState} from "react";


const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  
  const setToZero = () => setCounter(0)

  console.log('rendering...', counter)
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
      <div>{counter}</div>
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}>
        zero
      </button>
      <Header courseTitle={course.name} />
      <Content courseParts={course.parts} />
      <Total courseParts={course.parts} />
    </div>
  )
}

export default App
