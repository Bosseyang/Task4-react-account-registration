import { useState } from "react";
import { InputField } from "./InputField";

export const RegistrationForm: React.FC = () => {
  const [name, setName] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form-h2">Create an Account</h2>
      <InputField label="Name" type="text" value={name} onChange={setName} />
    </form>
  );
};
