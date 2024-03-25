import logo from "./logo.svg";
import './styles/Header.css'
function Header(){
    return(
        <header className="header">
            <nav>
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="#">My page</a></li>
                    <li><a href="#">ITEM 1</a></li>
                    <li><a href="#">ITEM 2</a></li>
                    <li><a href="#">ITEM 3</a></li>
                    <li id="nav-logo"><img src={logo} className="Header-logo" alt="logo"/></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;