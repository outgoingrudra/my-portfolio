// Personal Information
export const personalInfo = {
  name: "Rudra Verma",
  title: "Full Stack Web Developer",
  subtitle: "Data Science & Machine Learning Enthusiast",
  bio: "Passionate B.Tech CSE student with a strong foundation in full-stack web development and data science. I thrive on transforming complex problems into elegant solutions through clean code and innovative thinking. Currently exploring the intersection of web technologies and artificial intelligence, with a keen interest in building scalable applications that make a real impact. My goal is to become a skilled Software Engineer at a leading tech company, continuously learning and contributing to cutting-edge projects.",
  
  currentStatus: "3rd Year B.Tech CSE Student",
  college: "Swami Vivekananda University",
  degree: "Bachelor of Technology in Computer Science",
  year: "2022-2026", // Update with your actual years
  
  email: "vrudra671@gmail.com",
  phone: "+91 6291985921",
  location: "Kolkata, India",
  
  github: "https://github.com/outgoingrudra",
  linkedin: "https://linkedin.com/in/rudra-verma-33258a2a3",
  
  resumeLink: "/resume.pdf", // Add your resume to public folder
  
  availability: "Open to Opportunities",
  lookingFor: "Software Engineer Roles | Internships"
};

// Skills organized by categories
export const skills = {
  frontend: [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 90 }
  ],
  
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 85 },
    { name: "Spring Boot", level: 75 }
  ],
  
  database: [
    { name: "MongoDB", level: 80 },
    { name: "MySQL", level: 75 },
    { name: "PostgreSQL", level: 70 },
    { name: "Radis", level: 70 },
  ],
  
  dataScience: [
    { name: "Python", level: 85 },
    { name: "Pandas", level: 80 },
    { name: "NumPy", level: 80 },
    { name: "Scikit-learn", level: 75 },
    { name: "Matplotlib", level: 75 }
  ],
  
  tools: [
    { name: "Git/GitHub", level: 90 },
    { name: "VS Code", level: 95 },
    { name: "Postman", level: 85 },
    { name: "Jupyter", level: 85 },
    { name: "Intellij", level: 85 }
  ]
};

// Education
export const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Swami Vivekananda University",
    location: "Kolkata, India",
    duration: "2023 - 2027",
    grade: "8.86 CGPA", // Update with your actual grade
    description: "Specialization in Web Development and Data Science"
  }
  // Add more education entries if needed
];

// Experience (Add your internships, projects, etc.)
export const experience = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    duration: "2023 - Present",
    description: "Building responsive web applications using React, Node.js, and modern tech stack",
    achievements: [
      "Developed multiple client projects",
      "Implemented RESTful APIs",
      "Optimized application performance"
    ]
  }
  // Add more experience entries as needed
];

// Interests/Hobbies
export const interests = [
  "Web Development",
  "Machine Learning",
  "Problem Solving",
  "Open Source",
  "Competitive Programming",
  "Tech Blogging"
];

// Certificates
export const certificates = [
  {
    id: 1,
    title: "Machine Learning",
    issuer: "Infosys Springboard",
    date: "May 2025",
    image: "/src/assets/certificates/machine-learning.jpg",
    description: "Comprehensive training in machine learning algorithms, model building, and real-world applications. Covered supervised and unsupervised learning techniques with hands-on projects."
  },
  {
    id: 2,
    title: "Data Science",
    issuer: "Infosys Springboard",
    date: "May 2025",
    image: "/src/assets/certificates/data-science.jpg",
    description: "In-depth exploration of data science fundamentals including data analysis, visualization, statistical modeling, and data-driven decision making using Python and its libraries."
  },
  {
    id: 3,
    title: "React",
    issuer: "Ardent Infotech",
    date: "May 2025",
    image: "/src/assets/certificates/react.jpg",
    description: "Advanced React development covering modern hooks, state management, component architecture, and building scalable single-page applications with best practices."
  },
  {
    id: 4,
    title: "Design and Analysis of Algorithms",
    issuer: "NPTEL (IIT Madras)",
    date: "April 2025",
    image: "/src/assets/certificates/design-and-analysis-of-algorithms.jpg",
    description: "Comprehensive study of algorithm design techniques, complexity analysis, sorting algorithms, graph algorithms, dynamic programming, and greedy algorithms."
  },
  {
    id: 5,
    title: "Programming in Modern C++",
    issuer: "NPTEL (IIT Kharagpur)",
    date: "November 2024",
    image: "/src/assets/certificates/programming-in-modern-cpp.jpg",
    description: "Mastered modern C++ programming concepts including object-oriented programming, STL, templates, smart pointers, and advanced C++11/14/17 features."
  }
];


