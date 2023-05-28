import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Intro Blog</h1>
            <ul className="nav-list">
                <li><Link to="/" className="link">Home</Link></li>
                <li><Link to="/create"className="link button-styled-link">New Blog</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;