import { Link } from "react-router-dom"
import "./index.css"
const Header =()=>{
    console.log("header")
    return <nav className="header">
        <Link to="login"><img alt="logo"/></Link>
        <ul className="list">
           
           <li>
            <Link to="adduser">add-new-user</Link> 
           </li>
           <li>
            <Link to="dashboard">DashBoard</Link>
             
           </li>
        </ul>
       
    </nav>
}

export default Header