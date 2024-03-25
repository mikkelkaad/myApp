import "./styles/App.css";
const getData = async (url) => {
  const data = await fetch(url);
  const text = await data.text();
  return text;
};
const login = async()=>{
  const user = {
    username:document.querySelector('#inputUsername').value,
    password:document.querySelector('#inputPassword').value
  };
 const request =  await fetch('http://localhost:8080/auth/login',
  {method:"POST",
  headers: {
    "Content-Type": "application/json",
  },
  body:JSON.stringify(user)});
  const response = await request.json();
  console.log(response);
  alert(response.statuscode + '\n' + response.data.result);
}
const text = await getData("http://localhost:8080/");
function App() {
  return (
    <div className="App">
        <h1>
          <code>{text}</code>
        </h1>      
          <input id="inputUsername" name="username" placeholder="username..."></input>
          <input id="inputPassword" name="password" placeholder="password..."></input>
          <button type="button" onClick={login}>login</button>
    </div>
  );
}

export default App;
