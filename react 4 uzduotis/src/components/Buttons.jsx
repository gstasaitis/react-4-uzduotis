import React from "react";

const Buttons = ({ data, setData, firstName, lastName, age, setFirstName, setLastName, setAge }) => {
  const handleAdd = () => {
    if (firstName && lastName && age > 0) {
      const newRow = {
        firstName: firstName,
        lastName: lastName,
        age: age,
      };
      setData([...data, newRow]);

      // Clear inputs
      setFirstName("");
      setLastName("");
      setAge("");
    } else if (age <= 0) {
      alert("Pataisykite amžių");
    } else {
      alert("Užpildykite visus langelius");
    }
  };

  const handleRemoveFirst = () => {
    if (data.length > 0) {
      const newData = [...data];
      newData.shift();
      setData(newData);
    } else {
      alert("Nėra duomenų ištrynimui");
    }
  };

  const handleRemoveLast = () => {
    if (data.length > 0) {
      const newData = [...data];
      newData.pop();
      setData(newData);
    } else {
      alert("Nėra duomenų ištrynimui");
    }
  };

  return (
    <div>
      <div className="buttons">
        <button onClick={handleAdd}>Pridėti</button>
        <button onClick={handleRemoveFirst}>Ištrinti pirmą</button>
        <button onClick={handleRemoveLast}>Ištrinti paskutinį</button>
      </div>
    </div>
  );
};

export default Buttons;