import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { Home } from "./Home";
import { EntryIndex } from "./EntryIndex";
import { NewEntry } from "./NewEntry";
import { LatestEntry } from "./LatestEntry";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/entryindex" element={<EntryIndex />} />
        <Route path="/newentry" element={<NewEntry />} />
        <Route path="/lastentry" element={<LatestEntry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
