import React from "react";
// creating list for workers to pull from api and show on site
function List({ firstName, lastName, age, email, city, state }) {
  return (
    <div>
      <tr>
        <td className="first-name" key="1">
          {firstName}
        </td>
        <td className="last-name" key="2">
          {lastName}
        </td>
        <td className="age" key="3">
          {age}
        </td>
        <td className="email" key="4">
          {email}
        </td>
        <td className="city" key="5">
          {city}
        </td>
        <td className="state" key="6">
          {state}
        </td>
      </tr>
    </div>
  );
}

export default List;
