import { Link } from "react-router-dom"
import "./index.css"
const HeaderSecond =()=>{
    console.log("header")
    return <nav className="header">
        
        <Link to="login"><img alt="logo"/></Link>
        <ul className="list">
           
           <li>
            <Link to="password">reset pass</Link> 
           </li>
           <li>
           <Link to="login">Logout</Link>
             
           </li>
        </ul>
       
    </nav>
}

export default HeaderSecond