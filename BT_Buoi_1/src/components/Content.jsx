import React from "react";

const Welcome = () => {
  return (
    <div className="bg-gray-100 rounded-lg p-30 my-20 container mx-auto flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-2">A Warm Welcome!</h1>
      <p className="text-2xl text-gray-700 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa, ipsam,
        eiusmod, in quo sunt possimus non incidunt odit vero aliquod similique
        quaerat nam nobis illo aspernatur vitae fugiat nunquan repellat.
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 text-2xl">Call to action!</button>
    </div>
  );
};

export default Welcome;
