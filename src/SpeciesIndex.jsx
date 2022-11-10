import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { SpeciesDisplay } from "./SpeciesDisplay";

export function SpeciesIndex() {
  const [species, setSpecies] = useState([]);

  const handleSpeciesIndex = () => {
    axios
      .get("http://localhost:3000/species.json")
      .then((response) => {
        console.log(response.data);
        setSpecies(response.data);
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };

  useEffect(handleSpeciesIndex, []);

  return (
    <div>
      <SpeciesDisplay species={species} />
      <Modal />
    </div>
  );
}
