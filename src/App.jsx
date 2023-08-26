import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CollectDetail from "./Components/Collectdetails"; // Import your component
import SecondPage from "./AllRoutes/SecondPage"; // Import your component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CollectDetail />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </Router>
  );
}

export default App;
