import SkillList from "./components/SkillList";

function App() {
  return (
    <>
      <h3>Skills and Tech Stack</h3>
      <SkillList
        skillType="Programming Languanges"
        skillNames="Python, HTML, CSS, TypeScript"
      ></SkillList>
      <SkillList skillType="Frameworks" skillNames="React"></SkillList>
      <SkillList skillType="Tools" skillNames="Git, GitHub, VSCode"></SkillList>
      <SkillList
        skillType="Certificates"
        skillNames="Ivy Tech Certificate of Software Application Developer (Magna Cum Laude), CompTIA Project+"
      ></SkillList>
    </>
  );
}

export default App;
