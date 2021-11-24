import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className=" navbar" id="navbar-brand-centered">
                <ul className="nav navbar-nav navbar-left">
                
                        <li><Link to="/home">HOME</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/add-story">WriteStory</Link></li>      
                        
                </ul>

                <div className="nav-text">Story Teller</div>

                <ul className="nav navbar-nav navbar-right">
                    
                        <li><Link to="/user-stories">My Stories</Link></li>
                        <li><Link to="/profile">Hello, username!</Link></li>
                        <li><Link to="/logout">Sign Out</Link></li>               
                        <li><Link to="/login">Sign In</Link></li>
                        <li><Link to="/register">Sign Up</Link></li>

                </ul>
            </div>
    )
}

export default Navigation;
