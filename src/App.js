import { Routes, Route, NavLink } from "react-router-dom";
import { EnvHappyCode } from "./EnvHappyCode/EnvHappyCode";
import { Table } from "./Table/Table";
import { Main } from "./Student/Main";
import { AppCompany } from "./Company/AppCompany";
import ValidateProps from "./ValidateProps/ValidateProps";
import { Assignment3 } from "./Table/Assigment3/Assignment3";
import { ComponentLifeCycle } from "./ComponentLifeCycle/ComponentLifeCycle";
import { FormEventAlert } from "./FormEventAlert/FormEventAlert";
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
              <li>
                <NavLink to="/props-validation">
                  Topic 7: React JS - Props Validation Assignment 1:
                </NavLink>
              </li>
              <li>
                <NavLink to="/component-api">
                  Topic 8: React JS - Component API
                </NavLink>
              </li>
              <li>
                <NavLink to="/component-lifecycle">
                  Topic 9: React JS - Component Life Cycle Assignment 1:
                </NavLink>
              </li>
              <li>
                <NavLink to="/form-event">
                  Topic 10: React JS – Forms & Topic 11: React JS - Events
                </NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/table/*" element={<Table />} />
            <Route path="/student" element={<Main />} />
            <Route path="/company" element={<AppCompany />} />
            <Route
              path="/props-validation"
              element={<ValidateProps age="21" />}
            />
            <Route path="/component-api" element={<Assignment3 />} />
            <Route
              path="/component-lifecycle"
              element={<ComponentLifeCycle />}
            />
            <Route path="/form-event" element={<FormEventAlert />} />
            <Route path="/" element={<EnvHappyCode />} />
          </Routes>
        </section>
      </main>
    </>
  );
};

export default App;
