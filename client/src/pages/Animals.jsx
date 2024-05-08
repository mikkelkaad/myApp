import '../styles/App.css';
import {Header} from '../components/Header';
import { Animals } from '../components/Animals';

export const AnimalsPage = (props)=>{
    return (
        <>
        <Header user={props.user} active="animals" />
        <Animals user={props.user}/>
        </>
    )
}