import { useState } from "react";
import "./App.css";
import babyNames from "./babyNamesData.json";
import BabyCard from "./components/BabyCard";

function App() {
  const [searchedBaby, setSearcBaby] = useState(babyNames);
  function searchFunc(e) {
    setSearcBaby(() => {
      return babyNames.filter((baby) =>
        baby["name"].toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
  }

  const babies = searchedBaby.map((baby) => (
    <BabyCard key={baby.id} name={baby.name} sex={baby.sex} />
  ));

  return (
    <div className="App">
      <input
        type="text"
        name="nameSearch"
        id="nameSearch"
        placeholder="Search baby name"
        onChange={searchFunc}
      />
      <h1>Choose a name for you future...</h1>
      <section className="babyCardContainer">{babies}</section>
    </div>
  );
}

export default App;
