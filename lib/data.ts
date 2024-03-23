import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    name: "Journey",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "MS - Information Systems",
    location: "University of Maryland Baltimore County, US",
    description:
      "Grade - 4/4",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2022 - May 2024",
  },
  {
    title: "Senior Software Engineer",
    location: "Pune, MH, India",
    description:[
      "Functioned as a full-stack developer for Smart UI Builder, enhancing development efficiency through features like automated code generation for React and Angular projects, and introducing web components with previews of UI elements.",
      "Led the Smart Recruit project team, focusing on planning sprints, understanding client needs, choosing appropriate technological solutions, overseeing code reviews, and ensuring progress towards sprint goals.",
      "Collaborated closely with the client Wabtec on the Precision Dispatch System (PDS 2.0), focusing on assembling UI screens based on UX designs and performing API integration."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2021 - Jul 2022",
  },
  {
    title: "Software Engineer",
    location: "Pune, MH, India",
    description:[
      "Incorporated the Karma, Mocha testing framework and wrote test cases, improving code coverage and quality.",
      "Generated features such as scheduling interviews, filling feedback forms, generating reports based on analysis, and scoring resumes, thereby enhancing operational efficiency. Contributed in feature documentation.",
      "Participated in stress testing, quality assurance, and both integration and unit testing, leading to improved system response times.",
      "Took responsibility for reporting, monitoring, and resolving software bugs while mentoring colleagues new to full-stack technologies."
    ],
    icon: React.createElement(FaReact),
    date: "Sept 2020 - Sept 2021",
  },
  {
    title: "Software Development Intern",
    location: "Pune, MH, India",
    description:[
      "Developed a Flight Booking System using MEAN and MERN stacks, enhancing user engagement with innovative UI designs.",
      "Led a team project to make the database design better, which used less memory.",
      "Upgraded the user interface by utilizing tools like PrimeNG and PrimeReact, boosting the system's visual appeal.",
    ],
    icon: React.createElement(FaReact),
    date: "Jan 2020 - May 2020",
  },
  {
    title: "BE - Computer Engineering",
    location: "Savitribai Phule Pune University, IN",
    description:
      "Grade - 4/4",
    icon: React.createElement(LuGraduationCap),
    date: "Jun 2016 - Apr 2020",
  },

] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
"Java",
"Python",
"PHP",
"TypeScript",
"JavaScript",
"C++",
"HTML",
"CSS",
"Oracle",
"MongoDB",
"PostgreSQL",
"MySQL",
"SQL",
"Node.js",
"Angular",
"React",
"Karma",
"Spring Boot",
"Git",
"Gitlab",
"Jenkins",
"Docker",
"Kubernetes",
"AWS",
"VS Code",
"Postmann",
"Tableau",
"Agile"
] as const;
