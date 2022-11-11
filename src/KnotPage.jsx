import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { KnotIndex } from "./KnotIndex";
import { KnotShow } from "./KnotShow";

export function KnotPage() {
  const [knots, setKnots] = useState([]);
  const [isKnotVisible, setIsKnotVisible] = useState(false);
  const [currentKnot, setCurrentKnot] = useState({});

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

  const handleShowKnot = (knot) => {
    setIsKnotVisible(true);
    setCurrentKnot(knot);
  };

  const handleHideKnot = () => {
    setIsKnotVisible(false);
  };

  return (
    <div>
      <KnotIndex knots={knots} onSelectKnot={handleShowKnot} />
      <Modal show={isKnotVisible} onClose={handleHideKnot}>
        <KnotShow knot={currentKnot} />
      </Modal>
    </div>
  );
}
