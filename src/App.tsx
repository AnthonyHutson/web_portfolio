import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import { mySkills } from "./components/Skills";
import SkillsList from "./components/SkillsList";

function App() {
  return (
    <>
      <Header></Header>
      <AboutMe></AboutMe>
      <SkillsList skillList={mySkills}></SkillsList>
    </>
  );
}

export default App;
