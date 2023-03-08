import "./App.scss";
import FirstScreen from "./FirstScreen";
import { NameProvider } from "./providers/NameProvider";
import SecondScreen from "./SecondScreen";

function App() {
  return (
    <NameProvider>
      <div className="App">
        <FirstScreen />
        <SecondScreen />
      </div>
    </NameProvider>
  );
}

export default App;
