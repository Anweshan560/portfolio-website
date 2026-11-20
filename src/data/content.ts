// All site copy lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Anweshan Rai',
  firstName: 'Anweshan',
  role: 'Senior QA Engineer',
  location: 'Kathmandu, Nepal',
  company: 'ClinicSaver',
  workMode: 'Remote · On-site',
  availability: 'Open to QA roles',
  email: 'anweshan2000@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anweshan-rai-818650243/',
  linkedinLabel: 'linkedin.com/in/anweshan-rai',
  github: 'https://github.com/Anweshan560',
  githubLabel: 'github.com/Anweshan560',
  cv: '/Anweshan-Rai-CV.pdf',
};

export const hero = {
  headline: 'I find the bugs',
  highlight: 'before your users do.',
  intro:
    'Senior QA engineer testing HealthTech, AI and e-commerce products used across the UAE, Nepal, Indonesia and beyond — through clear test plans, thorough functional and regression testing, and bug reports developers love to receive.',
};

// Lines that "run" in the hero terminal.
export const terminalTests = [
  'analyzes requirements & acceptance criteria',
  'writes test plans & test cases',
  'runs functional, regression & integration tests',
  'validates APIs with Postman',
  'reports bugs devs reproduce first try',
  'tests across browsers, devices & screens',
  'supports UAT & release sign-off',
];

export const stats = [
  { value: '3+', label: 'Years in quality assurance' },
  { value: '9', label: 'Products tested end to end' },
  { value: '4', label: 'Markets shipped to — UAE, Nepal, Indonesia, Global' },
  { value: 'BCA', label: 'Bachelor in Computer Application' },
];

export const process = [
  { title: 'Analyze', text: 'Review requirements, ask questions, define acceptance criteria.' },
  { title: 'Plan', text: 'Scope, risks, environments and what to test first.' },
  { title: 'Design', text: 'Test cases with boundaries, negatives and edge cases covered.' },
  { title: 'Execute', text: 'Functional, regression and exploratory runs across browsers and devices.' },
  { title: 'Report', text: 'Clear defects, triage with devs, visible quality metrics.' },
  { title: 'Sign off', text: 'Retest, regression pass, go/no-go with confidence.' },
];

export const skillCategories = [
  { id: 'all', label: 'All' },
  { id: 'manual', label: 'Manual' },
  { id: 'design', label: 'Test Design' },
  { id: 'api', label: 'API & Automation' },
  { id: 'ai', label: 'AI Testing' },
  { id: 'tools', label: 'Tools & Process' },
] as const;

export const skills = [
  { name: 'Functional testing', cat: 'manual', desc: 'Requirement-driven checks that every feature does what it should.' },
  { name: 'Regression & smoke testing', cat: 'manual', desc: 'Keeping every release stable as new features land.' },
  { name: 'Integration testing', cat: 'manual', desc: 'Verifying modules and services work together end to end.' },
  { name: 'Usability testing', cat: 'manual', desc: 'Spotting friction and confusing flows before users do.' },
  { name: 'Cross-browser & responsive', cat: 'manual', desc: 'Coverage across browsers, devices and screen sizes.' },
  { name: 'UAT support', cat: 'manual', desc: 'Working with stakeholders to validate real business flows.' },
  { name: 'Test case design', cat: 'design', desc: 'Boundary, negative and edge-case coverage from requirements.' },
  { name: 'Black & white box testing', cat: 'design', desc: 'Testing from both the user’s view and the code’s logic.' },
  { name: 'Requirement analysis', cat: 'design', desc: 'Turning specs into clear, testable acceptance criteria.' },
  { name: 'Bug reporting', cat: 'design', desc: 'Reproducible defects with steps, evidence and impact.' },
  { name: 'QA documentation', cat: 'design', desc: 'Test plans, release notes and trackers the team relies on.' },
  { name: 'Postman', cat: 'api', desc: 'API request testing, validating status codes and response data.' },
  { name: 'Performance testing', cat: 'api', desc: 'Checking how features hold up under load.' },
  { name: 'Selenium WebDriver', cat: 'api', desc: 'Automating web tests by locating and driving page elements.' },
  { name: 'Claude Code agent automation', cat: 'ai', desc: 'Using Claude Code agents to automate test runs, test case generation and repetitive QA tasks.' },
  { name: 'AI response testing', cat: 'ai', desc: 'Validating AI replies for accuracy, relevance, tone and safe handling of edge cases.' },
  { name: 'AI tools usage', cat: 'ai', desc: 'Using AI tools to speed up test planning, documentation and bug analysis.' },
  { name: 'CI/CD configuration', cat: 'tools', desc: 'Setting up pipelines that build, test and deploy on every change.' },
  { name: 'Git & GitLab', cat: 'tools', desc: 'Issue tracking, Kanban boards and version control.' },
  { name: 'Figma & InVision', cat: 'tools', desc: 'Testing builds against designs and user flows.' },
  { name: 'Agile / Scrum', cat: 'tools', desc: 'QA embedded in stand-ups, sprint planning and reviews.' },
] as const;

