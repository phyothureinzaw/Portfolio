import profileImg from '../image/profile.jpg';
import companyLogo from '../image/company logo.jpg';

export const profile = {
  name: 'Phyo Thu Rein Zaw',
  role: 'Full-Stack Developer',
  tagline:
    'I build reliable web applications with React, Vue.js and ASP.NET Core — from clean, responsive interfaces to secure, well-structured APIs.',
  photo: profileImg,
  dob: '03 August 2001',
  education: 'BSc. Chemistry',
  email: 'phyothureinzaw77@gmail.com',
  phone: '09956649811',
  github: 'https://github.com/phyothureinzaw',
  linkedin: 'https://www.linkedin.com/in/phyo-thu-rein-zaw-1b5573324/',
};

export const skills = [
  {
    title: 'Frontend',
    items: ['React.js', 'Vue.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Redux Toolkit'],
  },
  {
    title: 'Backend',
    items: ['C#', 'ASP.NET Web API', 'Entity Framework Core', 'REST APIs'],
  },
  {
    title: 'Databases & Tools',
    items: ['SQL Server', 'MySQL', 'PostgreSQL', 'Microsoft Azure', 'Git', 'Swagger', 'Postman'],
  },
];

export const experience = [
  {
    company: 'Fusion Solution Co., Ltd',
    logo: companyLogo,
    position: 'Software Developer',
    period: 'Feb 2025 — Present',
    summary:
      'Developing and maintaining JARVIZ, a multi-tenant workforce management and HR operations platform, across both the ASP.NET Core backend and Vue.js frontend applications.',
  },
];

export const projects = [
  {
    title: 'JARVIZ',
    subtitle: 'Workforce Management & HR Operations Platform',
    label: 'Fusion Solution',
    description: [
      'A multi-tenant workforce management and HR operations platform that helps organizations manage employees and daily workforce activities from a centralized system. It includes separate customer and administrator applications with role-based access for employees, managers, HR users, and system administrators.',
      'Key features include employee and company management, attendance and check-in/check-out tracking, leave requests and approval workflows, overtime management, petty cash requests, announcements, notifications, reporting, PDF/Excel exports, organization settings, and mobile-friendly employee workflows.',
    ],
    stack: [
      'ASP.NET Core Web API',
      'JWT',
      'Entity Framework Core',
      'SQL Server',
      'API Versioning',
      'Swagger / OpenAPI',
      'Azure',
      'Hangfire',
      'Vue.js',
      'Vuex',
      'Vue Router',
      'Vuetify',
      'Axios',
      'Vue i18n',
    ],
  },
  {
    title: 'Expense Tracker',
    subtitle: 'Personal Finance Management Web Application',
    label: 'Personal Project',
    description: [
      'A full-stack personal finance application that helps users record, categorize, and analyze their expenses, with secure JWT authentication, category and expense management, monthly budgeting, recurring expense tracking, currency preferences, and interactive dashboard charts.',
      'Users can filter and paginate expenses, compare monthly spending, monitor budget usage, and copy budgets from previous months.',
    ],
    stack: [
      'React',
      'Vite',
      'ASP.NET Core Web API',
      'Entity Framework Core',
      'SQL Server',
      'ASP.NET Core Identity',
      'JWT',
    ],
  },
  {
    title: 'Inventory Management System',
    subtitle: 'Inventory, Purchasing & Sales Platform',
    label: 'Personal Project',
    description: [
      'A full-stack application for managing inventory, purchasing, sales, and stock movements, with JWT-based authentication for Admin and Staff roles, product and supplier management, stock-in/stock-out operations, purchase and sales orders, customer and supplier returns, and real-time inventory tracking.',
      'Includes dashboards for active, low-stock and out-of-stock products, plus stock reservations, fulfillment, receiving, transaction history, date-range filtering, request idempotency, optimistic concurrency control, and SQL Server transactions for data consistency. Automated API and frontend tests validate core workflows.',
    ],
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Material UI',
      'React Router',
      'TanStack Query',
      'Recharts',
      'ASP.NET Core 8',
      'Entity Framework Core',
      'ASP.NET Identity',
      'JWT',
      'SQL Server',
    ],
  },
];
