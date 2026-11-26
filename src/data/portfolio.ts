import type { Project } from "@/components/ProjectShowcase";

export const skills = [
  {
    title: "Frontend",
    technologies: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "React Hooks",
      "Material UI",
    ],
  },
  {
    title: "State Management",
    technologies: [
      "Redux",
      "Redux Toolkit",
      "Redux Saga",
      "RTK Query",
      "Context API",
    ],
  },
  {
    title: "Architecture & Build Tools",
    technologies: [
      "Micro Frontends",
      "Webpack",
      "Module Federation",
      "Code Splitting",
      "Vite",
    ],
  },
  {
    title: "Testing & Code Quality",
    technologies: [
      "Jest",
      "React Testing Library",
      "Cypress",
      "Vitest",
      "SonarQube",
    ],
  },
  {
    title: "Backend & APIs",
    technologies: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
  },
];

export const projects: Project[] = [
  {
    name: "Aviation Exam Generator",
    description:
      "A document-based practice question generator built with React. It extracts learning material from uploaded files, generates aviation practice questions, and supports sharing questions through forms and exporting them as PDFs.",
    technologies: ["React", "JavaScript", "Vite", "Tailwind CSS"],
    link: "https://github.com/aswnii-devHub/Aviation-Lab",
    demoUrl: "https://aviation-lab.vercel.app/",
  },
  {
    name: "SkyTrace",
    description:
      "A responsive weather application built with React and TypeScript. Search for a city to view current conditions, key weather metrics, and a five-day forecast, with clear handling for invalid searches and API errors.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    link: "https://github.com/aswnii-devHub/skytrace-weather-app",
    demoUrl: "https://skytrace-weather-app.vercel.app/",
  },
];
