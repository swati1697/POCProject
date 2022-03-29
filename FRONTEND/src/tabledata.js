import React from "react";
export default class TableData extends React.Component
{
    constructor(props)
    {
        console.log("Hit here",props.data);
        super(props);
        this.state = {
            edit:false,
            save:false,
            data: props.data,
            employee_id:props.data.employee_id,
            enterprise_id:props.data.enterprise_id,
            email_id:props.data.email_id,
            acc_onboard_date:props.data.acc_onboard_date,
            fil_onboard_status:props.data.fil_onboard_status,
            primary_skill:props.data.primary_skill,
            career_level:props.data.career_level
        }
    }
        //DATA: {EMPLOYEE_ID: THIS.STATE.EMPLOYEE_ID, ENTERPRISE_ID: THIS.STATE.ENTERPRISE_ID, ...}
    handleEdit=()=>{
        this.setState((state)=>({
            edit:!state.edit
        }));
    }

    handleSave=()=>{
        const data = {Employee_Id: this.state.employee_id,
                        EnterpriseId: this.state.enterprise_id,
                        email_id: this.state.email_id,
                        acc_onboard_date: this.state.acc_onboard_date,
                        fil_onboard_status: this.state.fil_onboard_status,
                        primary_skill: this.state.primary_skill,
                        career_level: this.state.career_level}
        this.setState((state)=>({
            data:data
        }))
        
    }

    handleAccOnboardDate =(e) => {
        this.setState(()=>({
            acc_onboard_date: e.target.value
        }))
    }

    handleFilOnboardStatus =(e) => {
        this.setState(()=>({
            fil_onboard_status: e.target.value
        }))
    }

    handleEmailId =(e) => {
        this.setState(()=>({
            email_id: e.target.value
        }))
    }

    handleEnterpriseId =(e) => {
        this.setState(()=>({
            enterprise_id: e.target.value
        }))
    }

    handleCareerLevel =(e) => {
        this.setState(()=>({
            career_level: e.target.value
        }))
    }

    handlePrimarySkill =(e) => {
        this.setState(()=>({
            primary_skill: e.target.value
        }))
    }

   

    render()
    {
        return(
        
              
                <tr>
                <td>{this.props.employee_id}</td>
                <td><input type="number" value={this.state.enterprise_id} onChange={this.handleEnterpriseId} disabled={(this.state.edit)?'':'disabled'}/></td>
                <td><input  type ="email"value={this.state.email_id} onChange={this.handleEmailId} disabled={(this.state.edit)?'':'disabled'}/></td>
                <td><input  type ="date"value={this.state.acc_onboard_date} onChange={this.handleAccOnboardDate} disabled={(this.state.edit)?'':'disabled'}/></td>
                <td><input  type="text"value={this.state.fil_onboard_status} onChange={this.handleFilOnboardStatus} disabled={(this.state.edit)?'':'disabled'}/></td>
                <td><input  type="text"value={this.state.primary_skill} onChange={this.handlePrimarySkill} disabled={(this.state.edit)?'':'disabled'}/></td>
                <td><input  type="number" value={this.state.career_level} onChange={this.handleCareerLevel} disabled={(this.state.edit)?'':'disabled'}/></td>
                <td><button onClick={this.handleEdit} value="Edit"></button></td>
                <td><button onClick={this.handleSave} value="Save"></button></td>
                </tr>
              
        )
    }
}