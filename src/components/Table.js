import React from "react";

function Table(props) {
  return (

    <table className="table striped bordered hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Picture</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Cell Phone Number</th>
          <th scope="col">Age</th>
        </tr>
      </thead>
      <tbody>

        {this.state.employees.map((employee, i) => (
          <tr key={i}>
            <th scope="row">{i}</th>
            <td><img src={employee.picture.thumbnail} alt="" /></td>
            <td>{employee.name.first}</td>
            <td>{employee.name.last}</td>
            <td>{employee.email}</td>
            <td>{employee.cell}</td>
            <td>{employee.dob.age}</td>
          </tr>


        ))}
      </tbody>
    </table>

  );
}




export default Table;