// Social Media Links
export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/outgoingrudra",
    icon: "FaGithub"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/rudra-verma-33258a2a3",
    icon: "FaLinkedin"
  },
  {
    name: "Email",
    url: "mailto:vrudra671@gmail.com",
    icon: "FaEnvelope"
  }
  // Add Twitter, Instagram, etc. if needed
];

// SEO & Meta Information
export const siteMetadata = {
  title: "Rudra Verma - Full Stack Developer Portfolio",
  description: "Full Stack Web Developer specializing in React, Node.js, and Data Science. Building innovative solutions for the web.",
  keywords: "Full Stack Developer, React Developer, Node.js, Data Science, Machine Learning, Web Development, Portfolio",
  author: "Rudra Verma",
  siteUrl: "https://yourdomain.com" // Update with your actual domain
};




// Full Stack Projects
export const fullStackProjects = [
  {
    id: 1,
    title: "Blog Website",
    description: "A comprehensive blogging platform where users can write, view, and comment on blogs. Features AI integration for content assistance and smart recommendations. Built with the MERN stack for a seamless full-stack experience with real-time interactions.",
    type: "fullstack",
    tech: ["MongoDB", "Express", "React", "Node.js", "AI Integration"],
    image: "blogapp.png",
    github: "https://github.com/outgoingrudra/Blog-site",
    live: "https://blog-site-gn4w.vercel.app/"
  },
  {
    id: 2,
    title: "AI Chat App",
    description: "Rudra AI Chat App A sleek, responsive AI chatbot web app built with React. It features a modern dark/light theme toggle, sidebar navigation, and secure environment variable handling for API integration. Deployed using Vercel.",
    type: "fullstack",
    tech: ["MongoDB", "Express", "React", "Node.js", "AI Integration"],
    image: "rudra_ai.png",
    github: "https://github.com/outgoingrudra/Rudra-AI",
    live: "https://rudra-ai-ten.vercel.app/"
  }
  // Add more Full Stack projects here
];

// Data Science Projects
export const dataScienceProjects = [
  {
    id: 1,
    title: "Google Data Analytics",
    description: "Google Trends Search Analysis - A Python project that uses the Pytrends API to visualize search interest for any keyword over the past 12 months. It fetches real-time data from Google Trends and displays it using matplotlib, allowing quick insights into public interest patterns.",
    type: "datascience",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    image: "google_data_analysis.png",
    github: "https://github.com/outgoingrudra/Google-Data-Analysis",
    live: null
  },
  {
    id: 2,
    title: "Zomato Data Analysis",
    description: "Zomato Data Analysis project using Python and Pandas. Exploratory Data Analysis (EDA), data cleaning, and visual insights on restaurant trends from Zomato's dataset.",
    type: "datascience",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    image: "zomato_data_analysis.png",
    github: "https://github.com/outgoingrudra/Zomato-Data-Analysis",
    live: null
  },
  {
    id: 3,
    title: "Airbnb Data Analysis",
    description: "This project explores Airbnb listing data using Python to uncover insights into pricing, availability, and location patterns.",
    type: "datascience",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    image: "airbnb_data_analysis.png",
    github: "https://github.com/outgoingrudra/AirBnb-Data-Analysis",
    live: null
  }
  // Add more Data Science projects here
];

// All projects combined (useful for search/filter functionality)
export const allProjects = [...fullStackProjects, ...dataScienceProjects];
