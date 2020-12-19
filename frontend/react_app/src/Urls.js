import React from "react" ;
import { BrowserRouter , Route , Switch } from "react-router-dom"

import Login from "./components/Login";
import Home from "./components/Home" ;
{/* So basically what this is saying that if the browser route has the exact path 'login' 
in that case the Urls.js should return the Login view from the 'Login.js' file.*/}

function Urls(props) {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path = "/login"><Login{...props }/></Route>
                    <Route exact path = "/"><Home{...props }/></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
};

export default Urls;

