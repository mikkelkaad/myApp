import { Card } from "./Card";
import placeholder from './placeholder.png'
import {getJson} from './getJson';
import { BreedsModal } from "./BreedsModal";

let breeds = await getJson('http://localhost:8080/breeds');
breeds = breeds.data.result;
let dogBreeds = breeds.filter((breed)=>{return breed.SpeciesId === 2});
let catBreeds = breeds.filter((breed)=>{return breed.SpeciesId === 1});
let otherBreeds = breeds.filter((breed)=>{return breed.SpeciesId !== 1 && breed.SpeciesId !== 2});
let pet = {};

const registerPet = async (species, username)=>{
    pet.species = species;
    pet.user = username;
    BreedsModal.show("#"+species);
};

export const Animals = (props)=>{
    return(
    <div className="App">

        <BreedsModal breeds={dogBreeds} pet={pet} modalId="dog"/>
        <BreedsModal breeds={catBreeds} pet={pet} modalId="cat"/>
        <BreedsModal breeds={otherBreeds} pet={pet} modalId="other"/>

    <h1><code>Register a new Pet?</code></h1>
    <Card func={()=>{registerPet("cat",props.user.username)}}  cardAlt="Picture of a cat" cardUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"/>
    <Card func={()=>{registerPet("dog", props.user.username)}} cardAlt="Picture of a dog" cardUrl="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"/>
    <Card func={()=>{registerPet('other',props.user.username)}} cardAlt="Picture for choosing 'other' pet type" cardUrl={placeholder} />

    <h1><code>Your pets</code></h1>
    </div>)
}