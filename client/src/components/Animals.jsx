import { YourPets } from "./YourPets";
import { NewPets } from "./NewPets";

export const Animals = (props)=>{
    return(
    <div className="App">
        <YourPets user={props.user} />
        <NewPets user={props.user} />
    </div>)
}