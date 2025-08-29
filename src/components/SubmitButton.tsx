interface ISubmitButtonProps {
  disabled: boolean;
}
export const SubmitButton: React.FC<ISubmitButtonProps> = ({ disabled }) => {
  return (
    <button className="button submit-button" type="submit" disabled={disabled}>
      Register
    </button>
  );
};
