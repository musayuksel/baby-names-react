import { useState } from "react";
import "./App.css";
import babyNames from "./babyNamesData.json";
import BabyCard from "./components/BabyCard";
import FavoriteBabyCard from "./components/FavoriteBabyCard";

function App() {
  const [searchedBaby, setSearcBaby] = useState(babyNames);
  function filterSex(sex = "") {
    setSearcBaby(() =>
      babyNames.filter((baby) => baby.sex.includes(sex))
    );
  }
  function searchFunc(event = "") {
    setSearcBaby(() => {
      return babyNames.filter((baby) =>
        baby["name"]
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
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
      <section className="searchSection">
        <input
          type="text"
          name="nameSearch"
          id="nameSearch"
          placeholder="Search baby name"
          onChange={searchFunc}
        />
        <img
          src="https://cdn.iconscout.com/icon/premium/png-256-thumb/baby-746-763895.png"
          alt="baby icon"
          onClick={() => filterSex()}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/405/405129.png"
          alt="girl baby icon"
          onClick={() => filterSex("f")}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/191/191526.png"
          alt="boy baby icon"
          onClick={() => filterSex("m")}
        />
      </section>
      <section className="babyCardContainer">
        <h4 style={{ opacity: 0.5 }}>Favourites:</h4>
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
