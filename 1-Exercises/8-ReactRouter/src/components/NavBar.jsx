import './NavBar.css'
// import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return(<nav>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
    </nav>)
}

export default NavBar;