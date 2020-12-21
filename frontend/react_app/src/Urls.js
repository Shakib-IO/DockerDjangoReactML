import React from "react" ;
import { BrowserRouter , Route , Switch , Redirect } from "react-router-dom"

import Login from "./components/Login";
import Home from "./components/Home" ;

// A wrapper for <Route> that redirects to the login screen if you're not yet authenticated.
function PrivateRoute ({ isAuthenticated , children, ...rest}){
    return(
        <Route
            {...rest}
            render = {({ location }) =>
            isAuthenticated ? (
                children
            ) : ( 
                <Redirect
                    to = {{
                        pathname : "/login/",
                        state : {from : location }
                    }}
                />
            )
        }
    />
    );
}


{/* So basically what this is saying that if the browser route has the exact path 'login' 
in that case the Urls.js should return the Login view from the 'Login.js' file.*/}

function Urls(props) {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login/"> <Login {...props} /></Route>
                    <PrivateRoute exact path="/" isAuthenticated={props.isAuthenticated}><Home {...props}/></PrivateRoute>
                 </Switch>
            </BrowserRouter>
        </div>
    )
};

export default Urls;

