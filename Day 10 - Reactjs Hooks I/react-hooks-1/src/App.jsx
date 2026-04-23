import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [BMI, setBMI] = useState("");
  const [bmiCategory, setBmiCategory] = useState("");
  const [color, setColor] = useState("");
  const [show, setShow] = useState(false);

  function handleNameChange(event) {
    const value = event.target.value;
    setName(value);
  }

  function handleAgeChange(event) {
    const value = event.target.value;
    setAge(value);
  }

  function handleWeigthChange(event) {
    const value = event.target.value;
    setWeight(value);
  }

  function handleHeightChange(event) {
    const value = event.target.value;
    setHeight(value);
  }

  function calBMI(event) {
    event.preventDefault();
    const height_m = height / 100;
    let result = weight / height_m ** 2;
    result = result.toPrecision(3);
    setBMI(result);

    if (result < 18.5) {
      setBmiCategory("Underweight");
      setColor("#ffa600");
    } else if (result < 25) {
      setBmiCategory("Normal weight");
      setColor("#00b894");
    } else if (result > 30) {
      setBmiCategory("Overweight");
      setColor("#fdcb6e");
    } else {
      setBmiCategory("Obese");
      setColor("#d63031");
    }

    setShow(true);
  }

  return (
    <div className="container">
      <h1 className="title">BMI Calculator</h1>

      <div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            id="name"
            required
            onChange={handleNameChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            value={age}
            id="age"
            required
            onChange={handleAgeChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="weight">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            id="weight"
            required
            onChange={handleWeigthChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="height">Height (cm)</label>
          <input
            type="number"
            value={height}
            id="height"
            required
            onChange={handleHeightChange}
          />
        </div>

        <button onClick={calBMI}>Caculate BMI</button>
      </div>

      {show && (
        <div className="result" style={{ borderLeftColor: color }}>
          <h3>
            Result for <span>{name}</span>
          </h3>
          <p className="bmi-value">{BMI}</p>
          <p className="category">{bmiCategory}</p>
        </div>
      )}
    </div>
  );
};

export default App;
