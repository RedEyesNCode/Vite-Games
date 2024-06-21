import React from "react";

const DynamicGameMenuCard = ({ imageUrls }) => {
  return (
    <div className="grid grid-cols-3 gap-1">
      {imageUrls.map((url, index) => (
        <div key={index} className="m-1">
          <img
            src={url}
            className="w-[115px] h-[145px] object-fit rounded-2xl"
            alt={`game-image-${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default DynamicGameMenuCard;
