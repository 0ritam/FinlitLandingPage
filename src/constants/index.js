import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  cred,
  codcx,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  finlit,
  file02,
  framer,
  homeSmile,
  groww,
  gpay,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  zerodha,
} from "../assets";

export const navigation = [
  {
    id: "1",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "2",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Investing",
    text: "Develop interactive tools to teach evidence-based investing practices, focusing on asset growth and risk management.",
    date: "Jan 2024",
    status: "progress",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Fraud Detection",
    text: "Integrate machine learning to simulate real-world fraud scenarios and enhance skills in identifying and preventing fraud.",
    date: "Jan 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Budgeting",
    text: "Create modules that teach foundational budgeting skills, enabling users to plan and track their expenses effectively.",
    date: "Jan 2024",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Savings",
    text: "Design gamified lessons on saving strategies to help users build sustainable habits and achieve financial stability.",
    date: "Jan 2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];


export const collabText =
  "Empowering youth with essential financial skills through innovative technology and adaptive learning.";

export const collabContent = [
  {
    id: "0",
    title: "Personalized Learning",
    text: "Tailored financial education to meet individual needs, ensuring effective skill development.",
  },
  {
    id: "1",
    title: "Interactive Modules",
    text: "Engaging tools for budgeting, saving, investing, and fraud detection, fostering practical skills.",
  },
  {
    id: "2",
    title: "Secure and Scalable Platform",
    text: "A robust platform ensuring data security and scalability for future financial literacy needs.",
  },
];


export const collabApps = [
  {
    id: "0",
    title: "Zerodha",
    icon: zerodha,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Cred",
    icon: cred,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Groww",
    icon: groww,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "codcx",
    icon: codcx,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Gpay",
    icon: gpay,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Empower Financial Decisions",
    text: "Equip young learners with essential skills like budgeting, saving, and investing to confidently manage finances.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Promote Fraud Awareness",
    text: "Leverage machine learning to simulate real-world fraud scenarios and teach fraud prevention techniques.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Accessible Learning Tools",
    text: "Connect learners across devices for a seamless and interactive educational experience.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Data-Driven Decisions",
    text: "Teach evidence-based investment practices to ensure asset growth and risk management.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Cultivate Financial Habits",
    text: "Encourage sustainable financial behaviors through gamified and adaptive tools.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Scalable and Secure",
    text: "Built with a future-proof architecture and robust data privacy measures for reliability and scalability.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];


export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
