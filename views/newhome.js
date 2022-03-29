import react,{Component} from "react";
import { Link } from "react-router-dom";
import './home.css'
import axios from "axios";
class Newhome extends Component{
  constructor(){
    super();
    this.state={
        employeeData:[]
    }
    axios.get('http://localhost:3001/getBooks')
    .then((response)=>{
        this.setState({
            employeeData:response.data
        })
    })
    .catch((error)=>{
        console.log(error)
    })
}
    

    render(){
      let showData=this.state.employeeData.map((employee)=>
        <tr><td>{employee.employee_id}</td><td>{employee.name}</td><td>{employee.email_id}</td><td>{employee.accenture_start_date}</td><td>{employee.onboarded_fil}</td></tr>
        )
        return(
        
            <div>
                <center>
            {/* <h2> newjoiner homepage</h2>
            
            <button>Create New Record</button>||
            <button>Logout</button>
            <br/><br/> */}
            <table style={{border:"1px solid"}}>
        <tr>
          <th style={{border:"1px solid"}}>Employee Id</th>
          <th style={{border:"1px solid"}}>Name</th>
          <th style={{border:"1px solid"}}>Email Id</th>
          <th style={{border:"1px solid"}}>Accenture Start Date</th>
          <th style={{border:"1px solid"}}>Onboarded to FIL</th>

  </tr>
  {showData}
      </table>
      <br/>
      <br/>
      <button>Save</button>  <button>cancel</button>
      <br/>


        
      <a href="/">back to home page</a>

        
        </center>
        </div>
        
        
        )






    }
}
    


export default Newhome;