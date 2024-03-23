
import {Course as CourseType} from "./modules/Course/types";
import {CourseContainer as Course} from "./modules/Course";


const App = () => {

  const courses: CourseType[] = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          numOfExercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          numOfExercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          numOfExercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          numOfExercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          numOfExercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          numOfExercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <h1>Web development curriculum</h1>
      {courses?.map(course => (
        <Course key={course.name} course={course} />
      ))}
    </>
  )
}

export default App
