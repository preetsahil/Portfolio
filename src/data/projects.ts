import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "e-commerce-app-mern",
    title: "Posterz.",
    description:
      "An e-commerce web application developed using MERN Stack, OAuth2.0, Redux, and Razorpay.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/preetsahil/Posterz",
    url: "https://posterz-ten.vercel.app/",
    tags: [
      "React",
      "Redux Toolkit",
      "NodeJs",
      "OAuth2.0",
      "MongoDB",
      "Recharts",
      "Cron Jobs",
      "Nodemailer",
      "Razorpay",
      "JWT",
    ],
  },
  {
    id: "social-media-app-mern",
    title: "FriendZy",
    description:
      "A social media web application developed using MERN Stack, ReduxToolkit, JWT and Cloudinary.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/preetsahil/FriendZy",
    url: "https://friendzy-fpyp.onrender.com/",
    tags: [
      "React",
      "NodeJs",
      "MongoDB",
      "Redux Toolkit",
      "JWT",
      "Nodemailer",
      "Cloudinary",
    ],
  },

  {
    id: "VideoChat App",
    title: "VideoChat App",
    description:
      "A video chat application developed using ReactJs, WebRTC and socket.io that allows users to call each other face to face.",
    icon: "/skills/socket-io.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/preetsahil/VideoChat-APP",
    tags: ["ReactJs", "Socket-io", "NodeJs", "peerJs"],
  },
];

export default projects;

export function getProjectName(id: string) {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item.title;
}
