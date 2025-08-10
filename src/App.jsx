import { useState } from "react";
import "./styles/App.css";
import { Education } from "./components/Education";
import { Resume } from "./components/Resume";
import { PersonalInfo } from "./components/PersonalInfo";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { initialInfo } from "./components/InitialInfo";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allData, setAllData] = useState(initialInfo);

  const components = [
    <PersonalInfo
      allData={allData}
      updateAllData={(value) => updateAllData(value)}
    />,
    <Education
      allData={allData}
      updateAllData={(value) => updateAllData(value)}
    />,
    <Experience
      allData={allData}
      updateAllData={(value) => updateAllData(value)}
    />,
    <Skills
      allData={allData}
      updateAllData={(value) => updateAllData(value)}
    />,
  ];

  const incrementIndex = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const decrementIndex = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const updateAllData = (newAllData) => {
    setAllData(newAllData);
  };
  return (
    <div className='container'>
      <div className='inputs-container'>
        {currentIndex > 0 && (
          <button onClick={decrementIndex}>Previous Page</button>
        )}{" "}
        {components.length - 1 > currentIndex && (
          <button onClick={incrementIndex}>Next Page</button>
        )}
        {components[currentIndex]}
      </div>

      <div className='resume-container resume'>
        <Resume info={allData}></Resume>
      </div>
    </div>
  );
}

export default App;
