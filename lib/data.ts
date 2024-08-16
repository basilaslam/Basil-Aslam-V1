import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaCode, FaNodeJs, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import genius from "@/public/Genius.png";
import greeny from "@/public/greeny.png";
import trelloClone from "@/public/Trello-Clone.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Bootcamp",
    location: "Kozhikode, Kerala",
    description:
      "I graduated after 7 months of studying.",
    icon: React.createElement(FaReact),
    date: "Aug 2022- Oct 2023",
  },
  {
    title: "Nexkhad Technologies",
    location: "Kozhikode, Kerala",
    description:
      "I'm currently working at Nexkhad Technologies as a junior software developer, where I develop internal tools to automate and streamline business processes, improving efficiency by 43%.",
    icon: React.createElement(FaNodeJs),
    date: "Nov 2023 - Jul 2024",
  },
  {
    title: "WebCastle Media",
    location: "Kochi, Kerala",
    description:
      "I'm currently working at WebCastle Media as a Full Stack Developer. My main responsibilities include working on a Node.js and Next.js project, where I build and maintain scalable web applications.",
    icon: React.createElement(FaCode),
    date: "Jul 2024 - present",
  }
] as const;


export const projectsData = [
  {
    title: "Genius",
    description:
      "Genius generates images, videos, music, code, and AI-driven conversations. Explore its boundless creativity",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Prisma"],
    imageUrl: genius,
    link: 'https://genius-cpeitwtrka-el.a.run.app'
  },
  {
    title: "Trello-Clone",
    description:
      "Check out my minimalist task manager inspired by Trello, designed for streamlined organization and productivity",
    tags: ["Angular", "TypeScript", "Rxjs", "Ngrx", "Tailwind", "Redux"],
    imageUrl: trelloClone,
    link: 'https://trello-clone-frontend-kohl.vercel.app'
  },
  {
    title: "Greeny",
    description:
      "Your personalized grocery app for quick, convenient shopping, with fresh selections and flexible delivery. Shop smarter with FreshCart",
    tags: ["Nodejs", "EJS", "MongoDB", "HTML", "CSS"],
    imageUrl: greeny,
    link:'https://greeny-cpeitwtrka-an.a.run.app'
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Angular",
  "NgRx",
  "RxJs",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Zustand",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "Golang"
] as const;
