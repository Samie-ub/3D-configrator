import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./component/Experience";
import { CustomizationProvider } from "./context/Customization";
import Configurator from "./component/Configurator";

function App() {
  return (
    <>
    <CustomizationProvider>

      <div className="App">
        <Canvas dpr={[2, 5]} >
          <color attach="background" args={["#FFF8E3"]} />
          <fog attach="fog" args={["#213547", 10, 20]} />
          <Experience/>
        </Canvas>
        <Configurator/>
      </div>
    </CustomizationProvider>
    </>
  );
}

export default App;
