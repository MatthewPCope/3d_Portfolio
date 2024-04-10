import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    Flask,
    html,
    css,
    reactjs,
    redux,
    Bootstrap,
    MySQL,
    vidproquo,
    Java,
    tailwind,
    nodejs,
    mattgpt,
    mongodb,
    git,
    figma,
    Python1,
    github,
    docker,
    meta,
    starbucks,
    dojoLogo,
    tesla,
    shopify,
    esquire,
    carrent,
    audio,
    barkeepers,
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
      id: "projects",
      title: "Projects"
    },
    {
      id: "contact",
      title: "Contact",
    }
  ];
  
  const services = [
    {
      title: "JavaScript",
      icon: web,
    },
    {
      title: "React.js",
      icon: mobile,
    },
    {
      title: "Node.js",
      icon: backend,
    },
    {
      title: "MongoDb",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Python",
      icon: Python1,
    },
    {
      name: "Java",
      icon: Java,
    },
    
    
    {
      name: "Bootstrap",
      icon: Bootstrap,
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
      name: "MySQL",
      icon: MySQL,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    
    {
      name: "git",
      icon: git,
    },
    
    
  ];
  
  const experiences = [
    {
      title: "In-House Legal Videographer",
      company_name: "Esquire Deposition Solutions",
      icon: esquire,
      iconBg: "#383E56",
      date: "October 2010 - December 2015",
      points: [
        "Ensured quality control of video department at San Francisco branch.",
        "Facilitated effective communication between calendar team, clients, and myself.",
        "Maintained accurate documentation of worksheets and order forms for depositions.",
      ],
    },
    {
      title: "Founder",
      company_name: "Vid Pro Quo, Inc",
      icon: vidproquo,
      iconBg: "#E6DEDD",
      date: "Jan 2016 - March 2023",
      points: [
        "Founded a successful company specializing in legal videography services.",
        "Secured contracts with leading court reporting firms in the SF Bay Area.",
        "Demonstrated proficiency in financial management through thorough tracking of invoices, expenses, and billing using QuickBooks.",
        "Collaborated closely with attorney clients, court reporters, and other stakeholders to ensure compliance with court-approved video record requirements.",
      ],
    },
    {
      title: "Aspiring Web Developer",
      company_name: "Coding Dojo",
      icon: dojoLogo,
      iconBg: "#383E56",
      date: "Mar 2023 - Dec 2023",
      points: [
        "Gained proficiency in multiple programming languages relevant to full-stack development, such as Javascript, Python and Java",
        "Learned how to build user interfaces and client-side experiences using HTML, CSS, and JavaScript frameworks like React.",
        "Developed an understanding of server-side programming concepts and learned to create and manage databases, construct APIs, and handle server-side logic.",
        "Integrated front-end and back-end technologies to create seamless, functional web applications from start to finish."
      ],
    },
    {
      title: "Aspiring Full Stack Developer",
      company_name: "Coding Dojo",
      icon: dojoLogo,
      iconBg: "#383E56",
      date: "Mar 2023 - Dec 2023",
      points: [
        "Integrated front-end and back-end technologies to create seamless, functional web applications from start to finish.",
        "Became proficient with version control systems like Git, learning how to manage code changes, collaborate with other developers, and use platforms like GitHub.",
        "Learned key software development principles and practices, including object-oriented programming, MVC architecture, RESTful API design, and more.",
        "Gained experience deploying applications to the web, understanding web hosting cloud services like AWS, and operations essentials for maintaining live applications."
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
      name: "Audio Addiction",
      description:
        "Web-based platform that allows users to log and track all of their audio gear",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "node",
          color: "pink-text-gradient",
        },
      ],
      image: audio,
      source_code_link: "https://github.com/MatthewPCope/Audio_Addiction_Final",
    },
    {
      name: "Barkeeper's Companion",
      description:
        "Web application that allows bartenders to input and track their recipes as well as various riffs on cocktails",
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
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: barkeepers,
      source_code_link: "https://github.com/MatthewPCope/Barkeepers_Companion_Remix",
      weblink: "https://reverb.com/"
    },
    {
      name: "MattGPT",
      description:
        "ChatGPT clone utilizing OpenAI API.",
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
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: mattgpt,
      source_code_link: "https://github.com/MatthewPCope/MattGPT",
      weblink: "https://mattgpt-a969f.web.app/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };