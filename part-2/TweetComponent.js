function Tweet({ username, name, date, message }) {
  const cssObject = {
    color: "white",
    backgroundColor: "blue",
  };

  return (
    <div style={cssObject}>
      <p> {message}</p>
      <div>
        <p>
          @{username}, {name}, {date}
        </p>
      </div>
    </div>
  );
}
