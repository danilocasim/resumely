import { useState } from "react";
import "./styles/App.css";
import { Education } from "./components/Education";
import { Resume } from "./components/Resume";
import { PersonalInfo } from "./components/PersonalInfo";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { initialInfo } from "./components/InitialInfo";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";

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
        {components[currentIndex]}
        <div className='slides'>
          {currentIndex > 0 && (
            <Icon
              className='slide-left'
              onClick={decrementIndex}
              path={mdiChevronLeft}
              size={3}
            />
          )}
          {components.length - 1 > currentIndex && (
            <Icon
              className='slide-right'
              onClick={incrementIndex}
              path={mdiChevronRight}
              size={3}
            />
          )}
        </div>
      </div>

      <Resume info={allData}></Resume>
    </div>
  );
}

export default App;
