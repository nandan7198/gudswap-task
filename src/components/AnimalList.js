import React, { useState, useEffect } from "react";
import AnimalCard from "./AnimalCard";
import ProgressBar from "./ProgressBar";

const AnimalsList = () => {
  const [animals, setAnimals] = useState([]);
  const [totalUnits, setTotalUnits] = useState(0);

  const handleCountChange = (newVal, operation) => {
    if (operation === 1) {
      setTotalUnits(totalUnits - newVal);
    } else {
      setTotalUnits(totalUnits + newVal);
    }
  };

  const handleReload = () => {
    window.location.reload();
  };

  useEffect(() => {
    fetch("animals.json")
      .then((response) => response.json())
      .then((data) => setAnimals(data.animals));
  }, []);

  return (
    <div className="container mx-auto">
      <ProgressBar units={totalUnits} />
      <div className="mt-3 flex flex-col items-center">
        {animals.map((animal) => (
          <>
            <AnimalCard
              animal={animal}
              onCountChange={handleCountChange}
              total={totalUnits}
            />
          </>
        ))}
      </div>
      <div className="text-center mt-6">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={handleReload}
        >
          RESET
        </button>
        <p className="mt-4 text-lg font-bold">Total Units = {totalUnits}</p>
      </div>
    </div>
  );
};

export default AnimalsList;
