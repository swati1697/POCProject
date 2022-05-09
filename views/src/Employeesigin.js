import react,{Component} from "react";
import { Link } from "react-router-dom";
import { Axios } from "axios";
class Employeesigin extends Component{
    constructor(props) {
        super(props);
        this.state = {

            enterprise_id: '',
            password: ''
            
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


    handleSubmit = (e) => {
        e.preventDefault();
        
            Axios.post("http://localhost:5007/signin", {
                
                
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


    render(){
        return(
        
            <div>
                <center>
            <h2>Signin Form</h2>
            
            
        <form method="post" action="signin">
            
<input type="email" name="username" placeholder="Enter your Enterprise id" required value={this.state.enterprise_id} onChange={this.handleEnterpriseId}/>
            <br/><br/>
<input type="text" name="password"  required value={this.state.password} onChange={this.handlePassword}/>
            <br/>
            
      <Link to="Employeehome"><button >signin</button> <br/></Link><br/>
      <a href="/">back to home page</a>

        </form>
        </center>
        </div>
        
        
        )






    }
}
    


export default Employeesigin;