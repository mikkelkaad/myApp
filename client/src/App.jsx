import "./styles/App.css";
const getData = async (url) => {
  const data = await fetch(url);
  const text = await data.text();
  return text;
};
const login = async (username="Hello",password="World")=>{
  const user = {username:username,password:password}
  let json = JSON.stringify(user);
  await fetch('http://localhost:8080/auth/login',{method:"POST", headers: {
    "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },body:json});
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
