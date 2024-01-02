
const Inputs = ({ firstName, setFirstName, lastName, setLastName, age, setAge }) => {
  return (
    <div className="inputs">
      <input
        id="firstName"
        type="name"
        placeholder="vardas"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <input
        id="lastName"
        type="name"
        placeholder="pavardė"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <input
        id="age"
        type="number"
        placeholder="amžius"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
    </div>
  );
};

export default Inputs;