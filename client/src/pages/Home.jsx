import '../styles/App.css';
import Header from '../components/Header';

const getData = async (url) => {
    const data = await fetch(url);
    const text = await data.text();
    return text;
  };
  const text = await getData("http://localhost:8080/");
export const Home = ()=>{
    return(
    <>
    <Header />
    <div className="App">
        <h1><code>{text}</code></h1>
    </div>
    </>
    )
}