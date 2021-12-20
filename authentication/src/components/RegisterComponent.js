// import {BrowserRouter as Router,Route, Switch, Link} from "react-router-dom";
// import LoginComponent from "./LoginComponent";
export default function RegisterComponent(){
    const title = "Register";
    return(
    <div>
    <h2>{title}</h2>
    <dl>
    <dt>User Id</dt>
    <dd>
    <input type="email" />
    </dd>
    <dt>Password</dt>
    <dd>
    <input type="password" />
    </dd>
    <dt>Confirm Password</dt>
    <dd>
    <input type="password" />
    </dd>
    </dl>
    <button>Login</button>
    </div>
    )
    }
    