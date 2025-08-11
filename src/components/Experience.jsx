import { Input } from "./Input";
import { useState } from "react";
import Icon from "@mdi/react";

import { mdiTrashCanOutline } from "@mdi/js";

export function Experience({ updateAllData, allData }) {
  const [currentIndex, setIndex] = useState(0);
  const newAllData = { ...allData };

  const incrementIndex = () => {
    newAllData.experience = [
      ...newAllData.experience,
      {
        company: "",
        position: "",
        location: "",
        startWorking: "",
        endWorking: "",
        keyResponsibilities: [""],
      },
    ];
    setIndex(currentIndex + 1);
  };

  const decrementIndex = () => {
    setIndex(currentIndex - 1);
  };

  const deleteCurrentInfo = () => {
    if (currentIndex > 0) decrementIndex();
    newAllData.experience.splice(currentIndex, 1);
    updateAllData(newAllData);
  };

  const updateExperienceInfo = (prop, value) => {
    newAllData.experience[currentIndex][prop] = value;
    updateAllData(newAllData);
  };

  const updateResponsibility = (value, index) => {
    newAllData.experience[currentIndex].keyResponsibilities[index] = value;
    updateAllData(newAllData);
  };

  const addResponsibility = () => {
    newAllData.experience[currentIndex].keyResponsibilities.push("");
    updateAllData(newAllData);
  };

  const deleteResponsibility = (responsibilityIndex) => {
    newAllData.experience[currentIndex].keyResponsibilities.splice(
      responsibilityIndex,
      1
    );

    updateAllData(newAllData);
  };

  return (
    <div className='experience inputs'>
      <h1 className='title'>Experience</h1>
      {newAllData.experience.length - 1 !== 0 && (
        <button onClick={deleteCurrentInfo}>Delete</button>
      )}
      <div className='slides-info'>
        {0 < currentIndex && (
          <button onClick={decrementIndex}>Previous Info</button>
        )}
        {newAllData.experience.length - 1 > currentIndex && (
          <button onClick={incrementIndex}>Next Info</button>
        )}
      </div>
      <Input
        label={"company"}
        value={allData.experience[currentIndex].company}
        onChange={(e) => updateExperienceInfo("company", e.target.value)}
      ></Input>
      <Input
        label={"position"}
        value={allData.experience[currentIndex].position}
        onChange={(e) => updateExperienceInfo("position", e.target.value)}
      ></Input>
      <Input
        label={"location"}
        value={allData.experience[currentIndex].location}
        onChange={(e) => updateExperienceInfo("location", e.target.value)}
      ></Input>
      <Input
        label={"Start Working"}
        value={allData.experience[currentIndex].startWorking}
        onChange={(e) => updateExperienceInfo("startWorking", e.target.value)}
      ></Input>

      <Input
        label={"End Working"}
        value={allData.experience[currentIndex].endWorking}
        onChange={(e) => updateExperienceInfo("endWorking", e.target.value)}
      ></Input>
      <button onClick={addResponsibility}>Add Responsibility</button>
      <div className='responsibility-wrapper'>
        {newAllData.experience[currentIndex].keyResponsibilities.map(
          (responsibility, index) => {
            return (
              <div className='responsibility'>
                <Input
                  label={"Key Responsibility"}
                  value={responsibility}
                  onChange={(e) => updateResponsibility(e.target.value, index)}
                ></Input>{" "}
                <Icon
                  onClick={() => deleteResponsibility(index)}
                  path={mdiTrashCanOutline}
                  size={1.5}
                />
              </div>
            );
          }
        )}
      </div>

      {newAllData.experience.length - 1 == currentIndex && (
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