export const pyramid = [
  { title: 'Exploratory & UAT', sub: 'Charters · usability · edge cases · stakeholder sign-off' },
  { title: 'End-to-end UI', sub: 'Functional · cross-browser · responsive · Selenium' },
  { title: 'API & integration', sub: 'Postman · status & data validation · integration flows' },
  { title: 'Smoke & static checks', sub: 'Requirement reviews with developers · smoke tests on every build' },
];

export const experience = [
  {
    tag: 'v4 · CURRENT',
    current: true,
    dates: 'Feb 2026 — Present',
    place: 'Dubai Internet City, UAE',
    title: 'Senior QA Engineer',
    company: 'ClinicSaver FZ-LLC',
    points: [
      'Own quality across ClinicSaver, Clinovy, Replyn and Dukkanti — HealthTech, AI messaging and e-commerce products for the UAE market.',
    ],
    stack: ['HealthTech', 'AI products', 'E-commerce'],
  },
  {
    tag: 'v3',
    dates: 'Jun 2024 — Jan 2026',
    place: 'Kathmandu, Nepal',
    title: 'Associate QA',
    company: 'Innovatetech Pvt. Ltd.',
    points: [
      'Collaborated with development and design teams to ensure quality across multiple web and platform-based applications.',
      'Created and maintained test plans, test cases and test scripts for functional, regression and integration testing.',
      'Executed manual tests to catch bugs and usability issues early, and helped streamline testing processes across the QA team.',
    ],
    stack: ['Postman', 'GitLab', 'Figma', 'Agile'],
  },
  {
    tag: 'v2',
    dates: 'Apr 2024 — Jun 2024',
    place: 'Kathmandu, Nepal',
    title: 'QA Intern',
    company: 'Innovatetech Pvt. Ltd.',
    points: [
      'Learned and applied core QA practices including regression and smoke testing.',
      'Worked with developers and designers to understand application flows and user scenarios.',
    ],
    stack: ['Regression', 'Smoke testing'],
  },
  {
    tag: 'v1',
    dates: 'Feb 2023 — Feb 2024',
    place: 'Kathmandu, Nepal',
    title: 'Data Analyst',
    company: 'CloudFactory',
    points: [
      'Cleaned, organized and validated large datasets in Excel for accuracy and consistency.',
      'Collaborated with remote teams to hit daily and weekly targets under tight deadlines.',
    ],
    stack: ['Excel', 'Data validation'],
  },
];

export const education = {
  tag: 'v0',
  dates: '2018 — 2022',
  title: 'Education',
  items: [
    { icon: 'degree', text: 'Bachelor in Computer Application (BCA) · Janamaitri Multiple Campus' },
  ],
};

export const projectCategories = [
  { id: 'all', label: 'All' },
  { id: 'healthtech', label: 'HealthTech' },
  { id: 'ai', label: 'AI & SaaS' },
  { id: 'edtech', label: 'EdTech' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'uat', label: 'UAT & coordination' },
] as const;

