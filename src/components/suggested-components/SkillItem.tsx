import type { SkillItem } from "./Skills";
import "./SkillItem.css";

interface Props {
  skillItem: SkillItem;
}

const SkillListItem = ({ skillItem }: Props) => {
  return (
    <>
      <b className="skill-name">{skillItem.skillName}</b>
      <li className="skill-description" key={skillItem.id}>{skillItem.skillDescription}</li>
    </>
  );
};

export default SkillListItem;
