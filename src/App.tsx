import React from "react";
 import SriLankaMap from "./Compenets/SriLankaMap";
import World from './Compenets/World';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

function App() {
return(
//   <div className="App">
// <header className="App-header">
// {/* <h1 style={{position:"absolute", top:"110%",left:"60%"}}>Sri Lanka</h1> */}
// </header>
// <main>
//    <World />
// </main>
//   </div>
 <Router>
  <Routes>
    <Route path="/" element={<World />} />
    <Route path="/SriLanka" element={<SriLankaMap />}/>
  </Routes>
</Router>
);
}

export default App;