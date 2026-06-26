const spotFiles = {
  study: "kawabit-spot-study.png",
  repair: "kawabit-spot-repair.png",
  combo: "kawabit-spot-combo.png",
  person: "kawabit-spot-person.png",
  talk: "kawabit-spot-talk.png",
  path: "kawabit-spot-path.png",
  objects: "kawabit-spot-objects.png",
};

export default function Spot({ name, className = "" }) {
  return (
    <span className={`spot spot--${name} ${className}`} aria-hidden="true">
      <img src={`/illustrations/${spotFiles[name]}`} alt="" />
    </span>
  );
}