export const projects = [
  {
    id: 'TC-001',
    current: true,
    cats: ['healthtech'],
    catLabel: 'HealthTech',
    title: 'ClinicSaver',
    desc: 'All-in-one UAE platform connecting patients, clinics and medical suppliers — bookings, procurement and flexible payments.',
    stack: ['Functional', 'Regression', 'Payments'],
    scope: 'Patient bookings, clinic workflows, supplier procurement and payment flows.',
    approach: 'Risk-based functional and regression testing across web and mobile, with extra focus on booking and payment journeys.',
    result: 'Ongoing — keeping releases stable for clinics and patients across the UAE.',
    url: 'https://clinicsaver.com/en',
  },
  {
    id: 'TC-002',
    current: true,
    cats: ['healthtech', 'ai'],
    catLabel: 'HealthTech · AI',
    title: 'Clinovy',
    desc: 'AI-powered patient inbox that unifies WhatsApp, Instagram, phone and other channels so clinics never miss a lead.',
    stack: ['AI features', 'Integrations', 'Functional'],
    scope: 'Unified inbox, channel integrations and lead tracking from first message to booked appointment.',
    approach: 'End-to-end testing of messaging channels, AI responses and the lead-to-appointment pipeline.',
    result: 'Ongoing — making sure no patient message slips through the cracks.',
    url: 'https://clinovy.ai/',
  },
  {
    id: 'TC-003',
    current: true,
    cats: ['ai'],
    catLabel: 'AI & SaaS',
    title: 'Replyn',
    desc: 'One inbox for WhatsApp, Instagram, Messenger and TikTok, with AI that responds, qualifies leads and manages conversations.',
    stack: ['AI features', 'Integrations', 'Regression'],
    scope: 'Multi-channel inbox, AI replies and lead qualification.',
    approach: 'Functional and integration testing across every connected channel, plus regression on each release.',
    result: 'Ongoing — reliable conversations across every channel.',
    url: 'https://replyn.io',
  },
  {
    id: 'TC-004',
    current: true,
    cats: ['ecommerce'],
    catLabel: 'E-commerce',
    title: 'Dukkanti',
    desc: 'Grocery delivery platform for the UAE — favorite products ordered from home and delivered to the door.',
    stack: ['Checkout', 'Cross-device', 'Regression'],
    scope: 'Product catalog, cart, checkout and delivery flows.',
    approach: 'Functional, regression and cross-device testing of the full shopping journey.',
    result: 'Ongoing — smooth ordering from browse to delivery.',
    url: 'https://dukkanti.ae',
  },
  {
    id: 'TC-005',
    cats: ['edtech', 'uat'],
    catLabel: 'EdTech · UAT',
    title: 'Kung Fu Quiz (KFQ)',
    desc: 'Quiz platform where I coordinated design and development, ran sprint ceremonies and supervised user acceptance testing.',
    stack: ['GitLab', 'Figma', 'InVision', 'Excel'],
    scope: 'Requirements, sprint tracking, UAT and release readiness for the full platform.',
    approach: 'Gathered and documented requirements with the PM, devs and designers; tracked milestones on GitLab Kanban boards.',
    result: 'Production-ready releases after structured UAT and final reviews, with full documentation from requirements to release notes.',
    url: 'https://www.kungfuquiz.com/',
  },
  {
    id: 'TC-006',
    cats: ['edtech'],
    catLabel: 'EdTech',
    title: 'My Second Teacher (MST)',
    desc: 'Learning platform with Global, Nepal and Indonesia versions — tested for stability, performance and a consistent experience.',
    stack: ['Functional', 'Regression', 'Integration'],
    scope: 'Every platform version across Global, Nepal and Indonesian markets.',
    approach: 'Functional, regression, integration and usability testing; joined requirement reviews and test planning sessions.',
    result: 'Defects documented, prioritized and tracked with developers through to timely resolution.',
    url: 'https://app.mysecondteacher.com/',
  },
  {
    id: 'TC-007',
    cats: ['edtech'],
    catLabel: 'EdTech',
    title: 'Interactive Video Publisher (IVy)',
    desc: 'Platform for uploading educational videos and embedding interactive questions that trigger during playback.',
    stack: ['Functional', 'Usability', 'Bug reporting'],
    scope: 'Video upload, question embedding and playback-triggered questions.',
    approach: 'Verified question timing during playback and tested every question type and format for correct response capture.',
    result: 'Bugs reported and fixed with developers, improving platform reliability and learner engagement.',
    url: 'https://ivy.advancedpedagogy.com',
  },
  {
    id: 'TC-008',
    cats: ['edtech'],
    catLabel: 'EdTech',
    title: 'Jelajah Ilmu',
    desc: 'Learning platform for Indonesian students, tested for functional stability and a smooth learner experience.',
    stack: ['Functional', 'Regression'],
    scope: 'Core learning flows for students and teachers.',
    approach: 'Functional and regression testing across releases.',
    result: 'Stable releases for learners in Indonesia.',
    url: 'https://app.jelajahilmu.com',
  },
  {
    id: 'TC-009',
    cats: ['ecommerce'],
    catLabel: 'E-commerce',
    title: 'E-commerce website',
    desc: 'Owned the QA strategy for an online store — from test planning through execution and reporting.',
    stack: ['Manual', 'Cross-browser', 'Responsive'],
    scope: 'Cart, checkout, payment gateways, product catalog and user account flows.',
    approach: 'Manual testing of key flows plus cross-browser and responsive testing across devices and screen sizes.',
    result: 'Regular quality metrics and risk reports to the PM, highlighting key issues before release.',
    url: '',
  },
];

export const ticketTypes = [
  { id: 'fulltime', label: 'Full-time role', dot: '#F87171' },
  { id: 'freelance', label: 'Freelance project', dot: '#FBBF24' },
  { id: 'collab', label: 'Collaboration', dot: '#60A5FA' },
  { id: 'hi', label: 'Just saying hi', dot: '#34D399' },
];
