interface Props {
  heading: string;
  skillName: string;
  description: string;
}

const SkillList = ({ heading, skillName, description }: Props) => {
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          {skillName} | {description}
        </li>
      </ul>
    </>
  );
};

export default SkillList;
