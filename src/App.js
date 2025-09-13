import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import "./App.css";

function App() {
  return (
    <>
      <Routes>        
        <Route path="*" element={<Portfolio />} />
      </Routes>      
    </>
  );
}

export default App;
