import { Input } from "./Input";

export function Education({ updateValue, info, setInfo }) {
  return (
    <>
      <Input
        value={info.school}
        name='school'
        onChange={(e) => updateValue(e.target.value, "school", setInfo, info)}
      ></Input>
      <Input
        value={info.degree}
        name='degree'
        onChange={(e) => updateValue(e.target.value, "degree", setInfo, info)}
      ></Input>
      <Input
        value={info.schoolLocation}
        name='School Location'
        onChange={(e) =>
          updateValue(e.target.value, "schoolLocation", setInfo, info)
        }
      ></Input>
      <Input
        value={info.degreeStart}
        name='Degree Start'
        onChange={(e) =>
          updateValue(e.target.value, "degreeStart", setInfo, info)
        }
      ></Input>
      <Input
        value={info.degreeEnd}
        name='Degree End'
        onChange={(e) =>
          updateValue(e.target.value, "degreeEnd", setInfo, info)
        }
      ></Input>
    </>
  );
}
