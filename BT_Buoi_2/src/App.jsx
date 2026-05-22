import Header from "./Component/Header";
import Card from "./Component/Card";
import dataGlass from "./Component/data.json";
import GlassList from "./Component/GlassList";
import GlassItem from "./Component/GlassItem";
import { useState } from "react";
function App() {
  const [cardDetail, setCardDetail] = useState({
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  });
  const handleCardDetail = (newGlass) => {
    setCardDetail(newGlass)
  }
  return (
    <div className="bg-blue-300 min-h-screen w-full">
      <Header />
      <div className="container mx-auto flex flex-col justify-center items-center md:justify-around gap-5 md:flex-row mt-20">
        <Card glass={cardDetail} />
        <div className="w-85">
          <img src="glassesImage/model.jpg" className="w-full" alt="" />
        </div>
      </div>
      <GlassList data={dataGlass} handleCardDetail={handleCardDetail} />
    </div>
  );
}

export default App;
