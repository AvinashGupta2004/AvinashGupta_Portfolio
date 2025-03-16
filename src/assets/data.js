const links = [
  { title: "Home", target: "#home-section", id: "home" },
  { title: "About", target: "#about-section", id: "about" },
  { title: "Portfolio", target: "#portfolio-section", id: "portfolio" },
  { title: "Projects", target: "#projects-section", id: "projects" },
  { title: "Contact", target: "#contact-section", id: "contact" },
];

const skills = [
  { title: "ReactJS", image: "/images/react-2.svg", id: "react" },
  { title: "NodeJS", image: "/images/nodejs-icon.svg", id: "nodejs" },
  { title: "MongoDB", image: "/images/mongodb-icon-1.svg", id: "mongodb" },
  {
    title: "TailwindCSS",
    image: "/images/tailwind-css-2.svg",
    id: "tailwindcss",
  },
  {
    title: "JavaScript",
    image: "/images/logo-javascript.svg",
    id: "javascript",
  },
  { title: "Python", image: "/images/python-5.svg", id: "python" },
  { title: "Java", image: "/images/java-4.svg", id: "java" },
];

const details = [
  { label: "Email", detail: "avinash11016@gmail.com", id: "email" },
  { label: "Phone", detail: "+91-8601460371", id: "phone" },
  { label: "Location", detail: "Lucknow, Uttar Pradesh", id: "location" },
  { label: "Languages", detail: "English, Hindi", id: "languages" },
  { label: "Nationality", detail: "Indian", id: "nationality" },
];

const services = [
  {
    title: "Web Development",
    description: "Website Development with latest tools and applications.",
    id: "web-development",
    image: "/images/Static assets-rafiki.svg",
  },
  {
    title: "UI/UX Designing",
    description:
      "Best in class User Interface and User Experience designs with latest technologies and resources in hand.",
    id: "ui-ux-designing",
    image: "/images/Low code development-rafiki.svg",
  },
  {
    title: "Logic Building & Programming",
    description:
      "Strong expertise in languages like Java and Python along with efficient logic building.",
    id: "logic-building",
    image: "/images/Open source-rafiki.svg",
  },
];

const experiences = [
  {
    title: "Python Project Intern",
    company: "CodSoft Pvt. Ltd.",
    duration: "Dec 2023-Jan 2024",
    description: [
      "Worked as a Software Developer in TCS for 2 years.",
      "Developed various applications and projects for the company.",
    ],
    id: "exp-1",
    index: 1,
  },
  {
    title: "Web Development Intern",
    company: "Prodigy InfoTech Pvt. Ltd.",
    duration: "Mar 2024-Apr 2024",
    description: [
      "Worked as a Software Developer in TCS for 2 years.",
      "Developed various applications and projects for the company.",
    ],
    id: "exp-2",
    index: 2,
  }
];

const education = [
  {
    title: "Bachelor's in Technology - Computer Science & Engineering",
    company: "Madan Mohan Malaviya University of Technology Gorakhpur",
    duration: "2023-Present",
    description: [
      "Currently envisioning the skills required to be in the Industry",
      "Current CGPA - 8.32"
    ],
    id: "ed-1",
    index: 1,
  },
  {
    title: "Intermediate - Class 12",
    company: "Aditya Birla Public School Jagdishpur - CBSE",
    duration: "2021-2022",
    description: [
      "Studied P.C.M. along with Computer Science as an additional subject.",
      "Developed a core understanding about Python and SQL",
      "Scored 94.6% in the Annual Examination, securing 99% in Computer Science"
    ],
    id: "ed-2",
    index: 2,
  }
];

const projects = [
  {title:"ElectON",description:"A GUI based Desktop Application made with Python and Sqlite3",image:"https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {title:"MindAlive",description:"Webpage considering all the issues of Stress & its Management.",image:"https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {title:"Portfolio Website",description:"Webpage showing all my skills & abilities at one place. Made with ReactJS & TailwindCSS",image:"https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600"},
]

const items = [
  {label:"Home",target:"#"},
  {label:"About",target:"#"},
  {label:"Experience",target:"#"},
  {label:"Projects",target:"#"}
]
const socialLinks = [
  {label:"LinkedIn",target:"#",image:"/images/linkedin.svg"},
  {label:"Instagram",target:"#",image:"/images/instagram.svg"},
]
const profilePhoto =
  "https://media.licdn.com/dms/image/v2/D5603AQEuMkHS7-bRgg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710062257056?e=1747267200&v=beta&t=GzGz6qxMYqKSymN2YXXZV13IHLh-Pe0uK54w3h3aWuk";

export { links, profilePhoto, skills, details, services, experiences, education,projects,items,socialLinks};
