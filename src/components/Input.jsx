export function Input({ label, value, onChange }) {
  return (
    <div>
      <label htmlFor={label}>{label[0].toUpperCase() + label.slice(1)}</label>
      <input value={value} type='text' id={label} onChange={onChange} />
    </div>
  );
}
