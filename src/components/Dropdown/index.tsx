interface Props {
  label?: string;
  onSelect: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
}

const Dropdown = ({ label, defaultValue, placeholder, onSelect }: Props) => {
  return (
    <div>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">{label}</legend>
        <select
          defaultValue={defaultValue}
          onChange={(e) => {
            onSelect?.(e.target.value);
          }}
          className="select"
        >
          {placeholder && <option disabled={true}>{placeholder}</option>}
          {["Male", "Female", "others"].map((gender) => {
            return <option>{gender}</option>;
          })}
        </select>
      </fieldset>
    </div>
  );
};

export default Dropdown;
