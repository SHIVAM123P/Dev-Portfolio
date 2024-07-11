import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  kestone,
  accenture,
  tesla,
  shopify,
  carrent,
  recipefinder,
  prodigypath,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "blog",
    title: "Blogs",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Shopify Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "shopify",
    icon: shopify,
  },
];

const experiences = [
  {
    title: "Junior Developer Intern",
    company_name: "Kestone",
    icon: kestone,
    iconBg: "#383E56",
    date: "June 2022 - July 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Built 4 complete web applications and an admin panel for a hotel, utilizing React.js and likely other front-end technologies.",
      "Worked with APIs (tools like Postman) to connect applications to external services and managed data using MongoDB Compass.",
      "Extended Shopify functionality by integrating Stripe for payments directly within the platform using custom code.",
    ],
  },
  
  {
    title: "Software Engineer",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Shivam proved me wrong.",
    name: "Sara Lee",
    // designation: "CFO",
    // company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Shivam does.",
    name: "Chris Brown",
    // designation: "COO",
    // company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Shivam optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    // designation: "CTO",
    // company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Recipe Finder",
    description:
      "Designed and implemented a recipe finder app using the Meal DB API. The app allows users to search for recipes by name, demonstrating proficiency in API integration and data retrieval techniques.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: recipefinder,
    source_code_link: "https://github.com/SHIVAM123P/Recipe-Finder",
    // Add a new property for the live project URL
    live_link: "https://recipe-finder-shivam.netlify.app/"
  },
  
  {
    name: "ProdigyPath",
    description:
      "This user-friendly platform empowers learners to browse and enroll in online courses, while also offering insightful tech-related blogs at /blogs – all designed to enhance the online learning experience.",
    tags: [
      {
        name: "ExpressJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: prodigypath,
    source_code_link: "https://github.com/SHIVAM123P/prodigyPath/tree/pages",
    // Add a new property for the live project URL
    live_link: "https://prodigypath-zh58.onrender.com/"
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
