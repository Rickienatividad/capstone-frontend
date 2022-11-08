import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { Home } from "./Home";
import { EntryIndex } from "./EntryIndex";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/entryindex" element={<EntryIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
