import '../styles/App.css';
import Header from '../components/Header';
import { Card } from '../components/Card';

export const Animals = ()=>{
    return (
        <>
        <Header />
        <div className="App">
        <h1><code>Animals</code></h1>
        <Card cardAlt="Picture of a cat" cardUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"/>
        <Card cardAlt="Picture of a dog" cardUrl="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"/>
        </div>
        </>
    )
}