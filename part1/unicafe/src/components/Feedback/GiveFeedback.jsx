import {Button} from "../common/Button.jsx";

export const GiveFeedback = ({ options, onSubmit }) => (
  <div>
    <h2>Give feedback</h2>
    {options?.map((option) => (
      <Button
        key={option}
        onClick={() => onSubmit(option)}
        className='feedback-option'
      >
        {option}
      </Button>
    ))}
  </div>
)

