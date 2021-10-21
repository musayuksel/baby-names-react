export default function FavoriteBabyCard({
  name,
  id,
  sex,
  setFavoriteBabiesIds,
}) {
  function handleClick() {
    //TODO DELETE ID FROM LIST
    setFavoriteBabiesIds((prev) =>
      prev.filter((element) => element !== id)
    );
  }

  return (
    <article
      onClick={handleClick}
      className={`babyCard ${sex}`}
    >
      {name}
    </article>
  );
}
