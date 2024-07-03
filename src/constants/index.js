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
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  gpl,
  crayven,
  gift,
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
    title: "Content Creator",
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Giftwrap",
    icon: gift,
    iconBg: "#E6E6FA",
    date: "MARCH 2022 – JANUARY 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Planning and Production Supervisor",
    company_name: "General Plastics",
    icon: gpl,
    iconBg: "#FAEBD7",
    date: "NOVEMBER 2018 – AUGUST 2020.",
    points: [
      "Spearheaded strategic planning initiatives for key operations at General Plastics, focusing on long-term goals and objectives to drive organizational success.",
      "Implemented meticulous resource allocation strategies, including budgeting for raw materials and coordinating resources",
      "Leveraged chemical engineering expertise to optimize manufacturing processes, enhancing efficiency and productivity across all operations",
      " Employed cost-effective planning methodologies to ensure optimal utilization of resources, minimizing expenses while maximizing output and profitability for General Plastics",
    ],
  },  
  {
    title: "Software Engineer",
    company_name: "Libra Instruments",
    icon: gpl,
    iconBg: "#FAEBD7",
    date: "JAN 2023 – FEB 2024.",
    points: [
      "Libra Software maintenance.",
      "Maintainence of machines and installation of sensors",
      "Leveraged chemical engineering expertise to optimize manufacturing processes, enhancing efficiency and productivity across all operations",
      " Employed cost-effective planning methodologies to ensure optimal utilization of resources, minimizing expenses while maximizing output and profitability for General Plastics",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Oscar proved me wrong.",
    name: "Kai Hu",
    designation: "CEO",
    company: "GiftWrap AI",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Oscar does.",
    name: "Catherin Ng'ang'a",
    designation: "CEO",
    company: "Crayven Estates",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    testimonial:
      "After Wanga optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Rachael Wainaina",
    designation: "DIrector",
    company: "Crayven Estates",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Dale Codex",
    description:
      "Experience the power of creativity with our innovative web application powered by OpenAI's DALE API. Our platform enables you to effortlessly generate stunning images using cutting-edge artificial intelligence technology. Save and share your masterpieces seamlessly, showcasing your unique vision to the world. Unleash your imagination and explore endless possibilities with our image generation tool.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "dale AI",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://astonishing-hotteok-d26190.netlify.app/",
  },
  {
    name: "Giftwrap",
    description:
      "GiftWrap AI simplifies gifting. Order and deliver gifts to your friends hassle-free. Choose from a curated selection, add a personalized message, and spread joy effortlessly with our convenient service.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://giftwrap.ai/",
  },
  {
    name: "Crayven Estates",
    description:
      "A comprehensive real estate platform offering users the ability to browse and book properties, explore various listings, and access curated recommendations for desirable locations. Simplify your property search with our intuitive interface.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://crayven.co.ke/",
  },
];

export { services, technologies, experiences, testimonials, projects };
