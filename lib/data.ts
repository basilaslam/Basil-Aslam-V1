import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
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
    title: "Graduated higher secondary",
    location: "Kozhikode, Kerala",
    description:
      "I have completed my higher secondary education from Univercity of Calicut",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2019",
  },
  {
    title: "Graduated bootcamp",
    location: "Kozhikode, Kerala",
    description:
      "I graduated after 7 months of studying.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Bachelor of Computer Applications",
    location: "Bharthia, Uttar Pradesh",
    description:
      "I'm currently pursuing a Bachelor of Computer Applications from GLA Univercity as a distance degree",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - present",
  },
  
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
