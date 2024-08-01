import React, { useState } from "react";

const AnimalCard = ({ animal, onCountChange, total }) => {
  const [count, setCount] = useState(0);
  let operation = 0;

  const handleIncrement = () => {
    operation = 0;
    let newCount = count + 1;
    let newTotal = total + animal.unitValue;
    if (newTotal <= 15) {
      setCount(newCount);
      let val = animal.unitValue;
      onCountChange(val, operation);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      operation = 1;
      let newCount = count - 1;
      setCount(newCount);
      let val = animal.unitValue;
      onCountChange(val, operation);
    }
  };

  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 my-2 w-full max-w-md">
      <div className="flex items-center">
        <img
          src={animal.imageUrl}
          alt={animal.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="font-bold text-lg">{animal.name}</h3>
          <p className="text-gray-600">{animal.unitValue} unit value</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          className="bg-teal-200 text-teal-700 px-3 py-1 rounded-l"
          onClick={handleDecrement}
        >
          -
        </button>
        <span className="px-4 py-1 bg-teal-100">{count}</span>
        <button
          className="bg-teal-200 text-teal-700 px-3 py-1 rounded-r"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default AnimalCard;
