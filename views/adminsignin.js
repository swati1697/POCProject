import react,{Component} from "react";
import { Link } from "react-router-dom";
class Adminsignin extends Component{

    render(){
        return(
        
            <div>
                <center>
            <h2> Admin Signin</h2>
            
            
        <form action="signin" method="post">
            
            <input type="email" name="username" placeholder="Emter your Enterprise id" required/>
            <br/>
            <input type="text" name="password" placeholder="Enter your Password" required/>
            <br/>
            
      <Link to="adminhome">     <button type="submit" >signin</button> <br/></Link><br/>
      <a href="/">back to home page</a>

        </form>
        </center>
        </div>
        
        
        )






    }
}
    


export default Adminsignin;