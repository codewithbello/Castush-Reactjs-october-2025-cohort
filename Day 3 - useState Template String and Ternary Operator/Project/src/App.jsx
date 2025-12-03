import { useState } from "react";

function App() {
  const [name, setName] = useState("Ali Dodo");
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    if (toggle === true) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <div>
      <h1>Learn useState and Ternary Operator</h1>

      <p>{`Welcome back ${name}`}</p>

      <div
        className="box"
        style={{ backgroundColor: toggle === true ? "orange" : "red" }}
      ></div>

      <button onClick={handleToggle}>Change Colour</button>
    </div>
  );
}

export default App;
