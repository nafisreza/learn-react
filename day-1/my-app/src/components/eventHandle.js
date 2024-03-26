import { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  const handleClick = () => {
    setColor("green")
  }

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button onClick={handleClick}>Click</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FavoriteColor />);
