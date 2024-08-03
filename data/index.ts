export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Hello, World!",
    description: `After several years of teaching mathematics to diverse student groups, 
    I decided to pursue my passion for computing. 
    I am now a co-op studnet in the Computer System Technology (CST) program at BCIT, 
    where I am learning various programming languages and web development.
    My favourite part of programming is collaborating with others to solve complex problems, 
    and I am always looking for opportunities to learn and grow.
    I am currently seeking a co-op position for the winter of 2025.
    In my free time, I enjoy watching movies and playing minesweeper 💣. 
    I also enjoy playing bass guitar 🎸 and listening to rock music 🎧.`,
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] leading-10",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/grid.svg",
    spareImg: "",
    descriptionClassName: "leading-10"
  },
  {
    id: 2,
    title: "Projects",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[160vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "",
  },
  {
    id: 3,
    title: "Skills",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-center",
    img: "/grid.svg",
    spareImg: "",
  },
  {
    id: 4,
    title: "Education",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[75vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "",
  },

  {
    id: 5,
    title: "Experience",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[120vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/grid.svg",
    spareImg: "",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "ColorUs",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/seogin/ColorUs",
  },
  {
    id: 2,
    title: "ProtectUs",
    des: "A web app that displays a comprehensive list of criminals through both map and list views and provides users with protection services including guardian robots, security drones, and cybersecurity packages.",
    img: "/ProtectUs.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/yeali-kim/2800-202410-DTC07",
    technologies: ["EJS", "CSS", "Tailwind CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "Google Maps API"],
  },
  {
    id: 3,
    title: "CampUs",
    des: "Helps BCIT students to connect anonymously, discuss school life, buy and sell items, access career resources, and engage in general chat.",
    img: "/CampUs.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/seogin/BCIT-Hackathon-2024-Team8",
    technologies: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Firebase"]
  },
  {
    id: 4,
    title: "AirHealth",
    des: "Provides real-time information on air pollutant levels and offers personalized recommendations based on the current air quality index for any searched city.",
    img: "/AirHealth.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/seogin/1800_202410_DTC09",
    technologies: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "JavaScript", "Firebase", "Google Air Quality API"]
  },
];