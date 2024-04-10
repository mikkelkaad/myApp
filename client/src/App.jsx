import './styles/App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import { Login } from './pages/Login';
import {MyPage} from './pages/MyPage';
import { Home } from './pages/Home';
import { Animals } from './pages/Animals';

function App(){
return(
  <Router>

    <Routes>

      <Route path='/' element={<Home />}/>  
      <Route path='/login' element={<Login />}/>
      <Route path='/mypage' element={<MyPage />}/>
      <Route path='/animals' element={<Animals />}/>

    </Routes>

  </Router>
)

}

export default App;