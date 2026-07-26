export const levelDefs = [
  { num: '01', title: 'ABOUT ME', desc: 'Meet the character', id: 'about', route: '/about' },
  { num: '02', title: 'EDUCATION', desc: 'Skill tree origins', id: 'education', route: '/education' },
  { num: '03', title: 'SKILLS', desc: 'Character stats', id: 'skills', route: '/skills' },
  { num: '04', title: 'EXPERIENCE', desc: 'Quest log', id: 'experience', route: '/experience' },
  { num: '05', title: 'PROJECTS', desc: 'Item vault', id: 'projects', route: '/projects' },
]

export const skillGroups = [
  {
    name: 'Languages',
    items: 'JavaScript (ES6+), TypeScript, Python, C++, Java, C#, C',
    level: 5,
  },
  {
    name: 'Frontend',
    items: 'React, Vue, HTML5, CSS3',
    level: 5,
  },
  {
    name: 'Backend',
    items: 'Node.js, Express, Next.js, Django, .NET, RESTful APIs',
    level: 4,
  },
  {
    name: 'Cloud & AI',
    items: 'AWS (Amplify, Cognito), Azure AI, OpenCV, Mediapipe',
    level: 3,
  },
  {
    name: 'Tools & DevOps',
    items: 'Docker, GitHub Actions, CI/CD, Git, Redis, PostgreSQL, MongoDB Atlas, Vercel',
    level: 4,
  },
]

export const education = [
  {
    school: 'ROCHESTER INSTITUTE OF TECHNOLOGY',
    degree: 'B.S. in Computational Artificial Intelligence',
    dates: 'Aug 2020 — May 2025',
    activities: [
      'Black Awareness Coordinating Committee (BACC)',
      'The Black Thought Collective at RIT (TBTC)',
      'Organization of African Students (OAS)',
      'National Society of Black Engineers (NSBE)',
      'League of Curly Haired Students (LOCS)',
      'RIT AI Club',
    ],
  },
]

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Civic Tech DC',
    dates: 'Feb 2026 — Present',
    location: 'Remote',
    bullets: [
      'Architected and implemented a data ingestion feature using the Hugging Face Hub API, enabling seamless import of large-scale datasets for AI model training.',
      'Collaborated on AI-driven features, streamlining the pipeline between raw data sources and model integration to improve tool accuracy.',
      'Refined UI/UX components to support complex data visualization, enhancing utility for end-users.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Honeywell',
    dates: 'May 2024 — Aug 2024',
    location: 'Atlanta, GA',
    bullets: [
      'Engineered a React-based scheduling dashboard for the Opintel Automation suite, reducing manual operational workload by 20%.',
      'Developed Node.js REST APIs and optimized task dependency handling using asynchronous job queues.',
      'Increased test coverage to 85% by writing unit and integration tests.',
      'Automated CI/CD workflows using GitHub Actions, improving release speed by 30%.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'RIT School of IGME',
    dates: 'May 2023 — Aug 2023',
    location: 'Rochester, NY',
    bullets: [
      'Developed an OpenCV-based computer vision system for real-time object detection and masking.',
      'Integrated Mediapipe for accurate object tracking in interactive AI installations.',
      'Optimized server communication using Redis, improving responsiveness of live video processing.',
    ],
  },
]

export const projects = [
  {
    name: 'CODEDUEL',
    icon: 'C',
    link: 'https://www.duelai.dev/',
    desc: 'A full-stack platform where developers duel Claude AI head-to-head on coding problems, with a Monaco-based editor, sandboxed Judge0 execution, and real-time scoring across correctness, speed, and quality. Features an ELO rating system, a performance dashboard with AI-powered weak-spot detection, and Claude-generated solutions with post-duel explanations.',
    tags: ['React', 'TypeScript', 'Next.js', 'MongoDB Atlas', 'Stripe', 'Claude API', 'Judge0'],
    animation: 'beatclaude',
  },
  {
    name: 'INFODIET',
    icon: 'I',
    link: 'https://getinfodiet.app',
    desc: 'A Chrome extension SaaS that tracks browsing across 8 content categories and enforces daily time budgets with real-time blocking. MV3 service-worker persistence, $3/mo Stripe billing with 7-day trial, and a Recharts analytics dashboard.',
    tags: ['React', 'TypeScript', 'Next.js', 'Stripe', 'MongoDB'],
    animation: 'infodiet',
  },
  {
    name: 'LOCKEDIN',
    icon: 'L',
    link: 'https://deeplockin.com',
    desc: 'A full-stack SaaS Chrome extension for digital detox with a $7/mo Pro tier (14-day trial): recurring schedules, category blocking, strict mode, cross-device sync, and a stats dashboard for focus time and streaks.',
    tags: ['React', 'TypeScript', 'Next.js', 'Stripe', 'MongoDB'],
    animation: 'lockedin',
  },
  {
    name: 'SAFE HAVEN',
    icon: 'S',
    link: 'https://github.com/Nahom2162002/Safe-Haven',
    desc: 'A hackathon prototype (UN Tech Over 2026) building a governance layer for child-safety in AI chat systems: a rules dashboard and prompt tester that explain policy, matched risks, and required actions, backed by UNICEF/UNESCO/AESIA sources. Exposed as an MCP server so dev tools can vet code and features before risky child-safety logic ships.',
    tags: ['TypeScript', 'Vite', 'MCP', 'Gemini API'],
    animation: 'safehaven',
  },
]
