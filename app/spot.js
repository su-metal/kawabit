const spotFiles = {
  study: "06_study.png",
  repair: "05_repair.png",
  combo: "01_combo.png",
  person: "04_person.png",
  talk: "07_talk.png",
  path: "03_path.png",
  objects: "02_objects.png",
};

export default function Spot({ name, className = "" }) {
  return (
    <span className={`spot spot--${name} ${className}`} aria-hidden="true">
      <img src={`/illustrations/used/${spotFiles[name]}`} alt="" />
    </span>
  );
}
