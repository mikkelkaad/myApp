import './styles/App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import {getJson} from './components/getJson';
import { AuthenticatePage } from './pages/Authenticate';
import {MyPagePage} from './pages/MyPage';
import { HomePage } from './pages/Home';
import { AnimalsPage } from './pages/Animals';


const raw = await getJson('http://localhost:8080/user');
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