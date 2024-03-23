type Props = {
  courseTitle: string;
}
export const Header = ({ courseTitle }: Props) => {
  return (
    <h1>{courseTitle}</h1>
  )
}
