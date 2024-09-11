import "./App.css";
import Canvas_container from "./components/Canvas_container";
import Navbar from "./components/Navbar";
import Place from "./components/MonumentPage";

function App() {
  return (
    <>
      <div
        className="  items-center
        relative h-screen w-full overflow-hidden "
      >
        <Navbar />
        {/* <Canvas_container /> */}
        <Place />
      </div>
    </>
  );
}

export default App;
