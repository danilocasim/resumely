import { Input } from "./Input";
import { useState } from "react";

export function Education({ updateAllData, allData }) {
  const [currentIndex, setIndex] = useState(0);
  const newAllData = { ...allData };

  const updateEducationInfo = (prop, value) => {
    newAllData.education[currentIndex][prop] = value;
    updateAllData(newAllData);
    console.log(newAllData);
  };

  const incrementIndex = () => {
    newAllData.education = [
      ...newAllData.education,
      { school: "", degree: "", location: "", schoolStart: "", schoolEnd: "" },
    ];
    setIndex(currentIndex + 1);
  };

  const decrementIndex = () => {
    setIndex(currentIndex - 1);
  };

  const deleteCurrentInfo = () => {
    decrementIndex();
    newAllData.education.splice(currentIndex, 1);
    updateAllData(newAllData);
  };

  return (
    <div>
      {newAllData.education.length - 1 !== 0 && (
        <button onClick={deleteCurrentInfo}>Delete</button>
      )}
      {0 < currentIndex && <button onClick={decrementIndex}>previous</button>}
      {newAllData.education.length - 1 > currentIndex && (
        <button onClick={incrementIndex}>next</button>
      )}
      <Input
        label={"school"}
        value={allData.education[currentIndex].school}
        onChange={(e) => updateEducationInfo("school", e.target.value)}
      ></Input>
      <Input
        label={"degree"}
        value={allData.education[currentIndex].degree}
        onChange={(e) => updateEducationInfo("degree", e.target.value)}
      ></Input>
      <Input
        label={"location"}
        value={allData.education[currentIndex].location}
        onChange={(e) => updateEducationInfo("location", e.target.value)}
      ></Input>
      <Input
        label={"School Start"}
        value={allData.education[currentIndex].schoolStart}
        onChange={(e) => updateEducationInfo("schoolStart", e.target.value)}
      ></Input>

      <Input
        label={"School End"}
        value={allData.education[currentIndex].schoolEnd}
        onChange={(e) => updateEducationInfo("schoolEnd", e.target.value)}
      ></Input>

      <button
        onClick={() => {
          updateAllData(newAllData);
          incrementIndex();
        }}
      >
        Add
      </button>
    </div>
  );
}
