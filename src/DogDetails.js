import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";

function DogDetails({ dogs }) {
  const { name } = useParams();

  if (name) {
    const dog = dogs.find((d) => d.name.toLowerCase() === name.toLowerCase());
    if (dog) {
      return (
        <div className="DogDetails">
          <h1>{dog.name}</h1>
          <img src={dog.src} />
          <p>Age: {dog.age}</p>
          <ul>
            {dog.facts.map((f) => (
              <li>{f}</li>
            ))}
          </ul>
          <Link to="/dogs">Go Back</Link>
        </div>
      );
    } else {
      return <Redirect to="/dogs" />;
    }
  } else {
    return <Redirect to="/dogs" />;
  }
}

export default DogDetails;
