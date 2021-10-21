import { useState } from "react";
import "./App.css";
import babyNames from "./babyNamesData.json";
import BabyCard from "./components/BabyCard";
import FavoriteBabyCard from "./components/FavoriteBabyCard";

function App() {
  const [searchedBaby, setSearcBaby] = useState(babyNames);
  function searchFunc(e) {
    setSearcBaby(() => {
      return babyNames.filter((baby) =>
        baby["name"]
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
    });
  }

  const [favoriteBabiesIds, setFavoriteBabiesIds] =
    useState([]);
  const favoriteBabies = babyNames.filter((baby) =>
    favoriteBabiesIds.includes(baby.id)
  );

  const babiesForFavoriteSection = favoriteBabies.map(
    (baby) => (
      <FavoriteBabyCard
        setFavoriteBabiesIds={setFavoriteBabiesIds}
        key={baby.id}
        id={baby.id}
        name={baby.name}
        sex={baby.sex}
      />
    )
  );

  const babiesForMainSection = searchedBaby
    .filter((el) => !favoriteBabiesIds.includes(el.id))
    .map((baby) => (
      <BabyCard
        setFavoriteBabiesIds={setFavoriteBabiesIds}
        key={baby.id}
        id={baby.id}
        name={baby.name}
        sex={baby.sex}
      />
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
      <section className="babyCardContainer">
        {babiesForFavoriteSection}
      </section>
      <h1>Choose a name for you future...</h1>
      <section className="babyCardContainer">
        {babiesForMainSection}
      </section>
    </div>
  );
}

export default App;
