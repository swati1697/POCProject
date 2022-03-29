import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <h2 style={{color:"black",fontSize:"40px"}}>Welcome To Capacity</h2>
      </div>
      <div className='btn'>
        <Link to='/home'><button>New joiner</button></Link>|
        <Link to='/Employeesigin'><button>Existing Employee</button></Link>|
        <Link to='/adminsignin'><button>Admin</button></Link>

      </div>
      
    </div>
  );
}

export default App;
