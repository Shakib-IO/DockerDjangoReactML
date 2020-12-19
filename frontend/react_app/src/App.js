import React from "react" ;
import Urls from "./Urls" ;
import Layout from './components/Layout' ;
// This <Urls/> represent the component
function App() {
  return (
    <div className="App">
     <Layout>
       <Urls/>
     </Layout>
    </div>
  );
}

export default App;
