import ProductCard from "./components/ProductCard";
import Toolbar from "./components/Toolbar";

function App() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl lg:flex lg:flex-col lg:gap-3 lg:h-screen lg:items-center">
        <h1 className="mt-20 text-3xl font-bold">Fancy Counter</h1>
        <div className="flex items-center gap-3">
          <ProductCard />
          <Toolbar />
        </div>
      </div>
    </>
  );
}

export default App;
