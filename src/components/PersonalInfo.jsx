import { Input } from "./Input";

export function PersonalInfo({ updateAllData, allData }) {
  const newAllData = { ...allData };

  const updateEducationInfo = (prop, value) => {
    newAllData.personalInfo[prop] = value;
    updateAllData(newAllData);
  };

  return (
    <div>
      <Input
        label={"name"}
        value={allData.personalInfo.name}
        onChange={(e) => updateEducationInfo("name", e.target.value)}
      ></Input>
      <Input
        label={"address"}
        value={allData.personalInfo.address}
        onChange={(e) => updateEducationInfo("address", e.target.value)}
      ></Input>
      <Input
        label={"email"}
        value={allData.personalInfo.email}
        onChange={(e) => updateEducationInfo("email", e.target.value)}
      ></Input>
      <Input
        label={"number"}
        value={allData.personalInfo.number}
        onChange={(e) => updateEducationInfo("number", e.target.value)}
      ></Input>
    </div>
  );
}
