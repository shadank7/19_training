import "./Details.css";
export const Details = () => {
  const studentData = [
    {
      studentId: "1001",
      studentName: "Shadan",
      studentMarks: 100,
    },
    {
      studentId: "1002",
      studentName: "Rose",
      studentMarks: 101,
    },
    {
      studentId: "1003",
      studentName: "Rose Shadan",
      studentMarks: 200,
    },
    {
      studentId: "1004",
      studentName: "Wipro",
      studentMarks: 300,
    },
    {
      studentId: "1005",
      studentName: "Test",
      studentMarks: 100,
    },
  ];
  return (
    <main className="table student-table">
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th> Student ID</th>
            <th> Student Name</th>
            <th> Student Marks</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((emp) => {
            const { studentId, studentName, studentMarks } = emp;
            return (
              <tr key={studentId}>
                <td>{studentId}</td>
                <td>{studentName}</td>
                <td>{studentMarks}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
