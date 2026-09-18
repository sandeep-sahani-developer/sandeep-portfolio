export const filters = [
  { id: "all", label: "All" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "business", label: "Business" },
  { id: "informative", label: "Informative" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "api", label: "API" },
];

export const projects = [
  {
    id: "mrearth",
    title: "MREarth",
    type: "Business / Informative Website",
    cats: ["business", "informative"],
    live: "https://mrearthing.dmeagle.com/",
    barLabel: "mrearthing.dmeagle.com",
    kicker: "business / informative website",
    description:
      "A real-world website developed with a focus on professional presentation, responsive UI, usability and business-oriented content.",
    tech: ["HTML", "CSS", "JavaScript", "ASP.NET", "C#", "SQL Server"],
    features: ["Responsive layout", "Business-oriented content", "Usability focused navigation", "Database driven pages"],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Web Application",
    type: "E-Commerce",
    cats: ["ecommerce"],
    barLabel: "e-commerce web application",
    kicker: "product browsing · cart · checkout",
    description:
      "A complete e-commerce web application designed to provide users with a smooth product browsing, shopping and checkout experience.",
    tech: ["React.js", "JavaScript", "ASP.NET", "C#", "SQL Server", "Bootstrap"],
    features: [
      "Product listing", "Product details", "Category filtering", "Search",
      "Shopping cart", "Wishlist", "Checkout", "Order management",
      "Admin panel", "Product management", "Responsive design",
    ],
  },
  {
    id: "mern",
    title: "MERN E-Commerce Platform",
    type: "Full-Stack Web Application",
    cats: ["fullstack", "ecommerce"],
    barLabel: "mern-ecommerce · localhost:3000",
    kicker: "react · node · express · mongodb",
    description:
      "A full-stack e-commerce application built using the MERN stack with authentication, product management and REST API integration.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST API", "Postman"],
    features: [
      "User registration", "User login", "JWT authentication", "Category management",
      "Product CRUD", "Product search", "REST API", "MongoDB integration", "Admin functionality",
    ],
  },
  {
    id: "business",
    title: "Business Website",
    type: "Business Website",
    cats: ["business"],
    barLabel: "business website",
    kicker: "company · services · contact",
    description:
      "A modern responsive business website focused on presenting company information, services and business offerings through a clean professional interface.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "ASP.NET", "C#"],
    features: [
      "Responsive design", "Company information", "Services section",
      "Contact section", "Professional UI", "Mobile-friendly layout",
    ],
  },
  {
    id: "informative",
    title: "Informative Website",
    type: "Informative Website",
    cats: ["informative"],
    barLabel: "informative website",
    kicker: "content pages · dynamic data",
    description:
      "An informative website designed to organize and present information in a simple, accessible and visually engaging way.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "ASP.NET", "SQL Server"],
    features: [
      "Information pages", "Responsive UI", "Navigation",
      "Dynamic content", "Contact functionality", "Database integration",
    ],
  },
  {
    id: "restapi",
    title: "REST API Integration",
    type: "API Development & Integration",
    cats: ["api", "fullstack"],
    barLabel: "postman · api workspace",
    kicker: "GET · POST · PUT · DELETE",
    description:
      "Hands-on experience connecting frontend applications with REST APIs and testing API endpoints using Postman.",
    tech: ["Node.js", "Express.js", "REST API", "Postman", "MongoDB"],
    features: [
      "API requests", "GET / POST / PUT / DELETE", "API testing",
      "Authentication", "JSON data handling", "Frontend-backend integration",
    ],
  },
];
