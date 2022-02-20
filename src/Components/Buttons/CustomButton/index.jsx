import { Button } from './style';

export default function CustomButton({
  text,
  type = 'submit',
  Click,
  disabled = false,
  payment,
}) {
  return (
    <Button type={type} onClick={Click} disabled={disabled}>
      {!payment ? text : 'Success!'}
    </Button>
  );
}
