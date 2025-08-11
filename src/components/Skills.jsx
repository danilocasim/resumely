import { Input } from "./Input";

export function Skills({ updateAllData, allData }) {
  const newAllData = { ...allData };

  const updateSkillsInfo = (prop, value) => {
    newAllData.skills[prop] = value;
    updateAllData(newAllData);
  };

  return (
    <div className='skills inputs'>
      <h1 className='title'>Skills</h1>
      <Input
        label={"languages"}
        value={allData.skills.languages}
        onChange={(e) => updateSkillsInfo("languages", e.target.value)}
      ></Input>
      <Input
        label={"frameworks"}
        value={allData.skills.frameworks}
        onChange={(e) => updateSkillsInfo("frameworks", e.target.value)}
      ></Input>
      <Input
        label={"Developer Tools"}
        value={allData.skills.devTools}
        onChange={(e) => updateSkillsInfo("devTools", e.target.value)}
      ></Input>
      <Input
        label={"libraries"}
        value={allData.skills.libraries}
        onChange={(e) => updateSkillsInfo("libraries", e.target.value)}
      ></Input>
    </div>
  );
}
