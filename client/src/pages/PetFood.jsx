import '../styles/App.css';
import {Header} from '../components/Header';
import { PetFood } from '../components/PetFood';

export const PetFoodPage = (props)=>{
    return (
        <>
        <Header user={props.user} active="food" />
        {props.user ? <PetFood user={props.user} /> : <></>}       
        </>
    )
}