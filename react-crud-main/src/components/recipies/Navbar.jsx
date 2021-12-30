import React from 'react'
import mylogo from '../../images/chef.png';
import { Link } from "react-router-dom";


export default function Navbar() {
  
    return (
        <div class="nav-menu">
        <div class="nav-img"> <img src={mylogo} alt=""/></div>
        <ul>
            <li> <Link to="/">Home</Link> </li>
            <li><Link to="/recipies/create">Add New Items</Link></li>
            <li><Link to="/register">Add New Admin</Link></li>

         
        </ul>
     
        </div>
    )
}
