import React from "react";

const Card = (props) => {
  const { glass } = props;
  return (
    <div>
      <div className="w-85 relative">
        <img src="glassesImage/model.jpg" className="w-full" alt="" />
        <img
          src={glass.url}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 opacity-50"
          alt=""
        />
        <div className="bg-orange-300 opacity-80 w-full absolute bottom-0">
          <h2 className="text-2xl uppercase p-2 text-purple-600 font-medium">
            {glass.name}
          </h2>
          <p className="p-2 text-white font-bold">{glass.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
