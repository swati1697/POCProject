import React from "react";
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import TextField from '@mui/material/TextField';

export default class Test extends React.Component{
    
    constructor(props)
    {
        super(props);
        this.state = {
            date: 0
        }
    }

    handleChange =(e) => {
        this.setState(()=>({
            date:e.target.value
        }))
        console.log(this.state.date);
    }
    
    render()
    {
        return(<input type="date" value={this.value} onChange={this.handleChange} />)
    }
}