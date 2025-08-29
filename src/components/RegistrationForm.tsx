import { useState } from "react";
import { InputField } from "./InputField";
import { SubmitButton } from "./SubmitButton";
import { PasswordValidation } from "./PasswordValidation";

export const RegistrationForm: React.FC = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isPasswordValid: boolean = password.length >= 8;
  const passwordsMatch: boolean = (password === confirmPassword);
  const canSubmit: boolean = isPasswordValid && passwordsMatch;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!canSubmit) return;

    const registrationData = {
      name,
      username,
      email,
      password,
    };

    console.log("Registration Data:", registrationData);
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2 className="form-h2">Create an Account</h2>
      <div className="input-wrapper">
        <div className="user-wrapper">
          <InputField label="Name" type="text" value={name} onChange={setName} />
          <InputField label="Username" type="text" value={username} onChange={setUsername} />
          <InputField label="Email" type="email" value={email} onChange={setEmail} />
        </div>
        <div className="password-wrapper">
          <InputField label="Password" type="password" value={password} onChange={setPassword} />
          <InputField
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={setConfirmPassword}
          />

          <PasswordValidation isPasswordValid={isPasswordValid} passwordsMatch={passwordsMatch} />
        </div>
      </div>
      <SubmitButton disabled={!canSubmit} />
    </form>
  );
};
