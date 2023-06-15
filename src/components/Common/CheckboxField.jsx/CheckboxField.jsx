import "./CheckboxField.scss";

const CheckboxField = ({ label }) => {
  return (
    <div className="checkbox-block">
      <input id={label} type="checkbox" className="checkbox-field" />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default CheckboxField;
