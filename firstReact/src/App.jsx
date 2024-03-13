import "./App.css";
import Greeter from "./Greeter";
import Dice from "./Dice";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";
import ShoppingList from "./ShoppingList";
import PropertyList from "./PropertyList";

const data = [
  { name: "eggs", quantity: 12, completed: false },
  { name: "milk", quantity: 1, completed: true },
  { name: "chicken breasts", quantity: 4, completed: false },
  { name: "carrots", quantity: 6, completed: true },
];

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];
function App() {
  return (
    <div>
      <PropertyList properties={properties} />

      {/* <ShoppingList items={data} /> */}
      {/* <Heading color="pink" title="FORZA FERRARI" />
      <Greeter name="World" />
      <Greeter name="React" />
      <Greeter name="Function" />
      <Dice sides={6} />
      <Dice sides={20} />
      <Dice sides={100} />
      <ListPicker items={["one", "two", "three"]} />
      <DoubleDice /> */}
    </div>
  );
}

export default App;
