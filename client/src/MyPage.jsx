import "./styles/App.css";

const getData = async (url) => {
    const data = await fetch(url);
    const json = await data.json();
    return json;
  };
const raw = await getData('http://localhost:8080/user');
const user = raw.data.user;
function MyPage() {
    return (
      <div className="App">
          <h1>
            <code>My Page</code>
          </h1>      
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Password: *****</p>
      </div>
    );
  }
  
  export default MyPage;