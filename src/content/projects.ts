export type Project = {
  title: string;
  kind: string;
  period: string;
  url?: string;
  note?: string;
  image: string;
  description: string;
  skills: string[];
};

export const projects: Project[] = [
  {
    title: "DineGuide",
    kind: "Industry-Sponsored",
    period: "Jan — May 2026",
    note: "Private repository - available on request",
    image: "/DineGuide.png",
    description:
      "Cross-platform mobile app that helps people with Type 1 diabetes find restaurants and menu items matching their nutritional needs, built over five months with an industry sponsor.",
    skills: ["Flutter", "Dart", "Firebase", "Mapbox API", "Figma"],
  },
  {
    title: "ColorUs",
    kind: "Personal",
    period: "Jun — Aug 2024",
    url: "https://github.com/SungJin-Suh/colorus",
    image: "/ColorUs1.png",
    description:
      "Web app that analyzes a user's skin tone with a Python machine-learning model to predict their personal colour and recommend complementary palettes.",
    skills: ["React", "Python", "scikit-learn", "OpenCV", "Flask", "Tailwind CSS"],
  },
  {
    title: "ProtectUs",
    kind: "Academic",
    period: "May 2024",
    url: "https://github.com/SungJin-Suh/protectus",
    image: "/ProtectUs.png",
    description:
      "Public-safety web app with synchronized map and list views of criminal data, plus browsable protection services backed by Google Maps integration.",
    skills: ["Node.js", "Express", "EJS", "MongoDB", "Google Maps API"],
  },
  {
    title: "CampUs",
    kind: "QDS Hacks 2024",
    period: "Mar 2024",
    url: "https://github.com/SungJin-Suh/campus",
    image: "/CampUs.png",
    description:
      "Hackathon project: an anonymous community app for BCIT students with chat, a marketplace, and career resources.",
    skills: ["JavaScript", "Firebase", "Tailwind CSS"],
  },
  {
    title: "AirHealth",
    kind: "Academic",
    period: "Jan — Apr 2024",
    url: "https://github.com/SungJin-Suh/airhealth",
    image: "/AirHealth.png",
    description:
      "Delivers real-time air-quality data and personalized health recommendations for any searched city, integrating the Google Air Quality API with a Firebase backend.",
    skills: ["HTML", "JavaScript", "Firebase", "Google Air Quality API", "Bootstrap", "Tailwind CSS"],
  },
];