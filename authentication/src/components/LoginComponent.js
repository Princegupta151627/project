import RegisterComponent from "./RegisterComponent";
import { BrowserRouter as Router,Link, Switch }  from "react-router-dom";
export default function LoginComponent(){
    const title = "Login";
    return(
        <div>
        <div>
        <h2>{title}</h2>
        <dl>
        <dt>Email Id</dt>
        <dd>
        <input type="email" />
        </dd>
        <dt>Password</dt>
        <dd>
        <input type="password" />
        </dd>
        </dl>
        <button>Login</button>
        </div>
        {/* <Router>
        <p>Register</p>
        <Link exact to="/">Register</Link>
        <Switch>
            <Router exact path="./RegisterComponent.js" component={RegisterComponent} />
        </Switch>
    </Router> */}
    </div>
    );
    }