//Sign In page for employees
import axios, { Axios } from "axios";
import React from "react";

export default class ExistingEmployee extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            enterprise_id: '',
            password: ''
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
    
    
    handleSubmit = (e) => {
        e.preventDefault();
        
            axios.post("http://localhost:5000/cred/signIn", {"enterprise_id": this.state.enterprise_id,
                                                                      "password": this.state.password})
            .then(res => {
                console.log("You've logged in!!");  
            console.log(res.data);
            console.log(typeof(res));
            
            })
            .catch(err => {
                console.log(err);
            })
            
        
       
    }    

    render()
    {
        return(
            <center>
        <div>
            <h2>
                SignIn

            </h2>
            <form>

                Enterprise Id<input type="text" name="eid" value={this.state.enterprise_id} onChange={this.handleEnterpriseId}/>
                <br/>
                Enter Password<input type="password" name="password" value={this.state.password} onChange={this.handlePassword}/>
                <br/>
                <button type = "submit"onClick={this.handleSubmit}>submit</button>
            </form>
            <hr/>
            <a href="/">back to home page</a>
        </div>
        </center>
        );
    }
}  