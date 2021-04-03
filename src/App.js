import React, { useState, useEffect } from "react";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import axios from "axios";

function App() {
  const [employeeState, setEmployeeState] = useState([]);
  // input pulled data from API into site using useState/useEffect method
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?nat=us&results=40")
      .then((allUsers) => {
        setEmployeeState(
          allUsers.data.results.map((result) => {
            let employeeData = {
              firstName: result.name.first,
              lastName: result.name.last,
              age: result.dob.age,
              email: result.email,
              city: result.location.city,
              state: result.location.state,
            };
            return employeeData;
          })
        );
      });
  }, []);
  // filters employees by city in search bar
  const filterCity = (event) => {
    let city = event.target.value.toLowerCase();
    setEmployeeState(
      employeeState.filter((employee) => {
        return employee.city.toLowerCase().includes(city);
      })
    );
  };
  // allows a person to sort employees by first name
  const sortByFirst = () => {
    let sortEmployees = employeeState
      .map((employee) => employee)
      .sort((a, b) => a.firstName.localeCompare(b.firstName));
    setEmployeeState(sortEmployees);
  };
  // refresh the page with new list
  const refreshPage = () => {
    window.location.reload(false);
  };
  // page layout...need to work more on the layout of this. things are not lining up to spec
  return (
    <div>
      <Navbar />
      <Wrapper>
        <div className="conatiner mt-4">
          <div className="row mb-4">
            <div className="col">
              <strong>Find a React Employee!</strong>
            </div>
            {/* sort button */}
            <div className="col-3">
              <button
                type="button"
                class="btn btn-danger"
                onClick={(e) => sortByFirst(e)}
              >
                Sort by first name!
              </button>
            </div>
            {/* search by city */}
            <div className="col-3">
              <input
                type="text"
                onChange={(e) => {
                  filterCity(e);
                }}
                className="form-control"
                placeholder="Filter by city!"
              ></input>
            </div>
            {/* refresh button */}
            <div className="col-3">
              <button
                type="button"
                class="btn btn-secondary"
                onClick={refreshPage}
              >
                Refresh the list!
              </button>
            </div>
          </div>
          {/* make a list here with called items from API */}
          <table className="table">
            <tbody>
              {employeeState.map((employee) => (
                <List
                  firstName={employee.firstName}
                  lastName={employee.lastName}
                  age={employee.age}
                  email={employee.email}
                  city={employee.city}
                  state={employee.state}
                  key={employee.id}
                />
              ))}
            </tbody>
          </table>
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
