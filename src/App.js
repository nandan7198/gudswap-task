import "./App.css";
import AnimalsList from "./components/AnimalList";

function App() {
  return (
    <div className="bg-sky-100 h-screen">
      <div className="h-12 bg-sky-300 text-center text-2xl font-bold pt-2">
        GudSwap Problem
      </div>
      <AnimalsList />
    </div>
  );
}

export default App;
