import "./App.css";
import babyNames from "./babyNamesData.json";
import BabyCard from "./components/BabyCard";

function App() {
  const babies = babyNames.map((baby) => (
    <BabyCard key={baby.id} name={baby.name} sex={baby.sex} />
  ));

  return (
    <div className="App">
      <h1>Choose a name for you future...</h1>
      <section className="babyCardContainer">{babies}</section>
    </div>
  );
}

export default App;
