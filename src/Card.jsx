import React, { useState } from "react";
import img from "../src/image/1.jpg";
import img2 from "../src/image/2.jpg";
import img3 from "../src/image/3.jpg";
import img4 from "../src/image/26.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const Card = () => {

 
  const [old, newone] = useState(img);


  const changeImage = () => {
    if (old === img) {
      newone(img2);
    } else {
      old(img);
    }
  };

  const data = [
    { id: 1, name: "Price", father_name: "200$", pic: img },
    { id: 2, name: "Price", father_name: "210$", pic: img2 },
    { id: 3, name: "Price", father_name: "120$", pic: img3 },
    { id: 4, name: "Price", father_name: "180$", pic: img4 },
  ];
  return (
    <div className="display-flex ">
      {data.map((it) => (
        <>
          <div>
            <div key={it.id}>
              <img
                src={it.pic}
                className=" image-card mt-4  "
                onClick={changeImage} 
              ></img>
              <p className="text-center  mt-3 ">{it.red}</p>
              <p className="text-center mt-4 text  ">{it.name}</p>
              <p className="text-center text mb-3 ">{it.father_name}</p>
              <button className="btn btn-outline-primary text-center btn-sm text-light ">
                click for order
              </button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Card;
