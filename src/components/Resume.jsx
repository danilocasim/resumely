export function Resume({ info }) {
  return (
    <>
      <h1>{info.personalInfo.name}</h1>
      <h1>{info.personalInfo.address}</h1>
      <h1>{info.personalInfo.email}</h1>
      <h1>{info.personalInfo.number}</h1>

      {info.education.map((data) => {
        return (
          <>
            <h1>{data.school}</h1>
            <h1>{data.degree}</h1>
            <h1>{data.location}</h1>
            <h1>{data.schoolStart}</h1>
            <h1>{data.schoolEnd}</h1>
          </>
        );
      })}
    </>
  );
}
