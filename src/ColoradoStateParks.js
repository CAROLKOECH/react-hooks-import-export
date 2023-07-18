import React from "react";
import howManyParks from "./parks/howManyParks";

function ColoradoStateParks() {
  // Call the function and store its result in a variable
  const parksCount = howManyParks(); // => "42 parks!"

  // Use the variable in the JSX to render the result along with the heading
  return (
    <div>
      <h1>Colorado State Parks!</h1>
      <p>{parksCount}</p>
    </div>
  );
}

export default ColoradoStateParks;
