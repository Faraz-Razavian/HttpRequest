import React from "react";
import axios from "axios";

class Employees extends React.Component{
    constructor(){
        super()
        this.state= {
            employees: []
        }
    }
    componentDidMount(){
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
        .then(response => {
            this.setState({
                employees:response.data
            })
        })
        .catch(error =>{ 
            this.setState({
                error:"an error occured."
            })
        })
    }
    render(){
        const{employees,error}=this.state
        let data= employees.length ? employees.map((employee)=><p>{employee.employee_name}</p>) : <p>{error}</p>
        return(
            <div>
                Employees
                {console.log(data)}
            </div>
        )
    }
}
export default Employees