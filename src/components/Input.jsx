export function Input({ name, onChange, value }) {
  return (
    <div>
      <label htmlFor={name}>{name[0].toUpperCase() + name.slice(1)}</label>
      <input value={value} type='text' id={name} onChange={onChange} />
    </div>
  );
}
