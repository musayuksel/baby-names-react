export default function BabyCard({
  name,
  id,
  sex,
  setFavoriteBabiesIds,
}) {
  function handleClick() {
    setFavoriteBabiesIds((prev) => [
      ...new Set(prev.concat(id)),
    ]);
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
