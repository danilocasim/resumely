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
    if (currentIndex > 0) decrementIndex();
    newAllData.education.splice(currentIndex, 1);
    updateAllData(newAllData);
  };

  return (
    <div className='education inputs'>
      <h1 className='title'>Education</h1>
      {newAllData.education.length - 1 !== 0 && (
        <button onClick={deleteCurrentInfo}>Delete</button>
      )}
      <div className='slides-info'>
        {0 < currentIndex && (
          <button onClick={decrementIndex}>Previous Info</button>
        )}
        {newAllData.education.length - 1 > currentIndex && (
          <button onClick={incrementIndex}>Next Info</button>
        )}
      </div>
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
      {newAllData.education.length - 1 == currentIndex && (
        <button
          onClick={() => {
            updateAllData(newAllData);
            incrementIndex();
          }}
        >
          Add
        </button>
      )}
    </div>
  );
}
