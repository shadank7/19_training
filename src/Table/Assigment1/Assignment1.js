export const Assignment1 = () => {
  const employeeData = [
    {
      employeeId: "1001",
      employeeName: "Shadan",
      employeeMail: "shadan@test.com",
    },
    {
      employeeId: "1002",
      employeeName: "Rose",
      employeeMail: "rose@test.com",
    },
    {
      employeeId: "1003",
      employeeName: "Rose Shadan",
      employeeMail: "roseshadan@test.com",
    },
    {
      employeeId: "1004",
      employeeName: "Wipro",
      employeeMail: "wipro@test.com",
    },
    {
      employeeId: "1005",
      employeeName: "Test",
      employeeMail: "test@test.com",
    },
  ];
  return (
    <main className="table">
      <h2>Employee Table</h2>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th> Employee ID</th>
            <th> Employee Name</th>
            <th> Employee Email ID</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((emp) => {
            const { employeeId, employeeName, employeeMail } = emp;
            return (
              <tr key={employeeId}>
                <td>{employeeId}</td>
                <td>{employeeName}</td>
                <td>{employeeMail}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
