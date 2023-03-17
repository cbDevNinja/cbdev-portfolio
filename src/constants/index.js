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
    ninja,
    yalo,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    banking,
    whatisgpt3,
    finedine,
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
        title: "Wordpress Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: web,
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
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
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
];

const experiences = [
    {
        title: "Junior Front-End Developer",
        company_name: "Ninja Multimedia",
        icon: ninja,
        iconBg: "#ffffff",
        date: "September 2017 - May 2020",
        points: [
            "Developing and maintaining web applications using Wordpress and other related technologies.",
            "Collaborating with cross-functional teams including designers and product managers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Front-End Developer",
        company_name: "Digital Yalo",
        icon: yalo,
        iconBg: "#E6DEDD",
        date: "May 2020 - Feb 2023",
        points: [
            "As a leader in the development team, I successfully spearheaded the creation of a comprehensive component system for Choosebooster's complete overhaul. This effort resulted in a streamlined and user-friendly system, allowing the client to easily create pages with greater efficiency.",
            "Managed front-end development of several new websites for BG, including Green Giant Canada and Crisco US. My contributions to the development process included coding and implementing the new look for these sites in Wordpress.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Applied knowledge of Google Analytics and Google Data Studio to create useful charts and reports for data analysis for clients.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "What is GPT?",
        description:
            "A GPT-3 mockup Figma design brought to life using React JS. The result is a functional and responsive web application that showcases the power of GPT-3.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: whatisgpt3,
        source_code_link: "https://cbdevninja.github.io/what-is-gpt3/",
    },
    {
        name: "Fine Dinning",
        description:
            "Built a visually appealing one-page ReactJS site for a fine dining restaurant, featuring appetizing imagery and intuitive navigation for a delightful user experience.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
        ],
        image: finedine,
        source_code_link: "https://cbdevninja.github.io/fine-dining/",
    },
    {
        name: "Hoobank",
        description:
            "Designed and developed a modern bank UI using ReactJS and Figma, featuring eye-catching gradients and full responsiveness for seamless use across all devices.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "green-text-gradient",
            },
        ],
        image: banking,
        source_code_link: "https://cbdevninja.github.io/bank_modern_app",
    },
];

export { services, technologies, experiences, testimonials, projects };
