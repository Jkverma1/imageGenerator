import React from "react";
import { Link } from "react-router-dom";

const ImageListComponent = ({ images }) => {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {images.map((image) => (
        <div key={image.id} style={{ margin: "10px" }}>
          <Link to={`/image/${image.id}`} style={{ textDecoration: "none" }}>
            <img
              src={image.urls.small}
              alt={image.alt_description}
              style={{ width: "200px", height: "auto", borderRadius: "5px" }}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ImageListComponent;
