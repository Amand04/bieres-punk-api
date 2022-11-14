import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import "./App.css";
import Beer from "./pages/Beer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/:pageNumber" element={<Home />} />
            <Route path="/beers/:id" element={<Beer />} />
          </Routes>
        </BrowserRouter>
      </header>
      <Footer />
    </>
  );
}

export default App;
