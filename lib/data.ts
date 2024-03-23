import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import doctor from "@/public/doctor2.png";
import flight from "@/public/flight.png"
import food from "@/public/online-food-ordering.jpg";


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
    title: "Food Ordering System",
    description:
      "Crafted a food ordering system's backend with database capabilities. The system simplifies order placements, cart management, restaurant recommendations and advanced search options.",
    tags: ["SQL","PL/SQL"],
    imageUrl: food,
    url: 'https://github.com/Vrushali-1/Online-Food-Ordering-System'
  },
  {
    title: "Disease Prediction System",
    description:
      "This project is a health-focused predictive system that analyzes symptoms input by users to forecast the top 10 diseases they might be at risk for.",
    tags: ["Python","Pandas","Matplotlip"],
    imageUrl: doctor,
    url: 'https://github.com/Vrushali-1/Disease-Prediction'
  },
  {
    title: "Flight Booking System",
    description:
      "This system offers a quick way to compare and book flights, making travel planning straightforward and efficient for users.",
    tags: ["React", "MongoDB", "Node.js"],
    imageUrl: flight,
    url: 'https://youtu.be/ZWwJabOimro',
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
