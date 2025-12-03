import {
  ExperienceItem,
  EducationItem,
  ProjectItem,
  SkillCategory,
} from "./types";

export const PERSONAL_INFO = {
  name: "Simileoluwa Ajisafe",
  role: "Data and MIS Specialist",
  email: "simileoluwa.ajisafe@gmail.com",
  phone: "0814-575-8025",
  location: "Lagos, Nigeria",
  bio: "A highly organized and hardworking professional seeking to leverage acquired academic knowledge and technical skills. With a background in Political Science and a certificate in Full Stack Web Development, I bridge the gap between data management, administrative efficiency, and modern web solutions. I focus on customer satisfaction, data accuracy, and creating user-friendly digital experiences.",
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Technical & Development",
    skills: [
      "Microsoft Office Suite",
      "Data Management",
      "MIS Administration",
    ],
  },
  {
    category: "Management & Soft Skills",
    skills: [
      "Problem Solving",
      "Time Management",
      "Communication",
      "Detail-Oriented",
      "Customer Service",
      "Team Leadership",
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    role: "Data and MIS Specialist",
    company: "Charterhouse Lagos",
    period: "April 2024 - Present",
    description: [
      "Develop and maintain the school's Management Information System (MIS).",
      "Collect and update student records, ensuring data accuracy and privacy compliance.",
      "Train staff on data entry and MIS usage; generate attendance and welfare reports.",
    ],
  },
  {
    id: 2,
    role: "Personal Assistant to Head of Primary",
    company: "Charterhouse Lagos",
    period: "Sept 2024 - Sept 2025",
    description: [
      "Manage calendar, schedule meetings, and organize appointments for optimal time management.",
      "Act as liaison between the Head of Primary, parents, teachers, and school departments.",
      "Handle sensitive information with high confidentiality and discretion.",
    ],
  },
  {
    id: 3,
    role: "Sales Attendant",
    company: "Prince Ebeano Supermarket",
    period: "Jan 2023 - Feb 2024",
    description: [
      "Handled customer complaints and inquiries.",
      "Managed inventory checks and product recommendations.",
      "Built long-term customer relationships based on trust.",
    ],
  },
  {
    id: 4,
    role: "Sales & Customer Service Executive",
    company: "GIG Bookshops & Stationeries",
    period: "Nov 2022 - Jan 2023",
    description: [
      "Updated sales records and inventory trackers daily.",
      "Negotiated with vendors and managed creditor/debtor lists.",
    ],
  },
  {
    id: 5,
    role: "Administrative Assistant (NYSC)",
    company: "Wesley University, Ondo",
    period: "Nov 2021 - Nov 2022",
    description: [
      "Prepared official transcripts and collated results.",
      "Tutored IJMB and JUPEB students in Government.",
      "Provided administrative support to senior management.",
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 1,
    degree: "Certificate in Full Stack Web Development",
    institution: "Gomycode",
    year: "Aug - Dec 2023",
    details: "Completed intensive training in modern web technologies.",
  },
  {
    id: 2,
    degree: "BSc. Political Science",
    institution: "University of Ilorin",
    year: "2021",
    details: "Second Class Honors: Upper Division",
  },
];

// Placeholder projects based on the Gomycode certification context
export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "School Data Dashboard",
    description:
      "A conceptual dashboard for managing student records, attendance, and grades, inspired by my work as an MIS Officer.",
    tags: ["React", "Tailwind", "Recharts", "Data Visualization"],
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 2,
    title: "E-Commerce Storefront",
    description:
      "A responsive e-commerce application allowing users to browse products, add to cart, and simulate checkout.",
    tags: ["JavaScript", "HTML/CSS", "API Integration"],
    image: "https://picsum.photos/800/600?random=2",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A productivity tool for organizing daily tasks, setting priorities, and tracking progress.",
    tags: ["React", "LocalStorage", "Drag & Drop"],
    image: "https://picsum.photos/800/600?random=3",
  },
];
