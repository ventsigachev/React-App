import './Navigation.css';

const Navigation = () => {
    return (
        <div className=" navbar" id="navbar-brand-centered">
                <ul className="nav navbar-nav navbar-left">
                
                        <li><a href="{% url 'story home' %}">HOME</a></li>
                        <li><a href="{% url 'story about' %}">About Us</a></li>
                        <li><a href="{% url 'story contact' %}">Contact Us</a></li>
                        <li><a href="{% url 'story create' %}">WriteStory</a></li>      
                        
                </ul>

                <div className="nav-text">Story Teller</div>

                <ul className="nav navbar-nav navbar-right">
                    
                        <li><a href="{% url 'admin:index' %}">My Stories</a></li>
                        <li><a href="{% url 'user profile' %}">Hello, username!</a></li>
                        <li><a href="{% url 'logout' %}">Sign Out</a></li>               
                        <li><a href="{% url 'login' %}">Sign In</a></li>
                        <li><a href="{% url 'user signup' %}">Sign Up</a></li>

                </ul>
            </div>
    )
}

export default Navigation;
