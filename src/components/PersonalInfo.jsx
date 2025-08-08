import { Input } from "./Input";

export function PersonalInfo({ updateValue, info, setInfo }) {
  return (
    <>
      <Input
        value={info.name}
        name='name'
        onChange={(e) => updateValue(e.target.value, "name", setInfo, info)}
      ></Input>
      <Input
        value={info.address}
        name='address'
        onChange={(e) => updateValue(e.target.value, "address", setInfo, info)}
      ></Input>
      <Input
        value={info.email}
        name='email'
        onChange={(e) => updateValue(e.target.value, "email", setInfo, info)}
      ></Input>
      <Input
        value={info.number}
        name='number'
        onChange={(e) => updateValue(e.target.value, "number", setInfo, info)}
      ></Input>
    </>
  );
}
