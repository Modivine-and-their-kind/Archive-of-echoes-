import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubmitPage from "./pages/SubmitPage";
import WhispersPage from "./pages/WhispersPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<SubmitPage />} />
        <Route path="/whispers" element={<WhispersPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);