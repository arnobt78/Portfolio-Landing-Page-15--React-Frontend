import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import profileImg from "../assets/profile.png";

// Import project images
import studyHubImg from "../assets/studyhub.png";
import jobPortalImg from "../assets/job-portal.png";
import smartCartImg from "../assets/smart-cart.png";

export const USER_DETAILS = {
  names: "John Doe",
  title: "Full Stack Developer (MERN)",
  bio: "Aspiring MERN Stack Developer with a strong command of Data Structures, Algorithms, and Object-Oriented Programming concepts. Passionate about solving complex problems and building scalable, user-friendly web applications.",
  email: "abhinavsingh280803@gmail.com",

  profileImage: profileImg,
  socialMatches: [
    {
      id: "github",
      link: "https://google.com",
      icon: FaGithub,
      label: "GitHub",
    },
    {
      id: "linkedin",
      link: "https://google.com",
      icon: FaLinkedin,
      label: "LinkedIn",
    },
    {
      id: "leetcode",
      link: "https://google.com",
      icon: SiLeetcode,
      label: "LeetCode",
    },
    {
      id: "email",
      link: "mailto:john@deo.com",
      icon: FaEnvelope,
      label: "Email",
    },
  ],
};

export const PROJECTS = [
  {
    id: 1,
    title: "StudyHub – Learning Platform",
    description:
      "A centralized, clean, and responsive interface focused on productivity. Features secure user authentication, personalized dashboards, and structured study content.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    liveLink: "https://google.com",
    image: studyHubImg,
  },
  {
    id: 2,
    title: "Job Application Portal",
    description:
      "A feature-rich Job Application Portal built with React and Redux, featuring job listings, a multi-step application wizard, and user profile management.",
    tech: ["React (Vite)", "Redux Toolkit", "Context API", "CSS Variables"],
    liveLink: "https://google.com",
    image: jobPortalImg,
  },
  {
    id: 3,
    title: "Smart Shopping Cart",
    description:
      "An interactive E-commerce shopping cart application built with React, Redux, Context API, and React Router. Features product filtering, global user state management, and a seamless checkout process.",
    tech: ["React", "Redux", "Context API", "Tailwind CSS"],
    liveLink: "https://google.com",
    image: smartCartImg,
  },
];

export const SKILLS = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "Bootstrap",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "SQL"] },
  { category: "Tools", items: ["Git", "GitHub", "Postman", "VS Code"] },
];
