import { Routes, Route, NavLink } from "react-router-dom";
import { EnvHappyCode } from "./EnvHappyCode/EnvHappyCode";
import { Table } from "./Table/Table";
import { Main } from "./Student/Main";
import { AppCompany } from "./Company/AppCompany";
import "./App.css";

const App = () => {
  return (
    <>
      <main className="main">
        <h1 className="heading">Wipro All Training Solutions</h1>
        <section className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/">
                  Topic 2: React JS - Environment Assignment 1:
                </NavLink>
              </li>
              <li>
                <NavLink to="/table">Topic 3: React JS - JSX</NavLink>
              </li>
              <li>
                <NavLink to="/student">
                  Topic 4: React JS – Components & Topics 5: React JS - State
                  Assignment 1:
                </NavLink>
              </li>
              <li>
                <NavLink to="/company">
                  Topic 6: React JS – Props Assignment 1:
                </NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/table/*" element={<Table />} />
            <Route path="/student" element={<Main />} />
            <Route path="/company" element={<AppCompany />} />
            <Route path="/" element={<EnvHappyCode />} />
          </Routes>
        </section>
      </main>
    </>
  );
};

export default App;
