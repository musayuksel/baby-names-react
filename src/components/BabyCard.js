export default function BabyCard({ name, sex }) {
  return <article className={`babyCard ${sex}`}>{name}</article>;
}
