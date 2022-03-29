import React from "react";
import * as XLSX from "xlsx";
import TableData from "./tabledata";
class AddExcelData extends React.Component
{
    constructor(props)
    {
        super(props);
        this.TableData = [];
        this.i = 0;
        this.state ={
            data: [],
            child_data: []
        }
    }


    readexcel = (event) => {
        // const reading = new Promise((resolve,reject) => { })
        const file = event.target.files[0];
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
          const len = this.state.data.length;
          for(let i=0;i<len;i++)
          {
            this.TableData.push(React.createRef());
          }
        }
        fileReader.onerror=(err)=> {
          console.log(err);
        }
      }

      handleTableData = (e) => {
        const index = e.target.index;
        const child = this.TableData[index].current;
        const parent = this.state.child_data;
        parent[index] = child.state.data
        this.setState(()=>({
          child_data: parent
        }));
      }

      componentDidMount()
      {
        console.log("Mounted!!");
      }

      componentDidUpdate()
      {
        console.log("Update life cycle method..",this.state.data);
      }

      

    render()
    {
        return(
        <div>
            <input type="file" 
            onChange={ this.readexcel} />

            <table>
              <thead>
                <tr>
                  <td>Employee ID</td>
                  <td>Enterprise ID</td>
                  <td>Email ID</td>
                  <td>Accenture Onboard Date</td>
                  <td>Fidelity Onboard Status</td>
                  <td>Primary Skill</td>
                  <td>Career Level</td>
                </tr>
              </thead>
            
              <tbody>
              {this.state.data.length!=0 && this.state.data.map(ex => {return(<div>
                {console.log("Hi there!!")}
                <TableData data={ex}  ref={this.TableData[this.i]}/> 
                
                <button index = {this.i} onClick={this.handleTableData} value="Update"/>
                {this.i++};
                </div>);
              })}
              </tbody>
            </table>
           
        </div>
        )
    }
}

export default AddExcelData;