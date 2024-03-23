type Props = {
  courseTitle: string;
}
export const Header = ({ courseTitle }: Props) => {
  return (
    <h3>{courseTitle}</h3>
  )
}
