import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./pages/Country";
import Navbar from "./components/Navbar";

function App() {
  return <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/country" element={<Country />}></Route>
      </Routes>
    </div >
  </BrowserRouter>
}

export default App;
