import { Routes, Route, NavLink } from "react-router-dom";
import { Assignment1 } from "./Assigment1/Assignment1";
import { Assignment2 } from "./Assigment2/Assignment2";
import { Assignment3 } from "./Assigment3/Assignment3";
import "./Table.css";
export const Table = () => {
  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="assignment-1">Table Assignment 1</NavLink>
          </li>
          <li>
            <NavLink to="assignment-2">Table Assignment 2</NavLink>
          </li>
          <li>
            <NavLink to="assignment-3">
              Table Assignment 3 :Generate Table
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="assignment-1" element={<Assignment1 />} />
        <Route path="assignment-2" element={<Assignment2 />} />
        <Route path="assignment-3" element={<Assignment3 />} />
      </Routes>
    </>
  );
};
