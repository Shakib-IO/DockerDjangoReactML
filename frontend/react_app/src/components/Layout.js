import React from "react";
import TopBar from "./TopBar" ;
import Footer from "./Footer" ;

import CssBaseline from '@material-ui/core/CssBaseline' ;

{/*  
    'props.children' -> This is what would retrieve the content of the 
    page passed as props to the Layout function and display it in 
    between the TopBar and the Footer.
*/}

function Layout(props){
    return(
        <React.Fragment>
            <CssBaseline/>
            <TopBar {...props} />
            <div>
                { props.children }
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default Layout