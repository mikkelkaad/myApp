// import logo from "../logo.svg";
import '../styles/Header.css'
import placeholder from './placeholder.png'
export const Header = (props)=>{
    return(
        <header className="header">
            <nav>
                <ul>
                    <li><a href="/#">HOME</a></li>  
                    
                    {props.user ? <><li><a href="/#/mypage">PROFILE</a></li><li><a href="/#/animals">PETS</a></li></> : <li><a href="/#/login">LOGIN</a></li> }

                    <li id="nav-logo"><img src={placeholder} className="Header-logo" alt="logo"/></li>
                </ul>
            </nav>
        </header>
    );
};