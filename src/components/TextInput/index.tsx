interface InputProps {
  lable?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "input" | "textarea";
}
const TextInput = ({
  value,
  lable,
  type = "input",
  onChange,
  placeholder,
}: InputProps) => {
  const isInput = type === "input";
  return (
    <div>
      <fieldset className="fieldset">
        {lable && <legend className="fieldset-legend">{lable}</legend>}
        {isInput ? (
          <input
            type="text"
            value={value}
            className="input"
            placeholder={placeholder}
            onChange={(e) => onChange?.(e.target.value)}
          />
        ) : (
          <textarea
            className="textarea h-24"
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder={placeholder}
          ></textarea>
        )}
      </fieldset>
    </div>
  );
};

export default TextInput;
