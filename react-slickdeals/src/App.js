import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((res) => {
        return res.json();
      })
      .then((result) => setData(result));
  }, []);

  return (
    <div className="slickdeal-container">
      {data.map((i) => {
        return (
          <div key={i.id} className="item-image">
            <img src={i.imagePath} alt={i.name} id={i.id} />
            <div id={i.id}>{i.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
