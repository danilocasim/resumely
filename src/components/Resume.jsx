export function Resume({ info }) {
  return (
    <div className='resume' id='resume' key='resume'>
      <div className='intro'>
        <p className='title'>{info.personalInfo.name}</p>
        <hr />
        <ul>
          <li>{info.personalInfo.address}</li>
          <li>{info.personalInfo.email}</li>
          <li>{info.personalInfo.number}</li>
        </ul>
      </div>

      <div className='education'>
        <p className='title'>Education</p>
        {info.education.map((data) => {
          return (
            <div>
              <div className='row'>
                <p className='school'>{data.school}</p>
                <p>{data.degree}</p>
              </div>
              <div className='row'>
                <p>{data.location}</p>
                <p>
                  {data.schoolStart} - {data.schoolEnd}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className='experience'>
        <p className='title'>Experience</p>
        {info.experience.map((data) => {
          return (
            <div className='job'>
              <div className='row'>
                <p className='bold'>{data.company}</p>
                <p>{data.location}</p>
              </div>

              <div className='row'>
                <p className='bold'>{data.position}</p>
                <p>
                  {data.startWorking} - {data.endWorking}
                </p>
              </div>

              <ul>
                {data.keyResponsibilities.map((res) => {
                  return (
                    <>
                      <li>{res}</li>
                    </>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      <div className='skills'>
        <p className='title'>Skills</p>
        <p>
          <span className='bold'>Technical: </span>
          {info.skills.languages}
        </p>
        <p>
          {" "}
          <span className='bold'>Frameworks: </span>
          {info.skills.frameworks}
        </p>
        <p>
          {" "}
          <span className='bold'>Developer Tools: </span>
          {info.skills.devTools}
        </p>
        <p>
          {" "}
          <span className='bold'>Libraries: </span>
          {info.skills.libraries}
        </p>
      </div>
    </div>
  );
}
