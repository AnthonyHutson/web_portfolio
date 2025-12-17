interface Props {
  skillType: string;
  skillNames: string;
}

const SkillItem = ({ skillType, skillNames }: Props) => {
  return (
    <>
      <b>{skillType}</b>
      <li>{skillNames}</li>
    </>
  );
};

export default SkillItem;
