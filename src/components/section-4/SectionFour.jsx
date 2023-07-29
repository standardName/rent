import SectionFourBlocks from "./SectionFourBlocks";
import SectionFourInfo from "./SectionFourInfo";
import "../section-4/sectionFour.css";
export default function SectionFour() {
  return (
    <div className="section-four">
      <SectionFourInfo />
      <SectionFourBlocks />
    </div>
  );
}
