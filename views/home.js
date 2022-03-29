import axios, { Axios } from "axios";
import React from "react";
import { Link } from "react-router-dom";
import './home.css';


export default class NewJoiner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            enterprise_id: '',
            password: '',
            re_password: ''
        }
    }

    handleEnterpriseId = (e) => {
        this.setState(() => ({
            enterprise_id: e.target.value
        }));
    }

    handlePassword = (e) => {
        this.setState(() => ({
            password: e.target.value
        }));
    }
    handleRePassword = (e) => {
        this.setState(() => ({
            re_password: e.target.value
        }));
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.password === this.state.re_password) {
            axios.post("http://localhost:5007/signup", {
                "enterprise_id": this.state.enterprise_id,
                "password": this.state.password,
                "re_password": this.state.re_password
            })
                .then(res => {
                    console.log("Its finished!!!!");
                    console.log(res.data);
                    console.log(typeof (res));

                })
                .catch(err => {
                    console.log(err);
                })

        }
        else {
            alert("Your password doesn't match");
        }
    }

    handleEmployeeId = (e) => {
        this.setState(() => ({
            employee_id: e.target.value
        }));
    }


    render() {
        return (
            <center>
                <div className="common">
                    <h2>
                        Signup

                    </h2>
                    <form>


                        Enterprise Id<input type="text" name="eid" value={this.state.enterprise_id} onChange={this.handleEnterpriseId} />
                        <br />
                        Enter Password<input type="password" name="password" value={this.state.password} onChange={this.handlePassword} />
                        <br />
                        Reenter Password<input type="password" name="repassword" value={this.state.re_password} onChange={this.handleRePassword} />
                        <br />
                        <button type="submit"onClick={this.handleSubmit}>submit</button>
                       <Link to="newhome"> <button>submit</button></Link> 
                    </form>
                    <hr />
                    <a href="/">back to home page</a>
                </div>
            </center>
        );
    }
}

