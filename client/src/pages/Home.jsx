import '../styles/App.css';
import {Header} from '../components/Header';
import {Home} from '../components/Home';

export const HomePage = (props)=>{
    return(
    <>
        <Header user={props.user}/>
        <Home user={props.user}/>
    </>
    )
}