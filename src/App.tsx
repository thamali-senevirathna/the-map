import React from "react";
import SriLankaMap from "./components/SrilankanMap/SriLankaMap";
import World from "./components/WorldMap/World";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

 function App() {
  return (
<Router>
  <Routes>
    <Route path="/" element={<World />} />
    <Route path="/SriLanka" element={<SriLankaMap />} />
  </Routes>
</Router>
  );
}
export default App;