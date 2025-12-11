import SkillItem from "./SkillItem";

interface Props {
  skillType: string;
  skillNames: string;
}

const SkillsList = ({ skillType, skillNames }: Props) => {
  return (
    <>
      <SkillItem skillType={skillType} skillNames={skillNames}></SkillItem>
    </>
  );
};

export default SkillsList;
