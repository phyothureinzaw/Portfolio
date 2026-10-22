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
    title: 'AI Document Processing Platform',
    subtitle: 'OCR & GPT Document Extraction Platform',
    label: 'Fusion Solution',
    description: [
      'A multi-portal AI platform that turns PDFs and images into structured data. Customers upload documents, choose a document model, prompt, or configured flow, optionally preprocess files (such as rotation correction), then run OCR or Azure Document Intelligence and use GPT to extract fields such as supplier, invoice number, date, and total. Results and usage are saved for review, optional human validation, and export.',
      'An Admin Portal manages companies, accounts, credits, expiry dates, AI models, and service endpoints, while the Customer Portal covers OCR, flows, validation, data, and knowledge management. Both portals share one backend with separate JWT authentication schemes, and public company-specific links open selected services without login after company and conversation validation.',
      'Batch and long-running work runs in the background with Hangfire, including scheduled jobs for company expiry, reminders, low-credit alerts, and endpoint statistics. Storage is split by purpose across SQL Server, Azure Blob Storage, PostgreSQL with pgvector for vector search, and Azure Key Vault for secrets.',
    ],
    stack: [
      'Vue.js',
      'TypeScript',
      'Axios',
      'ASP.NET Core Web API',
      'JWT',
      'Entity Framework Core',
      'Hangfire',
      'SQL Server',
      'PostgreSQL',
      'pgvector',
      'Azure Blob Storage',
      'Azure Key Vault',
      'Azure Document Intelligence',
      'OCR',
      'GPT',
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
  {
    title: 'AI Resume Analyzer',
    subtitle: 'Resume Analysis & Job Matching Platform',
    label: 'Personal Project',
    description: [
      'An AI-powered resume analysis platform that helps users compare their resumes with job descriptions. Users can securely upload or manage resumes, add job descriptions, and receive AI-generated insights about requirement coverage, matching evidence, missing skills, and improvement suggestions.',
      'Uses Google Gemini for analysis, PostgreSQL for persistent storage, and a background worker system to process analysis requests reliably. Includes secure authentication, PDF resume extraction, evidence-based requirement scoring, dashboards, validation safeguards, and automated testing.',
    ],
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'React Router',
      'TanStack Query',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Google Gemini API',
      'Argon2id',
      'Zod',
      'PDF Parsing',
      'Vitest',
      'Supertest',
    ],
  },
];
