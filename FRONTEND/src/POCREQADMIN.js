//Filter page for admin
//TODO - work on get month wise filter on the backend/frontend
import axios from "axios";
import React from "react";
export default class Admin extends React.Component{
    
    constructor(props)
    {
        super(props);
        this.state = {
            data: [],
            toMonth: 0,
            fromMonth: 0,
            toMonthValue: 0,
            toYearValue: 0,
            fromMonthValue: 0,
            fromYearValue: 0,
            career_level: 12,
            skill: 'Javascript',
            monthClicked: false,
            careerClicked: false,
            skillClicked: false,
            
        }
    }

    handleCareerClicked = (e) =>{
        this.setState((state)=>({
            careerClicked: !state.careerClicked
        }))
        console.log(this.state.careerClicked)
    }

    handleMonthClicked = (e) =>{
        this.setState((state)=>({
            monthClicked: !state.monthClicked
        }));

    }

    handleSkillClicked = (e) =>{
        this.setState((state)=>({
            skillClicked: !state.skillClicked
        }));

    }

    handleCareerLevel = (e) =>{
        this.setState(()=>({
            career_level: e.target.value
        }),()=>{
            axios.post("http://localhost:5000/admin/getCflevelWise", {career_level: this.state.career_level})
                .then(res => 
                {this.setState({data: res.data})
                 console.log(res)
            })
                .catch(err=>{console.log(err)})
            }
        )
    }

    handleSkill = (e) =>{
        this.setState(()=>({
            skill: e.target.value
        }),()=>{
        axios.post("http://localhost:5000/admin/getSkillWise", {skill: this.state.skill})
            .then(res => {
                this.setState({data: res.data})
                console.log(res)
              })
            .catch(err=>{console.log(err)})
        }
        )

    }

    handleToMonthValue = (e) => {
        this.setState(()=>({
            toMonthValue: e.target.value
        }))
    }

    handleFromMonthValue = (e) => {
        this.setState(()=>({
            fromMonthValue: e.target.value
        }))
    }

    handleToYearValue = (e) => {
        this.setState(()=>({
            toYearValue: e.target.value
        }))
    }

    handleFromMonthValue = (e) => {
        this.setState(()=>({
            fromYearValue: e.target.value
        }))
    }

    componentDidUpdate()
    {
        console.log("ComponentDidUpdate    ", this.state.data)
    }

    render()
    {

        return(
        <div>
            <button onClick={this.handleMonthClicked} >Get Month Wise</button>
            {
                this.state.monthClicked && <select value = {this.renderMonths} onChange={(this.handleFromMonthValue)}> 
            
            <option value={"01"}>01</option>
            
            </select>

                

            }
            <button onClick={this.handleSkillClicked} >Get Skill Wise</button>
            {
               this.state.skillClicked &&
               <select value={this.state.skill} onChange={this.handleSkill} >
            <option value={"javascript"}>Javascript</option>
            <option value={"java"}>Java</option>
            <option value={"python"}>Python</option>
            <option value={"mern"}>MERN</option>
            <option value={"mean"}>MEAN</option>
            <option value={"react"}>React</option>
            </select>
           }
            <button onClick={this.handleCareerClicked} >Get CF Level Wise</button> 
            { 
            this.state.careerClicked &&
            <select value={this.state.career_level} onChange={this.handleCareerLevel} >
            <option value={12}>12</option>
            <option value={11}>11</option>
            <option value={10}>10</option>
            <option value={9}>9</option>
            <option value={8}>8</option>
            </select>
           }
           {console.log("Inside table ",this.state.data)}
           {this.state.data.length!== 0 && 
            <table className="App">
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
                {this.state.data.map((db,i) => {return(
                                    
                                    <tr key={i}>
                                    <td>{db._id}</td>
                                    
                                    <td>{db.career_level}</td>
                                    <td>{db.years_of_exp}</td>
                                    <td>{db.acc_onboard_date}</td>
                                    <td>{db.client_onboard_date}</td>
                                    <td>{db.acc_leaving_date}</td>
                                    <td>{db.client_leaving_date}</td>
                                    <td>{db.primary_skill}</td>
                                    <td>{db.sub_skill}</td>
                                    <td>{db.background_verification_status}</td>
                                    
                            </tr>) } )}
                            <tr>
                            <td><button onClick={this.writeData}>Download Excel</button></td>
                            </tr>
                </tbody>        
        </table> 
           
           }


        </div>
        )
    }
}