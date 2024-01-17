import React from "react";
import SriLankaMap from "./components/SriLankaMap";
import World from "./components/World";
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