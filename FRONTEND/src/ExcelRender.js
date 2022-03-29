//Bulk uploading of data - Part of admin perspective
import axios from "axios";
import React from "react";
import * as XLSX from "xlsx";
import FileSaver from "file-saver";

export default class ExcelRenderer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            edit :false,
            save:false,
            data: []
        }
    }
    readExcel(file)
    {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
        fileReader.onload= (e) => {
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

    handleEnterpriseId = (e) => {
        let i = e.target.getAttribute("index")
        const state_data = JSON.parse(JSON.stringify(this.state.data));
        let data = e.target.value 
        state_data[i].enterprise_id = data
       console.log("Before ",this.state.data[i].enterprise_id);
       this.setState({
            data: state_data
        })
        console.log(this.state.data[i].enterprise_id)
    }

    handleCareerLevel = (e) =>{
        let i = e.target.getAttribute("index")
        console.log(this.state.data[i].Career_Level);        
       const state_data = JSON.parse(JSON.stringify(this.state.data))
        let data = e.target.value
        state_data[i].career_level = data
        console.log(state_data)
       console.log("Before ",this.state.data[i].career_level);
       console.log(i);
        this.setState({
            data :state_data
        })
        console.log("After ",this.state.data[i].career_level);
    }
    

    handleAccentureJoiningDate =  (e) => {
        let i = e.target.getAttribute("index")
        const state_data = JSON.parse(JSON.stringify(this.state.data));
        let data = e.target.value
        state_data[i].acc_onboard_date = data
       console.log("Before ",this.state.data[i].acc_onboard_date);
        this.setState({
            data: state_data
        })
        console.log(this.state.data[i].acc_onboard_date)
    }

    handleClientJoiningDate =  (e) => {
        let i = e.target.getAttribute("index")
        const state_data = JSON.parse(JSON.stringify(this.state.data));
        let data = e.target.value
        state_data[i].client_onboard_date = data
       console.log("Before ",this.state.data[i].client_onboard_date);
         this.setState({
            data: state_data
        })
        console.log(this.state.data[i].client_onboard_date)
    }

    handleYearsOfExperience = (e) => {
        let i = e.target.getAttribute("index")
        const state_data = JSON.parse(JSON.stringify(this.state.data));
        let data = e.target.value
        state_data[i].years_of_exp = data
       console.log("Before ",this.state.data[i].years_of_exp);
        this.setState({
            data: state_data
        })
        console.log(this.state.data[i].years_of_exp)
    }
    handleAccentureLWD = (e) => {
        let i = e.target.getAttribute("index")
        const state_data = JSON.parse(JSON.stringify(this.state.data));
        let data = e.target.value
        state_data[i].acc_leaving_date = data
       console.log("Before ",this.state.data[i].acc_leaving_date);
        this.setState({
            data: state_data
        })
        console.log(this.state.data[i].acc_leaving_date)
    }

    handleClientLWD = (e) => {
        let i = e.target.getAttribute("index")
        const state_data = JSON.parse(JSON.stringify(this.state.data));
        let data = e.target.value
        state_data[i].client_leaving_date = data
       console.log("Before ",this.state.data[i].client_leaving_date);
         this.setState({
            data: state_data
        })
        console.log(this.state.data[i].client_leaving_date)
    }

    handleSkill = (e) => {
        let i = e.target.getAttribute("index")
        const state_data = JSON.parse(JSON.stringify(this.state.data));
        let data = e.target.value
        state_data[i].primary_skill = data
       console.log("Before ",this.state.data[i].primary_skill);
        this.setState({
            data: state_data
        })
        console.log(this.state.data[i].primary_skill)
    }

    handleSubSkill = (e) => {
        let i = e.target.getAttribute("index")
        const state_data = JSON.parse(JSON.stringify(this.state.data));
        let data = e.target.value
        state_data[i].sub_skill = data
       console.log("Before ",this.state.data[i].sub_skill);
        this.setState({
            data: state_data
        })
        console.log(this.state.data[i].sub_skill)
    }

    handleBackgroundVerificationStatus = (e) => {
        let i = e.target.getAttribute("index")
        const state_data = JSON.parse(JSON.stringify(this.state.data));
        let data = e.target.value
        state_data[i].background_verification_status = data
       console.log("Before ",this.state.data[i].background_verification_status);
        this.setState({
            data: state_data
        })
        console.log(this.state.data[i].background_verification_status)
    }

    
    
    handleEditChange = () => {
        this.setState((state)=>({
            edit: !state.edit
        }))
        console.log(this.state.edit);
    }

    handleAdd = (e) => {
        const obj = {
            enterprise_id: " ",
            career_level: 12,
            years_of_exp: 0,
            acc_onboard_date: new Date(),
            client_onboard_date: new Date(),
            acc_leaving_date: new Date(),
            client_leaving_date: new Date(),
            primary_skill:' ',
            sub_skill:' ',
            background_verification_status:' '

        };
        const temp = JSON.parse(JSON.stringify(this.state.data))
        temp.push(obj);
        console.log(obj);
        this.setState((state)=>({
            data: temp
        }));
        console.log(this.state.data);

    }

    handleDelete = (e) => {
        const i = e.target.getAttribute("index");
        const temp = JSON.parse(JSON.stringify(this.state.data))
        temp.splice(i,1)
        console.log(temp)
        this.setState((state)=>({
            data: temp
        }))
        console.log(this.state.data)
    }


    handleUpload =(e) => {
        console.log(this.state.data)
        console.log(this.state.data.length)
        axios.put("http://localhost:5000/emp/updateMultipleEmployeeData",{data:this.state.data})
        .then(res => {
            console.log(res);
            console.log(typeof(res));
        })
        .catch(err => {console.log(err);})
    }

    writeData = () => {
        const fileType =  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' ;
        const ws = XLSX.utils.json_to_sheet(this.state.data);
        const wb = {Sheets: {"Sheet1": ws}, SheetNames:['Sheet1'] };
        const excelBuffer =XLSX.write(wb, {bookType:"xlsx", type:"array" });    
        const data = new Blob([excelBuffer], {type:fileType});
        FileSaver.saveAs(data, "FIL_DATA_DOWNLOAD.xlsx");
     }

    
     componentDidUpdate()
     {
         console.log("Updating..")
         console.log(this.state.data);
     }


    render()
    {
        return(
            <center>
            <div>
                <input type="file" onChange={(e)=>{
                    const file = e.target.files[0];
                    this.readExcel(file);
                }}/>

                {this.state.data.length!=0 && 
                    <table>
                        <thead>
                        <tr>
                            <th>Enterprise Id</th>
                            <th>Career Level</th>
                            <th>Years of Experience</th>
                            <th>Accenture Joining Date</th>
                            <th>Client Joining Date</th>
                            <th>Accenture LWD</th>
                            <th>Client LWD</th>
                            <th>Skill</th>
                            <th>Sub Skill</th>
                            <th>Bakcground Verification Status</th>
                        </tr>
                        </thead>
                        <tbody> 

                            {this.state.data.length!=0&&
                                this.state.data.map((db,i) => {return(
                                    
                                    <tr key={i}>
                                    <td><input type="text" index = {i} value = {this.state.data[i].enterprise_id} onChange={this.handleEnterpriseId} disabled={(this.state.edit)?'':'disabled' }/></td>
                                    
                                    <td><select index ={i} value ={this.state.data[i].career_level} onChange={this.handleCareerLevel} disabled={(this.state.edit)?'':'disabled' } >
                                     <option value={12}>12</option>
                                        <option value={11}>11</option>
                                        <option value={10}>10</option>
                                        <option value={9}>9</option>
                                        <option value={8}>8</option>
                                    </select></td>
                                    <td><input type="number" index ={i} value = {this.state.data[i].years_of_exp} onChange={this.handleYearsOfExperience} disabled={(this.state.edit)?'':'disabled' }/></td>
                                    <td><input type="date" index ={i} value = {this.state.data[i].acc_onboard_date} onChange={this.handleAccentureJoiningDate} disabled={(this.state.edit)?'':'disabled' }/></td>
                                    <td><input type="date" index ={i} value = {this.state.data[i].client_onboard_date} onChange={this.handleClientJoiningDate} disabled={(this.state.edit)?'':'disabled' }/></td>
                                    <td><input type="date" index ={i} value = {this.state.data[i].acc_leaving_date} onChange={this.handleAccentureLWD} disabled={(this.state.edit)?'':'disabled' }/></td>
                                    <td><input type="date" index ={i} value = {this.state.data[i].client_leaving_date} onChange={this.handleClientLWD} disabled={(this.state.edit)?'':'disabled' }/></td>
                                    <td><input type="text" index ={i} value = {this.state.data[i].primary_skill} onChange={this.handleSkill} disabled={(this.state.edit)?'':'disabled' }/></td>
                                    <td><input type="text" index ={i} value = {this.state.data[i].sub_skill} onChange={this.handleSubSkill} disabled={(this.state.edit)?'':'disabled' }/></td>
                                    <td><input type="text" index ={i} value = {this.state.data[i].background_verification_status} onChange={this.handleBackgroundVerificationStatus} disabled={(this.state.edit)?'':'disabled' }/></td>
                                    <td><button onClick={this.handleDelete} index={i}>Delete Employee</button></td>
                                    
                            </tr>)

                                })
                            
                            }
                            <tr>{this.state.edit===false?<td><button onClick={this.handleEditChange}>Edit</button></td>:<td><button onClick={this.handleEditChange}>Save</button></td>}
                            <td><button onClick={this.handleAdd}>Add Employee</button></td>
                            
                            <td><button onClick={this.handleUpload}>Upload to DB</button></td>
                            <td><button onClick={this.writeData}>Download Excel</button></td></tr>
                            
                        </tbody>

                    </table>
                }
            </div>
            </center>
        )
    }
}
