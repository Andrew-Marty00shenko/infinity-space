import "./InputField.scss";

const InputField = ({ name, placeholder, label, type }) => {
  return (
    <div className="input-block">
      <label className="">{label}</label>
      <input type={type} placeholder={placeholder} className="input-field" />
    </div>
  );
};

export default InputField;
