import React from "react";
import GalleryCard from "./gallery-card";

const GalleryPage = (images) => {
  return (
    <section className="gallery-page pt-120 pb-120">
      <div className="container">
        <div className="gallery-3-col">
        {images.images.map((image, index) => (
          <GalleryCard image={image} key={index}/>
        ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
