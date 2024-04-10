import logo from "../logo.svg";
import '../styles/Header.css'
const Header =()=>{
    return(
        <header className="header">
            <nav>
                <ul>
                    <li><a href="/#">HOME</a></li>
                    <li><a href="/#/animals">Animals</a></li>
                    <li><a href="/#/mypage">My page</a></li>
                    <li><a href="/#/login">Login/Signup</a></li>
                    <li id="nav-logo"><img src={logo} className="Header-logo" alt="logo"/></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;