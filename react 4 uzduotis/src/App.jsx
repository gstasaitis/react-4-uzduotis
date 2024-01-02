import React, { useState } from "react";
import Table from "./components/Table";
import Inputs from "./components/Inputs";
import Buttons from "./components/Buttons";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useState([]);

  return (
    <>
      <h1>Append Table</h1>
      <Inputs
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        age={age}
        setAge={setAge}
      />
      <Buttons
        data={data}
        setData={setData}
        firstName={firstName}
        lastName={lastName}
        age={age}
      />
      <Table data={data} />
    </>
  );
}

export default App;