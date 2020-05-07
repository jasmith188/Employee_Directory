import React from "react";
import API from "../utils/API";
import Container from "./Container";
import SearchForm from "./SearchForm";
import Jumbotron from "./Jumbotron";

class Main extends React.Component {
    state = {
        employees: [],
        search: ""
    }

    componentDidMount() {

        API.getEmployees()
            .then(data => {
                console.log(data);
                this.setState({
                    employees: data.data.results
                })
            })
    }


    // When the form is submitted, search the OMDB API for the value of `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployees(this.state.search);
    };

    render() {
        return (
            <Container>
                <Jumbotron>
                </Jumbotron>
                <SearchForm
                    name="Employees"
                    type="Name"
                    handleFormSubmit={this.handleInputChange}
                />
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
            </Container>


        )
    }

};

export default Main;