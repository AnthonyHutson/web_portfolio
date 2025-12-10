interface Props {
  skillType: string;
  skillNames: string;
}

const SkillItem = ({ skillType, skillNames }: Props) => {
  return (
    <>
      <ul>
        <b>{skillType}</b>
        <em>
          <li>{skillNames}</li>
        </em>
      </ul>
    </>
  );
};

export default SkillItem;
