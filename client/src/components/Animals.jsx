import { Card } from "./Card";
import Swal from 'sweetalert2';
import placeholder from './placeholder.png'
import {getJson} from './getJson';
import { BreedsModal } from "./BreedsModal";

let breeds = await getJson('http://localhost:8080/breeds');
breeds = breeds.data.result;

const func = async (species, username)=>{
    let pet = {};
    pet.species = species;
    pet.user = username;
    BreedsModal.show("#dog");
     
    // pet.name = prompt('What name?');
    // pet.birthday = prompt('What birthday?');
    // pet.weight = prompt('How much weight?');
    
    console.log(pet)
    Swal.fire({icon:"success",
        showConfirmButton:false,
        timer:1000
    });
};

export const Animals = (props)=>{
    return(
    <div className="App">

        <BreedsModal breeds={breeds} modalId="dog"/>

    <h1><code>Register a new Pet?</code></h1>
    <Card cardAlt="Picture of a cat" cardUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"/>
    <Card func={()=>{func("dog", props.user.username)}} cardAlt="Picture of a dog" cardUrl="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"/>
    <Card cardAlt="Picture for choosing 'other' pet type" cardUrl={placeholder} />

    <h1><code>Your pets</code></h1>
    </div>)
}