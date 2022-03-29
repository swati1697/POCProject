import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router ,Routes ,Route} from 'react-router-dom';
import Home from './home';
import About from './about';
import Newhome from './newhome';
import EmployeeHome from './Employeehome';
import Adminsignin from './adminsignin';
import Adminhome from './adminhome';




ReactDOM.render(
  <React.StrictMode>
  
    <Router>
      <div>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/home/newhome" element={<Newhome/>}/>
        
        <Route path="/about" element={<About/>}/>
        <Route path="/about/Employeehome" element={<EmployeeHome/>}/>
        <Route path="/adminsignin" element={<Adminsignin/>}/>
        <Route path="/adminsignin/adminhome" element={<Adminhome/>}/>
      </Routes>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
