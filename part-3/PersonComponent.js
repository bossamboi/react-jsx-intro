function Person({ name, age, hobbies }) {
  return (
    <div>
      <p>
        <h2>Learn some info about this person</h2>
        <h3>{age >= 18 ? "please go vote" : "you must be 18"}</h3>
        <p>Name: {name.length > 8 ? name.slice(0, 6) : name}</p>
        <h3>Hobbies</h3>
        <ul>
          {hobbies.map((h) => (
            <li>{h}</li>
          ))}
        </ul>
      </p>
    </div>
  );
}
