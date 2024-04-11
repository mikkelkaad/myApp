import "../styles/App.css";
import Header from "../components/Header";

// const getData = async (url) => {
//     const data = await fetch(url, {credentials:"include"});
//     const json = await data.json();
//     return json;
//   };
// const raw = await getData('http://localhost:8080/user');
// const user = raw.data.user;
export function MyPage(props) {
    return (
      <>
      <Header />
      <div className="App">
          <h1>
            <code>My Page</code>
          </h1> 
          {props.user ? 
          <>     
        <p>Username: {props.user.username}</p>
        <p>Email: {props.user.email}</p>
        <p>Password: *****</p>
        </>
        :
        <>     
        <p>Not logged in</p>
        </>
        }
      </div>
      </>
    );
  }
  
  // export default MyPage;