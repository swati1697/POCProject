
import './App.css';
import { Component } from 'react/cjs/react.production.min';
import * as XLSX from 'xlsx';
import * as FileSaver from "file-saver";


class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = { 
      data: 0,
      EnterpriseId: '',
      hours: '' 
    };
  }  
  
  readexcel = (file) => {

    // const reading = new Promise((resolve,reject) => { })

    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);

    fileReader.onload=(e) => {
      const bufferArray = e.target.result;

      const wb = XLSX.read(bufferArray,{type:'buffer'});
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);
      this.setState(() => ({data : data }));
      console.log(this.state.data);
      
    }

    fileReader.onerror=(err)=> {
      console.log(err);
    }
  }

  
  writeData = () => {
    // const add_data = this.state.data;
    // const obj = {"EnterpriseId": "Bhavan Kalva", "Number_of_hours": 24 };
    // add_data.push(obj);
    const fileType =  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' ;
    // this.setState(()=>({
    //   data: add_data
    // }));
    const ws = XLSX.utils.json_to_sheet(this.state.data);
    const wb = {Sheets: {"Sheet1": ws}, SheetNames:['Sheet1'] };
    const excelBuffer =XLSX.write(wb, {bookType:"xlsx", type:"array" });    
    const data = new Blob([excelBuffer], {type:fileType});
    FileSaver.saveAs(data, "FIL_DATA_DOWNLOAD.xlsx");
 }

 handleEmail = (e) => {
   this.setState(()=> ({EnterpriseId: e.target.value}));
   }

  handlehours = (e) => {
    this.setState(() => ({
      hours: e.target.value
    }));
   }

   handleSubmit = (e) => {
     const obj = {EnterpriseId: this.state.EnterpriseId, Number_of_hours: this.state.hours};
     const add_data = this.state.data;
     add_data.push(obj);
     this.setState(()=>({
       data:add_data
     }));

   }


 render() {  
    return(
      <div className="App">
    
      <input type="file" 
      onChange={(e) => {
        const file = e.target.files[0];
        this.readexcel(file);
      
      }}/>Upload your excel here<br/> <br/><br/><br/>
      
  
      Enterprise Id<input type="email" value ={this.state.EnterpriseId} 
                    onChange={this.handleEmail}></input> <br></br>
  
      Number of hours<input type="text" value ={this.state.hours} 
                      onChange={this.handlehours}></input> <br></br>
      
      <button onClick={this.handleSubmit}> Add</button>
      
     
      <button onClick={this.writeData}> Download new Excel </button>
  
      </div>
    );
    }
  }
export default App;
