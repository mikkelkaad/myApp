import "../styles/App.css";
import Header from "../components/Header";
import { Signup } from "../components/Signup";


const login = async()=>{
  const user = {
    username:document.querySelector('#loginUsername').value,
    password:document.querySelector('#loginPassword').value
  };
  try{
 const request =  await fetch('http://localhost:8080/auth/login',
  {method:"POST",
  headers: {
    "Content-Type": "application/json",
  },
  credentials:"include",
  body:JSON.stringify(user)});
  const response = await request.json();
  console.log(response);
  alert(response.statuscode + '\n' + response.data.result);
  window.location.reload();
}catch(error){
  alert(error);
}
}


const text = "Login"
export const Login = () => {
  return (
    <>
    <Header />
    <div className="App">
        <h1>
          <code>{text}</code>
        </h1>
              
          <input id="loginUsername" name="username" placeholder="username..."></input>
          <br />
          <input id="loginPassword" name="password" placeholder="password..."></input>
          <br />
          <button type="submit" onClick={login}>Login</button>
        
    </div>
    <Signup />
    </>
  );
}

// export default Login;
