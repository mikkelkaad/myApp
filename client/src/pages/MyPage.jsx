import "../styles/App.css";
import {Header} from "../components/Header";
import { MyPage } from "../components/MyPage";

export function MyPagePage(props) {
    return (
      <>
      <Header user={props.user}/>
      <MyPage user={props.user}/>
      </>
    );
  }