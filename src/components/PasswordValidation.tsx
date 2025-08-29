interface IPasswordValidationProps {
  isPasswordValid: boolean;
  passwordsMatch: boolean;
}
export const PasswordValidation: React.FC<IPasswordValidationProps> = ({
  isPasswordValid,
  passwordsMatch,
}) => {
  return (
    <div className="validation-feedback">
      <p className={isPasswordValid ? "valid" : "not-valid"}>
        <span className="material-symbols-outlined">warning</span>
        {isPasswordValid
          ? "Password is valid"
          : "Password not valid, must be at least 8 characters"}
      </p>

      <p className={passwordsMatch ? "valid" : "not-valid"}>
        <span className="material-symbols-outlined">warning</span>
        {passwordsMatch ? "Passwords match" : "Passwords do not match"}
      </p>
    </div>
  );
};
