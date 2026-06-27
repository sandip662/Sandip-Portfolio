import { Skills } from "../app/components/skills/skills";

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Sandip Mondal',
    role: '.NET Full Stack Developer',
    email: 'sandipmondal9748@gmail.com',
     phone: '+91  ',
    
    location: 'West Bengal, India',
    
    summary:
      'Passionate .NET Full Stack Developer with experience in ASP.NET Core, Angular and SQL Server.',
    image: '/images/profile.png',
     resume: '/cv/CV.pdf'
  },
socials: {
  linkedin: 'https://www.linkedin.com/in/Sandip-mondal-bb8789197/',
  github: 'https://github.com/sandip662',
  email: 'mailto:sandipmondal9748@gmail.com'
},
  skills: [
  {
    category: 'Frontend',
    items: [
      {
        name: 'Angular',
        image: '/skills/angular.svg'
      },
      {
        name: 'TypeScript',
        image: '/skills/typescript.svg'
      },
      {
        name: 'HTML',
        image: '/skills/html.svg'
      },
      {
        name: 'CSS',
        image: '/skills/css.svg'
      },
      {
        name: 'Bootstrap',
        image: '/skills/bootstrap.svg'
      },
      {
        name: 'JS',
        image: '/skills/javascript.svg'
      }
    ]
  },

  {
    category: 'Backend',
    items: [
      {
        name: '.NET',
        image: '/skills/dotnet.svg'
      },
      {
        name: '.NET Core',
        image: '/skills/dotnetcore.svg'
      },
      {
        name: 'C#',
        image: '/skills/csharp.svg'
      },
      {
        name: 'Rest API',
        image: '/skills/restapi.svg'
      },
      {
        name: 'SQL Server',
        image: '/skills/sqlserver.svg'
      }
    ]
  },

  

  {
    category: 'Tools',
    items: [
       {
        name: 'Visual Studio',
        image: '/skills/VisualStudio.svg'
      },
       {
        name: 'Vs Code',
        image: '/skills/vscode.svg'
      },
      {
        name: 'Git',
        image: '/skills/git.svg'
      },
      {
        name: 'Github',
        image: '/skills/github.svg'
      },
      {
        name: 'Postman',
        image: '/skills/postman.svg'
      }
    ]
  }
],

 experiences: [
  {
    company: 'Teknowledge Analytic Services Pvt. Ltd',
    role: 'Associate Software Developer',
    duration: 'May 2024 - Present',
    location: 'Kolkata, India',
       image: '/experiences/teknowledge.png',
       
    responsibilities: [
      'Designed middleware-driven RBAC system for role-based authorization.',
      'Built configurable multi-level approval workflow system.',
      'Developed SaaS billing trigger mechanism with automated report generation.',
      'Developed Advance Application module with approval workflows.',
      'Built Staff Shifting module enabling smooth employee transfers.',
      'Fixed critical bugs and integrated approval workflows.',
      'Implemented ticketing system for compliance tracking.',
      'Developed ticket management module with assignment and tracking.',
      'Implemented centralized file upload system.',
      'Built dashboard for monitoring tickets across applications.'
    ],
    skills: [
      'html','css','js','boostrap','dotnet core','C#','sql server','git','github','rest api',
    
    ]
  },
    
],

projects: [
  {
    title: 'Global Application',

    image: '/projects/global_app.png',

    description:
      'Enterprise application featuring dynamic RBAC and workflow automation.',

    technologies: [
      'ASP.NET Core',
      'ADO .NET',
      'SQL Server',
      'C#',
      'html','css',
      'js'
    ],

    github: null,
    live: null
  },

  {
    title: 'Daily Blogs',

    image: '/projects/bloggieweb.png',

    description:
      'Blogging platform with JWT authentication.',

    technologies: [
      'ASP.NET Core',
      'Entity Framework',
      'SQL Server',
      'C#',
      'html','css',
      'js'
    ],

    github: null,

    live: null
  }
],

educations: [
  {
    degree: 'B.Tech in Information Technology',
    institution: 'Guru Nanak Institute of Technology',
    duration: '2019 - 2023',
    location: 'Kolkata, West Bengal',
    score: 'CGPA: 8.35',
    image: '/education/gnit.png'
  },
  {
    degree: 'Higher Secondary',
    institution: 'Banamalipur Priyanath Institution',
    duration: '2017 - 2018',
    location: 'West Bengal',
    score: '',
    image: '/education/wbchse.png'
  },
  {
    degree: 'Secondary',
    institution: 'Jagannathpur Arabinda Palli Bharati Vidyalaya',
    duration: '2015 - 2016',
    location: 'West Bengal',
    score: '',
    image: '/education/wbbse.png'
  }
],

certifications: [
  {
    title: 'Foundational C# with Microsoft',
    issuer: 'freeCodeCamp',
    year: '2023',
    image: '/images/microsoft.png'
  },
  {
    title: 'SQL Server Course',
    issuer: 'Udemy',
    year: '2024',
    image: '/images/udemy.png'
  }
]
};