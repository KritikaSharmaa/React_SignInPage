import './Navbar.css';
import logo from './logo.png';
import {NavLink} from 'react-router-dom';
const Navbar=()=>{
    return(<>
        <div className="Navigation_block">
            <div className="block1">
            <NavLink to ="/" className="Back">&#x2190;Back</NavLink> 
            <NavLink to="/Home" className="HomePage">Home</NavLink>
            </div>
            <img src={logo} alt="logo" className="Mylogo"/>
        </div>
    </>);
};

export default Navbar;