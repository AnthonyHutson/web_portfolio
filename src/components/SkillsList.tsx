import SkillListItem from "./SkillItem";
import type { SkillList } from "./Skills";
import "./SkillsList.css";

interface Props {
  skillList: SkillList;
}

const SkillsList = ({ skillList }: Props) => {
  return (
    <>
      <h2 className="sub-header">Skills and Tech Stack:</h2>
      <div className="skillList">
        {skillList.map((skillItem, ..._index) => (
          <SkillListItem skillItem={skillItem}></SkillListItem>
        ))}
      </div>
    </>
  );
};

export default SkillsList;
