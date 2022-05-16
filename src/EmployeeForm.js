import React from "react";
import axios from "axios";

class EmployeeForm extends React.Component{
    constructor(){
        super()
        this.state={
        name:'',
        salary:'',
        age:''
        }
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://dummy.restapiexample.com/api/v1/create',this.state)
        .then(response=>{if(response.status===200){
            alert('Ok')
        }})
        .catch(error=>console.log(error))
    }
    changeHandler=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" name="name" onChange={this.changeHandler} value={this.state.name} />
                </div>
                
                <div>
                    <input type="text" name="salary" onChange={this.changeHandler} value={this.state.salary}/>
                </div>
                
                <div>
                    <input type="text" name="age" onChange={this.changeHandler} value={this.state.age}/>
                </div>
                
                <div>
                    <button type="submit">Save</button>
                </div>
            </form>
        )
    }
}
export default EmployeeForm