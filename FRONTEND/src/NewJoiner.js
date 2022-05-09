//Sign Up page for employees
import axios, { Axios } from "axios";
import React from "react";

export default class NewJoiner extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            employee_id:'',
            enterprise_id: '',
            password: '',
            re_password:''
        }
    }

    handleEnterpriseId = (e) => {
        this.setState(()=>({
            enterprise_id: e.target.value
        }));
    }

    handlePassword = (e) => {
        this.setState(()=>({
            password: e.target.value
        }));
    }
    handleRePassword = (e) => {
        this.setState(()=>({
            re_password: e.target.value
        }));
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.password === this.state.re_password)
        {
            axios.post("http://localhost:5000/cred/signup", {"employee_id": this.state.employee_id,
                                                                      "enterprise_id": this.state.enterprise_id,
                                                                      "password": this.state.password})
            .then(res => {
                console.log("Its finished!!!!");  
            console.log(res.data);
            console.log(typeof(res));
            
            })
            .catch(err => {
                console.log(err);
            })
            
        }
        else
        {
            alert("Your password doesn't match");
        }
    }

    handleEmployeeId = (e) => {
        this.setState(()=>({
            employee_id: e.target.value
        }));
    }
    

    render()
    {
        return(
            
            <center>
        <div>
        
            <h2>
                Signup

            </h2>
            <form>
                
                Employee ID <input type="text" name="empid" value={this.state.employee_id} onChange={this.handleEmployeeId}/><br/>
                Enterprise Id<input type="text" name="eid" value={this.state.enterprise_id} onChange={this.handleEnterpriseId}/>
                <br/>
                Enter Password<input type="password" name="password" value={this.state.password} onChange={this.handlePassword}/>
                <br/>
                Reenter Password<input type="password" name="repassword" value={this.state.re_password} onChange={this.handleRePassword}/>
                <br/>
            
                <button type = "submit"onClick={this.handleSubmit}>submit</button>
            
            </form>
            <hr/>
            <a href="http://localhost:3000/HomePage#/HomePage">back to home page</a>
        </div>
        </center>
        );
    }
}  

