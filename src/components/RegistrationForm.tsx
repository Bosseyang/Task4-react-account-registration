import { useState } from "react";
import { InputField } from "./InputField";

export const RegistrationForm: React.FC = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isPasswordValid = password.length >= 0;
  const passwordsMatch = password === confirmPassword;
  const canSubmit = isPasswordValid && passwordsMatch;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!canSubmit) return;
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form-h2">Create an Account</h2>
      <InputField label="Name" type="text" value={name} onChange={setName} />

      <button type="submit">Submit</button>
          <PasswordValidation isPasswordValid={isPasswordValid} passwordsMatch={passwordsMatch} />
    </form>
  );
};
