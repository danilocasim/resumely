export function Resume({ data }) {
  console.log(data);
  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.address}</h1>
      <h1>{data.email}</h1>
      <h1>{data.number}</h1>

      <hr />

      <h1>{data.school}</h1>
      <h1>{data.degree}</h1>
      <h1>{data.schoolLocation}</h1>
      <h1>{data.degreeStart}</h1>
      <h1>{data.degreeEnd}</h1>
    </div>
  );
}
