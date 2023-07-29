export default function SectionFourBlocks() {
  const blocks = [
    {
      icon: "fa-solid fa-hourglass-half",
      info: "24-hour car delivery",
      bg: "#eaf2eb",
    },
    { icon: "fa-solid fa-headset", info: "24/7 technical support", bg: "#f8f3f4" },
    {
      icon: "fa-solid fa-bolt",
      info: "All models have a premium package",
      bg: "#e8edf7",
    },
    { icon: "fa-solid fa-shield", info: "Absolute confidentialy", bg: "#faf6f1" },
  ];
  return (
    <div className="section-four-blocks">

      {blocks.map((el) => {
        return (
          <div className="features-block">
            <i style={{ background: el.bg }} className={el.icon}></i>

            <span className="features-info">{el.info}</span>
          </div>
        );
      })}
    </div>
  );
}
