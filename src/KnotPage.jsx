import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { KnotIndex } from "./KnotIndex";

export function KnotPage() {
  const [knots, setKnots] = useState([]);

  const handleKnotIndex = () => {
    axios
      .get("http://localhost:3000/knots.json")
      .then((response) => {
        console.log(response.data);
        setKnots(response.data);
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };

  useEffect(handleKnotIndex, []);

  return (
    <div>
      <KnotIndex knots={knots} />
    </div>
  );
}
