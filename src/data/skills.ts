import { ISkillListItem, SkillLevel } from "@/types";
import { getImagePath } from "@/utils/getImagePath";
const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "JavaScript",
        level: SkillLevel.Expert,
        icon: getImagePath("/skills/javascript.svg"),
      },
      {
        title: "TypeScript",
        level: SkillLevel.Intermediate,
        icon: getImagePath("/skills/typescript.svg"),
      },
      {
        title: "CPP",
        level: SkillLevel.Expert,
        icon: getImagePath("/skills/c.svg"),
      },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      {
        title: "Next.js",
        level: SkillLevel.Expert,
        icon: getImagePath("/skills/nextjs.png"),
      },
      {
        title: "React.js",
        level: SkillLevel.Expert,
        icon: getImagePath("/skills/react.svg"),
      },
      {
        title: "HTML",
        level: SkillLevel.Expert,
        icon: getImagePath("/skills/html.svg"),
      },
      {
        title: "CSS",
        level: SkillLevel.Intermediate,
        icon: getImagePath("/skills/css.svg"),
      },
      {
        title: "SASS",
        level: SkillLevel.Intermediate,
        icon: getImagePath("/skills/sass.svg"),
      },
      {
        title: "Redux Toolkit",
        level: SkillLevel.Expert,
        icon: getImagePath("/skills/redux.svg"),
      },
    ],
  },
  {
    title: "Backend Development",
    items: [
      {
        title: "Node.js",
        level: SkillLevel.Expert,
        icon: getImagePath("/skills/nodejs.svg"),
      },
      {
        title: "Express.js",
        level: SkillLevel.Expert,
        icon: getImagePath("/skills/express.svg"),
      },
      {
        title: "Socket.io",
        level: SkillLevel.Intermediate,
        icon: getImagePath("/skills/socket-io.png"),
      },
    ],
  },
  {
    title: "Database Management",
    items: [
      {
        title: "MongoDB",
        level: SkillLevel.Intermediate,
        icon: getImagePath("/skills/mongodb.svg"),
      },
      {
        title: "PostgreSQL",
        level: SkillLevel.Intermediate,
        icon: getImagePath("/skills/postgresql.svg"),
      },
      {
        title: "MySQL",
        level: SkillLevel.Begginer,
        icon: getImagePath("/skills/mysql.svg"),
      },
    ],
  },
  {
    title: "DevOps/VCS",
    items: [
      {
        title: "Docker",
        level: SkillLevel.Begginer,
        icon: getImagePath("/skills/docker.png"),
      },
      {
        title: "AWS",
        level: SkillLevel.Begginer,
        icon: getImagePath("/skills/aws.svg"),
      },
      {
        title: "Git",
        level: SkillLevel.Expert,
        icon: getImagePath("/skills/git.svg"),
      },
      {
        title: "GitHub",
        level: SkillLevel.Expert,
        icon: getImagePath("/skills/github.svg"),
      },
      {
        title: "Ubuntu",
        level: SkillLevel.Intermediate,
        icon: getImagePath("/skills/ubuntu.png"),
      },
    ],
  },
  {
    title: "Nontechnical Skills",
    items: [
      {
        title: "Problem Solving",
        level: SkillLevel.Expert,
        icon: getImagePath("/images/logical-thinking.png"),
      },
      {
        title: "Collaboration",
        level: SkillLevel.Expert,
        icon: getImagePath("/images/collaboration.png"),
      },
      {
        title: "Analytical Skills",
        level: SkillLevel.Expert,
        icon: getImagePath("/images/analytical-skills.png"),
      },
    ],
  },
];

export default skills;
