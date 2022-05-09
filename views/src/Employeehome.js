import react,{Component} from "react";
import { Link } from "react-router-dom";
class EmployeeHome extends Component{

    render(){
        return(
        
            <div>
                <center>
            <h2>Employee home page</h2>
            <br/>
            <br/>
            <button>update my record</button> |<button> create new record</button>|<button>delete record</button>
            <br/>
            <br/>
            <br/>
            <br/>
            <button>save</button>|<button>Exit</button><br/><br/>
            
        
      <a href="/">back to home page</a>
</center>
    
        </div>
    
        
        
        )






    }
}
    


export default EmployeeHome;