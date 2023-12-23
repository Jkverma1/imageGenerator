import React from "react";
import { useParams } from "react-router-dom";

const ImageDetailComponent = () => {
  const { id } = useParams();
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <p style={{ fontSize: "20px" }}>Image Detail Component - {id}</p>
    </div>
  );
};

export default ImageDetailComponent;
