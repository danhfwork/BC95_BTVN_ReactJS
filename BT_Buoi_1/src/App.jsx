import Header from "./components/Header";
import Welcome from "./components/Content";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header />
        <Welcome />
        <div className="container mx-auto grid grid-cols-3 gap-20 my-10">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
