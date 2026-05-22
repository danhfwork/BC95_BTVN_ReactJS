import React from "react";

const GlassItem = (props) => {
  const { item: glass, handleCardDetail } = props;
  return (
    <div className="w-30">
      <button className="w-full cursor-pointer" onClick={() => {handleCardDetail(glass)}}>
        <img src={glass.url} alt={glass.name} />
      </button>
    </div>
  );
};

export default GlassItem;
