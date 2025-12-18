export type SkillItem = {
  id: number;
  skillName: string;
  skillDescription: string;
};
export type SkillList = SkillItem[];

export const mySkills: SkillList = [
  {
    id: 1,
    skillName: "Programming Languages",
    skillDescription: "Python, HTML, CSS, TypeScript",
  },
  {
    id: 2,
    skillName: "Frameworks",
    skillDescription: "React",
  },
  {
    id: 3,
    skillName: "Tools",
    skillDescription: "Git, GitHub, VSCode",
  },
  {
    id: 4,
    skillName: "Certificates",
    skillDescription:
      "Ivy Tech Certificate of Software Application Developer (Magna Cum Laude), CompTIA Project+",
  },
];
