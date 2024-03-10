export type CoursePart = {
  name: string;
  numOfExercises: number;
}

export type Course = {
  name: string;
  parts: CoursePart[]
}
