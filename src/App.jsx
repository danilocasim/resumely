import { useState } from "react";
import "./styles/App.css";
import { Education } from "./components/Education";
import { Resume } from "./components/Resume";
import { PersonalInfo } from "./components/PersonalInfo";

function App() {
  const [allData, setAllData] = useState({
    personalInfo: {
      name: "Danilo Casim",
      address: "adress",
      email: "danilo@gmail",
      number: "08982242",
    },
    education: [
      {
        school: "PLMUN",
        degree: "LOL",
        location: "Muntinlupa",
        schoolStart: "2332-232-2",
        schoolEnd: "232-45-4",
      },
    ],
  });

  const updateAllData = (newAllData) => {
    setAllData(newAllData);
  };

  return (
    <div className='container'>
      <div className='inputs-container'>
        <PersonalInfo
          allData={allData}
          updateAllData={(value) => updateAllData(value)}
        ></PersonalInfo>
        <Education
          allData={allData}
          updateAllData={(value) => updateAllData(value)}
        ></Education>
      </div>

      <div className='resume-container resume'>
        <Resume info={allData}></Resume>
      </div>
    </div>
  );
}

export default App;
