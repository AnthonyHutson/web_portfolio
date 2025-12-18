import SkillListItem from "./SkillItem";
import type { SkillList } from "./Skills";
import "./SkillList.css";

interface Props {
  skillList: SkillList;
}

const SkillsList = ({ skillList }: Props) => {

  return (
    <>
      <ul className="skillList">
        {/* used ..._ underscore notation to ignore the index for now until you want to use it */}
        {skillList.map((skillItem, ..._index) => (
            <SkillListItem skillItem={skillItem}></SkillListItem>
        ))} 
      </ul>
    </>

  );
};

export default SkillsList;
