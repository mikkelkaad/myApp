import Swal from 'sweetalert2';

const signup = async()=>{
  const user = {
    username:document.querySelector('#inputUsername').value,
    password:document.querySelector('#inputPassword').value,
    email:document.querySelector('#inputEmail').value,
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
  }).then(()=>{
    window.location.reload();
  });
}


const login = async()=>{
  const user = {
    username:document.querySelector('#inputUsername').value,
    password:document.querySelector('#inputPassword').value,
    email:document.querySelector('#inputEmail').value,
  };
 const request =  await fetch('http://localhost:8080/auth/login',
  {method:"POST",
  headers: {
    "Content-Type": "application/json",
  },
  credentials:"include",
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
  }).then(()=>{
    window.location.reload();
  });

}


const text = "Login or Signup"
export const Authenticate = ()=> {
  return (
    <>
    <div className="App">
        <h1>
          <code>{text}</code>
        </h1>
        
          <input id="inputEmail" name="email" placeholder="email..."></input>
          <br />
          <input id="inputUsername" name="username" placeholder="username..."></input>
          <br />
          <input id="inputPassword" name="password" placeholder="password..."></input>
          <br />
          <button type="submit" onClick={signup}>Signup</button>
          <button type="submit" onClick={login}>login</button>
        
    </div>
    </>
  );
}
