import React from "react";
import API from "../utils/API";

class Main extends React.Component {

        state = {
            employees: []
        }

        componentDidMount() {
            API.getEmployees()
                .then( data => {
                    console.log(data);
                    this.setState({
                        employees: data.data.results
                    })
                    
                })
                .catch(err => console.log(err));
                
        }

        render() {

            return  (
                
            )




        }









    
}: