import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { Home } from "./Home";
import { EntryIndex } from "./EntryIndex";
import { NewEntry } from "./NewEntry";
import { LatestEntry } from "./LatestEntry";
import { Header } from "./Header";
import { SpeciesIndex } from "./SpeciesIndex";
import { SpeciesShow } from "./SpeciesShow";
import { KnotPage } from "./KnotPage";
import { LandingMap } from "./LandingMap";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/entryindex" element={<EntryIndex />} />
          <Route path="/newentry" element={<NewEntry />} />
          <Route path="/lastentry" element={<LatestEntry />} />
          <Route path="/species" element={<SpeciesIndex />} />
          <Route path="/knots" element={<KnotPage />} />
          <Route path="/map" element={<LandingMap />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
