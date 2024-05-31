import '../styles/Header.css';
import placeholder from './placeholder.png';

export const Header = (props)=>{
    return(
        <div className="topnav">
            
               
                    <a href="/#" id="nav-home" className={props.active === "home" ? "active" : "" } >HOME</a>  
                    
                    {
                    props.user 
                    ? <><a href="/#/mypage" id="nav-mypage" className={props.active === "mypage" ? "active" : "" }>PROFILE</a><a href="/#/animals" id="nav-animals" className={props.active === "animals" ? "active" : "" }>PETS</a>
                    {props.user.role === "Admin" ? <a href='/#/admin' id="admin-page" className={props.active === "admin" ? "active" : ""} >ADMIN</a> : ""} 
                    </>
                    : <a href="/#/login" id="nav-login" className={props.active === "login" ? "active" : "" }>LOGIN</a>
                    }

                    <img src={placeholder} className="Header-logo" alt="logo"/>
              
        
        </div>
        
    );
};