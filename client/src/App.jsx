import './styles/App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import { AuthenticatePage } from './pages/Authenticate';
import {MyPagePage} from './pages/MyPage';
import { HomePage } from './pages/Home';
import { AnimalsPage } from './pages/Animals';

const getData = async (url) => {
  const data = await fetch(url, {credentials:"include"});
  const json = await data.json();
  return json;
};
const raw = await getData('http://localhost:8080/user');
let user = raw.statuscode === 200 ? raw.data.user : null;

function App(){
return(
  <Router>

    <Routes>
      <Route path='/' element={<HomePage user={user} />}/>  
      <Route path='/login' element={<AuthenticatePage user={user} />}/>
      <Route path='/mypage' element={<MyPagePage  user={user} />}/>
      <Route path='/animals' element={<AnimalsPage user={user} />}/>
    </Routes>

  </Router>
)

}

export default App;