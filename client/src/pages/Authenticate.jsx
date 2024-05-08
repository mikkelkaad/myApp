import "../styles/App.css";
import {Header} from "../components/Header";
import { Authenticate } from "../components/Authenticate";

export const AuthenticatePage = (props) => {
  return (
    <>
    <Header user={props.user} active="login" />
    <Authenticate />
    </>
  );
}
