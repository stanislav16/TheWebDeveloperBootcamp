import "./App.css";
import Greeter from "./Greeter";
import Dice from "./Dice";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";

function App() {
  return (
    <div>
      <Heading color="pink" title="FORZA FERRARI" />
      <Greeter name="World" />
      <Greeter name="React" />
      <Greeter name="Function" />
      <Dice sides={6} />
      <Dice sides={20} />
      <Dice sides={100} />
      <ListPicker items={["one", "two", "three"]} />
      <DoubleDice />
    </div>
  );
}

export default App;
