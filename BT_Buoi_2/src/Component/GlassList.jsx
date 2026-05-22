import React from "react";
import GlassItem from "./GlassItem";

const GlassList = (props) => {
  const { data, handleCardDetail } = props;
  console.log(data);
  return (
    <div className="bg-white container mx-auto mt-25 px-3 py-4 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-2 justify-items-center">
      {data.map((glass) => (
        <GlassItem key={glass.id} item={glass} handleCardDetail={handleCardDetail} />
      ))}
    </div>
  );
};
export default GlassList;
