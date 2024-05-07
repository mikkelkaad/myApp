import { Card } from "./Card";
import Swal from 'sweetalert2';


const func = (x)=>{Swal.fire(x)};


export const Animals = (props)=>{
    return(
    <div className="App">

    <h1><code>Add a new Pet?</code></h1>
    <Card func={()=>{func('Cat')}} cardAlt="Picture of a cat" cardUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"/>
    <Card cardAlt="Picture of a dog" cardUrl="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"/>
    <Card cardAlt="Picture for choosing 'other' pet type" cardUrl="" />

    <h1><code>Your pets</code></h1>
    </div>)
}