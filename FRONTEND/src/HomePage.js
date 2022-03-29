import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <h2 style={{color:"red",fontSize:"40px"}}>Welcome To Capacity</h2>
      </div>
      <div className='btn'>
        <Link to='/NewJoiner'><button>New joiner</button></Link>|
        <Link to='/about'><button>Existing Employee</button></Link>|
        <Link to='/about'><button>Admin</button></Link>

        

      </div>
      
    </div>
  );
}

export default App;




