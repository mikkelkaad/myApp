import '../styles/App.css';
import {Header} from '../components/Header';
import { Admin } from '../components/Admin';
const redirect = (path)=>{
    window.location.href = "./#/" + path;
}

export const AdminPage = (props)=>{
    return (
        <>
        <Header user={props.user} active="admin" />
        {
        props.user?.role === "Admin" ? <Admin user={props.user} /> : redirect("login")
        }   
        </>
    )
}