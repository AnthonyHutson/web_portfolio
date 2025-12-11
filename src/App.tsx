import SkillsList from "./components/SkillsList";

function App() {
  return (
    <>
      <h3>About Me:</h3>
      <p>
        Seeking a challenging and rewarding Software Developer position to apply
        technical skills and leadership experience. With a proven foundation in
        software development and successful management experience, eager to
        contribute to innovative projects and achieve positive results.
        Extremely tech knowledgeable and I love to learn about the cutting-edge
        technologies that are in research. I have flexible hours due to online
        classes and willing to fill in when necessary.
      </p>
      <h3>Skills and Tech Stack</h3>
      <SkillsList
        skillType="Programming Languanges"
        skillNames="Python, HTML, CSS, TypeScript"
      ></SkillsList>
      <SkillsList skillType="Frameworks" skillNames="React"></SkillsList>
      <SkillsList
        skillType="Tools"
        skillNames="Git, GitHub, VSCode"
      ></SkillsList>
      <SkillsList
        skillType="Certificates"
        skillNames="Ivy Tech Certificate of Software Application Developer (Magna Cum Laude), CompTIA Project+"
      ></SkillsList>
    </>
  );
}

export default App;
