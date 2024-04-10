import "../styles/App.css";
import Swal from 'sweetalert2';

const signup = async()=>{
  const user = {
    username:document.querySelector('#signupUsername').value,
    password:document.querySelector('#signupPassword').value,
    email:document.querySelector('#signupEmail').value,
  };
 const request =  await fetch('http://localhost:8080/auth/signup',
  {method:"POST",
  headers: {
    "Content-Type": "application/json",
  },
  body:JSON.stringify(user)});
  const response = await request.json();
  let icon = "success";
  if (response.statuscode !== 200){
    icon = "error"
  }
  Swal.fire({
    title:response.status,
    text:response.data.result,
    icon:icon,
    showConfirmButton:false
  });
}
const text = "Signup"
export function Signup() {
  return (
    <>
    <div className="App">
        <h1>
          <code>{text}</code>
        </h1>
        
          <input id="signupEmail" name="email" placeholder="email..."></input>
          <br />
          <input id="signupUsername" name="username" placeholder="username..."></input>
          <br />
          <input id="signupPassword" name="password" placeholder="password..."></input>
          <br />
          <button type="submit" onClick={signup}>Signup</button>
        
    </div>
    </>
  );
}
