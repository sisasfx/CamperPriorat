import {Routes, Route} from "react-router-dom"
import { NavBar } from "./components/navbar";
import { Footer } from "./components/footer";
import Landing from "../src/pages/landing.jsx";
import Market from "../src/pages/market.jsx";
import Renting from "../src/pages/renting.jsx"

function App() {
  return (
    <div className="App">
      <NavBar/>
        <Routes>
          <Route element={<Landing/>} path="/"/>
          <Route element={<Market/>} path="/market"/>
          <Route element={<Renting/>} path="/renting"/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
