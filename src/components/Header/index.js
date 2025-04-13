import { Link } from "react-router-dom"
import "./index.css"
const Header =()=>{
    console.log("header")
    return <nav className="header">
        <Link to="login"><img className="logo-img" src="https://res.cloudinary.com/delrn2vxa/image/upload/v1744529006/images_tj93cl.jpg" alt="logo" /></Link>
        <ul className="list">
           
           <li>
            <Link to="adduser">add-new-user</Link> 
           </li>
           <li>
            <Link to="login">Logout</Link>
             
           </li>
        </ul>
       
    </nav>
}

export default Header