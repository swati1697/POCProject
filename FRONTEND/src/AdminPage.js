import React from "react";
import {Link} from "react-router-dom";
export default class AdminPage extends React.Component
{
    render()
    {
        return(
            <div>
                <Link to='/ViewData'>  <button>View data</button> </Link>
                <Link to='/AddData'><button >Upload Excel Data to DB</button></Link>
                
            </div>
        )
    }
}