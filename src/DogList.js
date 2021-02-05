import React from "react";
import { Link } from "react-router-dom";

function DogList({ dogs }) {
  return (
    <div className="DogList">
      <h1>Check out the dogs!!!</h1>
      <div className="dogs">
        {dogs.map((d) => (
          <div className="dog" key={d.name}>
            <img src={d.src} />
            <h2>
              <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
