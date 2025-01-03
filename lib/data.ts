import React from "react";
import { FaCode, FaNodeJs, FaReact } from "react-icons/fa";
import storedada from "@/public/storedada.png";
import sidcoFoodsImage from "@/public/sidco.png";
import theFreshMarketDubaiImage from "@/public/fmrk.png";
import mattressLandImage from "@/public/mland.png";

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
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
    description: "I graduated after 7 months of studying.",
    icon: React.createElement(FaReact),
    date: "Aug 2022- Oct 2023",
  },
  {
    title: "Nexkhad Technologies",
    location: "Kozhikode, Kerala",
    description:
      "Worked as a junior software developer, I developed internal tools to automate and streamline business processes, improving efficiency by 43%.",
    icon: React.createElement(FaNodeJs),
    date: "Nov 2023 - Jul 2024",
  },
  {
    title: "WebCastle Media",
    location: "Kochi, Kerala",
    description:
      "Currently working as a Full Stack Developer at WebCastle Media. My main responsibilities include working on a Node.js and Next.js project, where I build and maintain scalable web applications.",
    icon: React.createElement(FaCode),
    date: "Aug 2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Store Dada",
    description:
      "Developed the StoreDada platform, an all-in-one eCommerce solution designed to help businesses grow faster and more efficiently. ",
    tags: [
      "Next.js",
      "Redux",
      "Node.js",
      "Tailwind",
      "E-commerce",
      "JavaScript",
      "Angular",
    ],
    imageUrl: storedada,
    link: "https://storedada.com",
  },
  {
    title: "The Fresh Market Dubai",
    description:
      "An e-commerce website offering fresh groceries and produce with fast delivery across Dubai.",
    tags: [
      "Next.js",
      "Tailwind",
      "E-commerce",
      "Firebase",
      "JavaScript",
      "Angular",
    ],
    imageUrl: theFreshMarketDubaiImage,
    link: "https://thefreshmarketdubai.com",
  },
  {
    title: "Sidco Foods",
    description:
      "Online store for frozen foods, dairy products, and groceries with home delivery service.",
    tags: ["Next.js", "Tailwind", "E-commerce", "Node.js", "Angular"],
    imageUrl: sidcoFoodsImage,
    link: "https://sidcofoods.ae",
  },
  {
    title: "Mattress Land",
    description:
      "E-commerce platform for browsing and purchasing mattresses, bedding, and furniture.",
    tags: [
      "Angular",
      "TypeScript",
      "Ngrx",
      "Tailwind",
      "E-commerce",
      "UI/UX Design",
    ],
    imageUrl: mattressLandImage,
    link: "https://mattressland.ae",
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
  "Golang",
] as const;
