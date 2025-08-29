interface IInputFieldProps {
  value: string;
  label: string;
  type: string;
  onChange: (value: string) => void;
}
export const InputField: React.FC<IInputFieldProps> = ({ value, label, type, onChange }) => {
  return (
    <div className="inputfield-wrapper">
      <label className="input-label">{label}</label>
      <input
        className="inputfield"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
