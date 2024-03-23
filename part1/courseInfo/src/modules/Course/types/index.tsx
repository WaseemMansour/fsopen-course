export type CoursePart = {
  name: string;
  numOfExercises: number;
  id: number;
}

export type Course = {
  id: number;
  name: string;
  parts: CoursePart[]
}
