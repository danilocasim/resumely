import { useState } from "react";
import "./styles/App.css";
import { Resume } from "./components/Resume";
import { PersonalInfo } from "./components/PersonalInfo";
import { Education } from "./components/Education";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "Danilo Casim Jr",
    address: "lol",
    email: "danilo@casimemail",
    number: "0953343434",
  });

  const [educationalInfo, setEducationalInfo] = useState({
    school: "PLMUN",
    degree: "BSCS",
    schoolLocation: "lol",
    degreeStart: "MAY- 2323",
    degreeEnd: "June- 3223",
  });

  const data = { ...personalInfo, ...educationalInfo };

  // currentIndex of section page
  // array of values

  const updateValue = (value, prop, setState, info) => {
    const newData = {
      ...info,
      [prop]: value,
    };
    setState(newData);
  };

  return (
    <div className='container'>
      <div className='inputs-container'>
        <PersonalInfo
          updateValue={updateValue}
          info={personalInfo}
          setInfo={setPersonalInfo}
        ></PersonalInfo>

        <Education
          updateValue={updateValue}
          info={educationalInfo}
          setInfo={setEducationalInfo}
        ></Education>
      </div>

      <div className='resume-container resume'>
        <Resume data={data}></Resume>
      </div>
    </div>
  );
}

export default App;
