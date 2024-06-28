import '../styles/App.css';
import {Header} from '../components/Header';
import { PetFood } from '../components/PetFood';
import { FoodFilter } from '../components/FoodFilter';

export const PetFoodPage = (props)=>{
    return (
        <>
        <Header user={props.user} active="food" />
        <FoodFilter />
        {props.user ? <PetFood user={props.user} /> : <></>}       
        </>
    )
}