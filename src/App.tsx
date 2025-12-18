
import Header from "./components/suggested-components/Header";
import SkillsList from "./components/suggested-components/SkillList";
import { mySkills } from "./components/suggested-components/Skills";

function App() {
  return (
    <>
      <Header></Header>
      <h3>Skills and Tech Stack</h3>
      <SkillsList skillList={mySkills}></SkillsList>
    </>
)};
export default App;

// import SkillsList from "./components/SkillsList";
// import HeaderText from "./components/HeaderText";
// import AboutMeText from "./components/AboutMeText";

// function App() {
//   return (
//     <>
//       <HeaderText></HeaderText>
//       <AboutMeText></AboutMeText>
//       <h3>Skills and Tech Stack</h3>
//       <SkillsList
//         skillType="Programming Languanges"
//         skillNames="Python, HTML, CSS, TypeScript"
//       ></SkillsList>
//       <SkillsList skillType="Frameworks" skillNames="React"></SkillsList>
//       <SkillsList
//         skillType="Tools"
//         skillNames="Git, GitHub, VSCode"
//       ></SkillsList>
//       <SkillsList
//         skillType="Certificates"
//         skillNames="Ivy Tech Certificate of Software Application Developer (Magna Cum Laude), CompTIA Project+"
//       ></SkillsList>
//     </>
//   );
// }


