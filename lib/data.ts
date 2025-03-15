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
    title: "Software Engineer",
    location: "Austin, TX, US",
    description:[
      "Implemented AdvancedMapMarkers for consistent rendering across zoom levels and improved marker accuracy by 20m, reducing user errors.",
      "Added ACL-based compliance filters, enabling teams to track deadlines, generate reports, and monitor 200 projects for stakeholder presentations.",
      "Implemented masquerading to fix permission issues, updated role checks, ensured real-time updates, and cut support tickets by 30% in two months.",
      "Used Highcharts to visualize wind and solar plant performance, improving operational insights and decision-making."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2024 - Present",
  },
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
      "Developed Smart UI Builder from the ground up, delivering the first operational version.",
      "Implemented automated code generation for React and Angular projects, incorporating over 500 web components, which enhanced product refinement by 5%.",
      "For five months, led a team of 10 in the Smart Recruit project, managing sprints, assessing client requirements, conducting code reviews, debugging, organizing scrum calls, and promoting agile practices, resulting in the successful release of 50 features.",
      "Assembled nearly twenty UI screens based on UX designs and performed API integration for the Precision Dispatch System (PDS 2.0), in collaboration with the client Wabtec, contributing to various stages of the software development life cycle."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2021 - Jul 2022",
  },
  {
    title: "Software Engineer",
    location: "Pune, MH, India",
    description:[
      "Added test cases using tools like Karma, JUnit, and Mocha, making our software 70% more reliable.",
      "Created new features for organizing interviews, giving feedback, analyzing reports, and checking resumes, making the work 20% faster.",
      "Performed feature documentation for 20-30 features.",
      "Ran special checks to make sure everything works smoothly, making the software respond 12% faster.",
      "Fixed about 20 bugs in the software, helping it run better.",
      "Mentored two new colleagues in full-stack technologies, supporting their professional growth."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Sept 2020 - Sept 2021",
  },
  {
    title: "Software Development Intern",
    location: "Pune, MH, India",
    description:[
      "Created a flight booking website, adding online payments and attracting 100 new users.",
      "Developed 5 parts for a university app, increasing daily applications.",
      "Made 6 web pages look better, enhancing user experience.",
      "Helped reduce database memory use by 15% with the team."
    ],
    icon: React.createElement(CgWorkAlt),
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
