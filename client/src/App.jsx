import './styles/App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import { Login } from './pages/Login';
import {MyPage} from './pages/MyPage';
import { Home } from './pages/Home';
import { Animals } from './pages/Animals';

const getData = async (url) => {
  const data = await fetch(url, {credentials:"include"});
  const json = await data.json();
  return json;
};
const raw = await getData('http://localhost:8080/user');
let user;
user = raw.statuscode === 200 ? raw.data.user : null;

function App(){
return(
  <Router>

    <Routes>

      <Route path='/' element={<Home />}/>  
      <Route path='/login' element={<Login />}/>
      <Route path='/mypage' element={<MyPage  user={user} />}/>
      <Route path='/animals' element={<Animals />}/>
    </Routes>

  </Router>
)

}

export default App;