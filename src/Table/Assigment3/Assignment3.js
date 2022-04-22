import { useState } from "react";

export const Assignment3 = () => {
  const tableNum = 5;
  const [tableDigit, setTableDigit] = useState([]);
  const [incrementNum, setincrementNum] = useState(1);
  return (
    <main className="table numTable">
      <h2>Generate Math Table of 5</h2>
      <button
        onClick={() => {
          setTableDigit((prev) => {
            return [
              ...prev,
              { tableNum: tableNum, incrementNum: incrementNum },
            ];
          });
          setincrementNum((prev) => prev + 1);
        }}
      >
        Generate Table of {tableNum}
      </button>
      {tableDigit.length !== 0 && (
        <table border="1" cellPadding="5" cellSpacing="0">
          <thead>
            <tr>
              <th colSpan="2">Table of {tableNum}</th>
            </tr>
          </thead>
          <tbody>
            {tableDigit.map((val) => {
              return (
                <tr>
                  <td>
                    {val.tableNum} X {val.incrementNum}
                  </td>
                  <td>{val.tableNum * val.incrementNum}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </main>
  );
};
