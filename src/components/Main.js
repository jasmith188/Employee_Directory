import React from "react";
import API from "../utils/API";

class Main extends React.Component {
    state = {
        employees: []
    }

    componentDidMount() {
        API.getEmployees()
            .then(data => {
                console.log(data);
                this.setState({
                    employees: data.data.results
                })

            })
            .catch(err => console.log(err));

    }

    render() {
        return (
            <div>
                <container className="container min-width 300px">
                <table className="table">
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
                                <td><img src={employee.picture.thumbnail} alt =""/></td>
                                <td>{employee.name.first}</td>
                                <td>{employee.name.last}</td>
                                <td>{employee.email}</td>
                                <td>{employee.cell}</td>
                                <td>{employee.dob.age}</td>
                            </tr>


                        ))}
                    </tbody>
                </table>
                </container>
            </div>
        )
    }

};

export default Main;