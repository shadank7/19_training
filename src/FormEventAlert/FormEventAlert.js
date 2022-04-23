import { useRef } from "react";
import "./FormEventAlert.css";
export const FormEventAlert = () => {
  const refPhysics = useRef();
  const refChemistry = useRef();
  const refBiology = useRef();
  const refMathmatics = useRef();
  const formHandler = (e) => {
    e.preventDefault();
    const average =
      (Number(refPhysics.current.value) +
        Number(refChemistry.current.value) +
        Number(refBiology.current.value) +
        Number(refMathmatics.current.value)) /
      4;
    alert(`{average of all subject is ${average}}`);
  };
  return (
    <>
      <form className="form" onSubmit={formHandler}>
        <label forhtml="physics">Physics:</label>
        <input
          type="text"
          id="physics"
          placeholder="Enter Physics Marks"
          ref={refPhysics}
        />
        <label forhtml="chemistry">Chemistry:</label>
        <input
          type="text"
          id="chemistry"
          placeholder="Enter Chemistry Marks"
          ref={refChemistry}
        />
        <label forhtml="biology">Biology:</label>
        <input
          type="text"
          id="biology"
          placeholder="Enter Biology Marks"
          ref={refBiology}
        />
        <label forhtml="mathmatics">Mathmatics:</label>
        <input
          type="text"
          id="mathmatics"
          placeholder="Enter Mathmatics Marks"
          ref={refMathmatics}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
