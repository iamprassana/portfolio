import { DeveloperProfile, Project, TechItem, EngineeringPrinciple, Milestone } from '../types';

export const developerProfile: DeveloperProfile = {
  name: 'Karthick Prassana R',
  handle: 'iamprassana',
  role: 'Software Engineer',
  tagline: 'Engineering scalable backend systems, AI platforms & cross-platform products.',
  bio: 'Computer Science undergraduate at VIT-AP University (CGPA 9.03) specializing in backend engineering, event-driven pipelines, vector search, and cross-platform applications. Experienced with Spring Boot, Apache Kafka, Next.js monorepos, Flutter, and PostgreSQL.',
  location: 'Amaravathi / Kovilpatti, India',
  university: 'VIT-AP University',
  degree: 'B.Tech in Computer Science',
  cgpa: '9.03 / 10',
  graduationYear: '2023 – 2027',
  email: 'iamprassana007@gmail.com',
  github: 'https://github.com/iamprassana',
  linkedin: 'https://www.linkedin.com/in/karthick-prassana/',
  stats: {
    publicRepos: 19,
    cgpa: '9.03',
    latencyReduction: '58%',
    vectorPrecision: '95%'
  }
};

export const featuredProjects: Project[] = [
  {
    id: 'url-shortener-backend',
    title: 'URL Manager & Analytics Platform',
    subtitle: 'Horizontally scalable URL shortener with Apache Kafka event-driven analytics pipeline.',
    category: 'backend',
    featured: true,
    tags: ['Spring Boot', 'Apache Kafka', 'PostgreSQL', 'JWT', 'React', 'Supabase'],
    summary: 'High-throughput URL shortener service engineered with a layered Spring Boot architecture, stateless JWT authentication, and an asynchronous Kafka analytics pipeline reducing redirect latency by 58%.',
    problem: 'Synchronous logging of visitor analytics during URL redirects creates severe database I/O contention and degrades response latency under high traffic surges.',
    solution: 'Engineered an asynchronous event-driven pipeline using Apache Kafka to decouple URL redirection from analytics ingestion. Implemented a React real-time dashboard visualizing visitor geographic distribution and click metrics.',
    architecture: {
      title: 'Layered Spring Boot + Kafka Topology',
      description: 'Client requests hit the controller layer where JWTs are validated stateless. Short URL lookups query indexed PostgreSQL. Click events are pushed asynchronously to Kafka topics, consumed by background analytics workers to update aggregated metrics.',
      diagramSteps: [
        'Client Request -> Spring Boot REST Controller (JWT Auth)',
        'Cache/DB Lookup -> Fetch Original URL -> Immediate HTTP 302 Redirect',
        'Kafka Producer -> Publish ClickEvent (User-Agent, IP, Timestamp) to topic',
        'Kafka Consumer -> Ingestion Worker -> Aggregated PostgreSQL Writes',
        'React Dashboard -> Real-time analytics visualization'
      ],
      keyComponents: [
        'Stateless JWT Authentication & Role-Based Access',
        'Apache Kafka Event Streaming Broker',
        'Normalized PostgreSQL Schema (Users, URLs, ClickEvents)',
        'React Analytics Dashboard'
      ]
    },
    engineeringDecisions: [
      'Decoupled HTTP 302 redirect logic from analytics recording, eliminating blocking DB locks during click surges.',
      'Implemented custom partitioning keys in Kafka based on URL ID to maintain strict temporal ordering of click events.',
      'Designed normalized PostgreSQL tables with compound indexes on short_code and created_at to maintain O(1) URL resolution speed.'
    ],
    whatILearned: 'Gained hands-on expertise in event-driven microservice patterns, queue partitioning strategy, and mitigating database bottlenecking during async stream processing.',
    githubUrl: 'https://github.com/iamprassana/URL-Shortener-Backend',
    metrics: [
      { label: 'Redirect Latency', value: '-58%', change: 'vs synchronous', isPositive: true },
      { label: 'Auth Model', value: 'JWT', change: 'Stateless' },
      { label: 'DB Engine', value: 'PostgreSQL', change: 'Indexed' }
    ],
    updatedAt: '2026-07-17'
  },
  {
    id: 'semantic-search-platform',
    title: 'Semantic Search Engine',
    subtitle: 'AI-powered vector embedding retrieval platform over Qdrant index using Gemini AI.',
    category: 'ai',
    featured: true,
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Qdrant', 'Gemini AI', 'TurboRepo'],
    summary: 'High-precision semantic search engine built as a TurboRepo monorepo. Generates high-dimensional vector embeddings via Gemini AI and executes cosine-similarity vector queries over a Qdrant index with >95% precision.',
    problem: 'Traditional keyword search fails to comprehend semantic intent, query context, or multi-modal image/text search nuances across unstructured knowledge repositories.',
    solution: 'Constructed an end-to-end vector retrieval pipeline. Ingested documents and images, generated vector embeddings using Gemini AI, stored vectors in Qdrant, and rendered relevant search results using Next.js and Prisma.',
    architecture: {
      title: 'Monorepo Vector Retrieval Pipeline',
      description: 'Built inside a TurboRepo monorepo for shared API contracts. Document inputs pass through Gemini embedding transformers, producing high-dimensional vectors stored in Qdrant DB. Cosine-similarity searches return ranked context payloads.',
      diagramSteps: [
        'Query Input (Text/Image) -> Next.js Monorepo API Route',
        'Embedding Generator -> Gemini AI Vector API -> Embedding Vector',
        'Vector DB Query -> Qdrant Vector Engine -> Cosine Similarity Search',
        'Data Hydration -> Prisma ORM -> PostgreSQL Metadata',
        'Ranked Context Payload -> Frontend UI'
      ],
      keyComponents: [
        'TurboRepo Monorepo Architecture',
        'Gemini AI Vector Embedding Pipeline',
        'Qdrant Vector Database Engine',
        'Prisma ORM & PostgreSQL Schema'
      ]
    },
    engineeringDecisions: [
      'Architected a TurboRepo monorepo structure to enforce type safety across vector ingestion pipelines and frontend web interfaces.',
      'Benchmarked retrieval precision on an internal labeled test dataset, optimizing vector dimension thresholds for query relevance.',
      'Implemented fallback caching for frequently queried embeddings to reduce external LLM API rate limits.'
    ],
    whatILearned: 'Mastered vector database index optimization, high-dimensional cosine similarity metrics, and monorepo service separation.',
    githubUrl: 'https://github.com/iamprassana/semantic-search',
    metrics: [
      { label: 'Text Precision', value: '>95%', change: 'Labeled Test Set', isPositive: true },
      { label: 'Image Precision', value: '>85%', change: 'Multi-modal', isPositive: true },
      { label: 'Architecture', value: 'TurboRepo', change: 'Monorepo' }
    ],
    updatedAt: '2026-07-29'
  },
  {
    id: 'second-brain',
    title: 'Second Brain Knowledge System',
    subtitle: 'Full-stack personal knowledge management platform with modular REST APIs.',
    category: 'fullstack',
    featured: true,
    tags: ['React', 'TypeScript', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Node.js'],
    summary: 'Full-stack knowledge organization platform designed for capturing, linking, and querying structured notes and web resources with secure cloud persistence and modular Express backend.',
    problem: 'Information fragmentation across web bookmarks, code snippets, and unstructured notes makes contextual knowledge retrieval tedious for developers.',
    solution: 'Developed a unified workspace with custom categorization, tag indexing, fast full-text querying, and secure MongoDB document storage behind an Express REST API.',
    architecture: {
      title: 'Decoupled Client-Server Architecture',
      description: 'React single-page application communicating via REST API endpoints with an Express server. Document payload sanitization, JWT token verification, and MongoDB aggregation pipelines.',
      keyComponents: [
        'React SPA with Tailwind UI',
        'Express RESTful API Controllers',
        'MongoDB Mongoose Document Store',
        'JWT Cloud Authentication'
      ]
    },
    engineeringDecisions: [
      'Built custom React hooks for optimistic UI state updates during note creation and tagging.',
      'Designed compound MongoDB indexes on user ID, tags, and timestamps for low-latency queries.'
    ],
    whatILearned: 'Deepened understanding of document database modeling, state management hooks, and scalable REST API design.',
    githubUrl: 'https://github.com/iamprassana/second-brain',
    metrics: [
      { label: 'Stack', value: 'MERN', change: 'TypeScript' },
      { label: 'Persistence', value: 'Cloud', change: 'MongoDB' }
    ],
    updatedAt: '2026-01-31'
  },
  {
    id: 'reader-pro',
    title: 'ReaderPro — Assistive Platform',
    subtitle: 'Google Solution Challenge hackathon project empowering accessible content reading.',
    category: 'mobile',
    featured: true,
    tags: ['Flutter', 'Dart', 'Firebase', 'Accessibility', 'AI Services'],
    summary: 'Cross-platform mobile application developed for the Google Solution Challenge to enhance reading accessibility for visually impaired and neurodivergent individuals through intelligent text processing.',
    problem: 'Standard digital content lacks adaptive visual formatting, real-time auditory synthesis, and simplified cognitive breakdown for users with reading disabilities.',
    solution: 'Built a responsive Flutter application integrating text-to-speech engines, customized visual contrast modes, and smart text summarization APIs.',
    architecture: {
      title: 'Mobile UI State Machine & Cloud Sync',
      description: 'Modular Flutter architecture with Provider/Riverpod state management, connected to Firebase Cloud Storage and Auth for seamless cross-device synchronization.',
      keyComponents: [
        'Flutter Cross-Platform Engine',
        'Accessibility UI Controllers',
        'Firebase Backend Services'
      ]
    },
    engineeringDecisions: [
      'Prioritized WCAG AAA contrast standards and screen-reader accessibility semantics across all Flutter widgets.',
      'Engineered offline-first caching for converted audio text files to ensure reliability without active internet connections.'
    ],
    whatILearned: 'Gained practical experience in inclusive UI design, mobile performance optimization, and hackathon product prototyping under strict deadlines.',
    githubUrl: 'https://github.com/iamprassana/ReaderPro',
    metrics: [
      { label: 'Event', value: 'Google Challenge', change: 'Hackathon' },
      { label: 'Platform', value: 'Flutter', change: 'Cross-platform' }
    ],
    updatedAt: '2026-07-20'
  },
  {
    id: 'finance-tracker',
    title: 'Mobile Finance Tracker',
    subtitle: 'Personal expense tracking & financial analytics application in Flutter.',
    category: 'mobile',
    featured: true,
    tags: ['Flutter', 'Dart', 'REST API', 'State Management', 'Charts'],
    summary: 'Cross-platform Flutter application providing transaction tracking, budget management, visual spend analytics, and automated expense categorization.',
    problem: 'Users struggle to monitor micro-transactions and visualize budget thresholds across multiple asset categories in real time.',
    solution: 'Designed an intuitive mobile app featuring responsive financial charts, local state persistence, and RESTful API sync.',
    architecture: {
      title: 'Clean Architecture Flutter App',
      description: 'Separated presentation layer, business logic bloc/provider, and data repository handlers for predictable data flows.',
      keyComponents: [
        'Flutter UI Custom Canvas Charts',
        'Local Secure SQLite Caching',
        'REST Repository Handler'
      ]
    },
    engineeringDecisions: [
      'Separated financial computation logic into pure Dart utility functions for fast unit testing.',
      'Implemented smooth chart animations using custom Flutter painters.'
    ],
    whatILearned: 'Refined mobile state management patterns, local persistence caching, and responsive cross-device layout design.',
    githubUrl: 'https://github.com/iamprassana/Finance-Tracker',
    metrics: [
      { label: 'Target', value: 'Mobile', change: 'Android / iOS' },
      { label: 'UI Logic', value: 'Clean Arch', change: 'Modular' }
    ],
    updatedAt: '2026-07-06'
  },
  {
    id: 'draw-app',
    title: 'Interactive Draw App',
    subtitle: 'High-performance interactive vector drawing canvas built with TypeScript.',
    category: 'fullstack',
    featured: true,
    tags: ['TypeScript', 'HTML5 Canvas', 'React', 'State Engine'],
    summary: 'Interactive web drawing application featuring vector brush rendering, custom shape tools, layer management, and event-driven canvas manipulation in pure TypeScript.',
    problem: 'DOM-based drawing applications suffer from lag and render degradation when manipulating complex multi-element vector paths.',
    solution: 'Built an HTML5 Canvas rendering engine with double-buffering and action stack undo/redo history in TypeScript.',
    architecture: {
      title: 'Canvas Event Loop & State History Machine',
      description: 'Low-level pointer event listeners feed input coordinates into a spatial path builder. Canvas render frames are scheduled via requestAnimationFrame for 60FPS fluid drawing.',
      keyComponents: [
        'HTML5 Canvas Render Pipeline',
        'Undo/Redo State Command Stack',
        'TypeScript Vector Math Utilities'
      ]
    },
    engineeringDecisions: [
      'Implemented an immutable command stack pattern for infinite undo/redo states.',
      'Optimized draw path math using vector bounding box checks to skip off-screen canvas element re-renders.'
    ],
    whatILearned: 'Deep understanding of low-level canvas APIs, 60FPS browser rendering performance, and command pattern state management.',
    githubUrl: 'https://github.com/iamprassana/draw-app',
    metrics: [
      { label: 'Performance', value: '60 FPS', change: 'Canvas Native' },
      { label: 'Language', value: 'TypeScript', change: 'Strict' }
    ],
    updatedAt: '2026-07-29'
  }
];

export const secondaryProjects: Project[] = [
  {
    id: 'url-detector',
    title: 'url-detector',
    subtitle: 'CLI tool scanning source code and text files for URL extraction.',
    category: 'tools',
    featured: false,
    tags: ['TypeScript', 'Node.js', 'Regex Engine', 'CLI'],
    summary: 'Command-line tool that parses source repositories and text documents to detect, validate, and summarize all discovered web URLs.',
    problem: 'Manual auditing of external URLs across complex source code repositories is error-prone.',
    solution: 'Automated AST and regex stream parsing tool outputting clean link reports.',
    architecture: { title: 'CLI Stream Processor', description: 'Reads files concurrently, matches URL patterns, and formats JSON/markdown summaries.' },
    engineeringDecisions: ['Used non-blocking stream readers to scan large codebases without memory blowup.'],
    whatILearned: 'Regex optimization and CLI tool packaging.',
    githubUrl: 'https://github.com/iamprassana/url-detector',
    updatedAt: '2026-08-11'
  },
  {
    id: 'realtime-chat',
    title: 'RealTime-Chat',
    subtitle: 'Low-latency real-time messaging application in TypeScript.',
    category: 'backend',
    featured: false,
    tags: ['TypeScript', 'WebSockets', 'Express', 'Node.js'],
    summary: 'Real-time multi-room chat application using WebSockets for bi-directional message broadcasting.',
    problem: 'Polling HTTP endpoints creates excessive overhead for live user chat.',
    solution: 'Established persistent WebSocket connections with instant broadcast events.',
    architecture: { title: 'WebSocket Pub/Sub Engine', description: 'Manages active socket channels and pushes event payloads.' },
    engineeringDecisions: ['Implemented client-side reconnection logic with exponential backoff.'],
    whatILearned: 'Full-duplex WebSocket protocols and session tracking.',
    githubUrl: 'https://github.com/iamprassana/RealTime-Chat',
    updatedAt: '2026-03-25'
  },
  {
    id: 'bill-app',
    title: 'Bill Management App',
    subtitle: 'Flutter billing app with Firebase Auth & Supabase Database.',
    category: 'mobile',
    featured: false,
    tags: ['Dart', 'Flutter', 'Firebase', 'Supabase', 'PostgreSQL'],
    summary: 'Cross-platform mobile application for managing customer billing, invoice generation, and secure file storage.',
    problem: 'Small businesses need lightweight, reliable mobile invoicing without complex setup.',
    solution: 'Combined Flutter frontend with Firebase Auth and Supabase PostgreSQL backend.',
    architecture: { title: 'Hybrid Cloud Architecture', description: 'Firebase handles auth/storage while Supabase handles relation data.' },
    engineeringDecisions: ['Used Supabase real-time subscriptions for instant bill status updates.'],
    whatILearned: 'Hybrid cloud service integration in Flutter.',
    githubUrl: 'https://github.com/iamprassana/bill_app',
    updatedAt: '2025-05-26'
  },
  {
    id: 'fingerprint-payment',
    title: 'Fingerprint Payment System',
    subtitle: 'Biometric payment authentication prototype.',
    category: 'tools',
    featured: false,
    tags: ['TypeScript', 'Biometrics', 'Security', 'REST API'],
    summary: 'Prototype web service verifying biometric fingerprint hashes for payment authorization.',
    problem: 'Standard password entry during checkout creates transaction friction.',
    solution: 'Simulated biometrics API matching hash templates securely.',
    architecture: { title: 'Security Service API', description: 'Encrypted hash verification endpoints.' },
    engineeringDecisions: ['Enforced strict HMAC signature verification on payment requests.'],
    whatILearned: 'Biometric authorization flows and cryptographic API security.',
    githubUrl: 'https://github.com/iamprassana/fingerprint-payment',
    updatedAt: '2026-04-09'
  },
  {
    id: 'question-bank',
    title: 'QuestionBank Android App',
    subtitle: 'Android platform for uploading and downloading academic exam papers.',
    category: 'mobile',
    featured: false,
    tags: ['Kotlin', 'Android SDK', 'Cloud Storage', 'Room DB'],
    summary: 'Native Android app allowing university students to browse, download, and share past examination papers.',
    problem: 'Students lack centralized access to previous year question banks.',
    solution: 'Native Android application with cloud search and offline PDF caching.',
    architecture: { title: 'Native Kotlin MVVM', description: 'ViewModel + Repository pattern with Room DB caching.' },
    engineeringDecisions: ['Cached downloaded PDFs locally using Android Room DB metadata index.'],
    whatILearned: 'Native Android architecture and MVVM pattern.',
    githubUrl: 'https://github.com/iamprassana/QuestionBank',
    updatedAt: '2025-09-26'
  },
  {
    id: 'mini-zomato',
    title: 'Mini-Zomato Clone',
    subtitle: 'Food ordering UI prototype built with Flutter.',
    category: 'mobile',
    featured: false,
    tags: ['Dart', 'Flutter', 'UI Design', 'Stateful Widgets'],
    summary: 'Mobile UI application replicating restaurant discovery, cart management, and order status flows.',
    problem: 'Complex multi-step checkout mobile flows require fluid animations.',
    solution: 'Designed polished Flutter UI components with interactive cart management.',
    architecture: { title: 'Flutter Widget Hierarchy', description: 'Reusable stateful widget architecture.' },
    engineeringDecisions: ['Created custom hero transitions between restaurant menu cards and details.'],
    whatILearned: 'Complex Flutter UI widget trees and micro-animations.',
    githubUrl: 'https://github.com/iamprassana/Mini-Zomato',
    updatedAt: '2025-08-15'
  },
  {
    id: 'tictactoe-ai',
    title: 'TicTacToe with Minimax AI',
    subtitle: 'Native Android game implementing the Minimax decision tree algorithm.',
    category: 'tools',
    featured: false,
    tags: ['Kotlin', 'Android', 'Minimax Algorithm', 'AI / Game Theory'],
    summary: 'Android game featuring an unbeatable AI opponent powered by the Minimax algorithm with alpha-beta pruning.',
    problem: 'Creating intelligent decision-making logic for turn-based games.',
    solution: 'Implemented recursive Minimax game tree evaluation in Kotlin.',
    architecture: { title: 'Algorithmic Game Engine', description: 'Evaluates board states recursively to select optimal moves.' },
    engineeringDecisions: ['Optimized state traversal with alpha-beta pruning to minimize CPU cycles.'],
    whatILearned: 'Practical game theory, algorithmic recursion, and state tree optimization.',
    githubUrl: 'https://github.com/iamprassana/TicTacToe',
    updatedAt: '2025-03-08'
  },
  {
    id: 'todo-room',
    title: 'ToDo Native Android App',
    subtitle: 'Local-first tasks app built using Room Database in Kotlin.',
    category: 'mobile',
    featured: false,
    tags: ['Kotlin', 'Android', 'Room Database', 'SQLite'],
    summary: 'First native Android application building task management CRUD features backed by Room SQLite persistence.',
    problem: 'Need reliable offline task management without cloud network dependencies.',
    solution: 'Implemented local Room ORM persistence with LiveData observer patterns.',
    architecture: { title: 'Local Room Architecture', description: 'DAO interfaces and Room database instance.' },
    engineeringDecisions: ['Used Coroutines for asynchronous database queries to avoid UI thread blocking.'],
    whatILearned: 'Android Room ORM, Kotlin Coroutines, and local storage lifecycle.',
    githubUrl: 'https://github.com/iamprassana/ToDo',
    updatedAt: '2025-03-08'
  },
  {
    id: 'weather-app',
    title: 'Flutter Weather App',
    subtitle: 'Real-time weather forecast mobile application.',
    category: 'mobile',
    featured: false,
    tags: ['Dart', 'Flutter', 'HTTP Package', 'OpenWeather API'],
    summary: 'Mobile app fetching current weather conditions and multi-day forecasts via REST APIs.',
    problem: 'Parsing dynamic JSON weather payloads cleanly on mobile screens.',
    solution: 'Built typed Dart data models and error-resilient HTTP handlers.',
    architecture: { title: 'REST Service Integrator', description: 'Fetches and parses weather API JSON responses.' },
    engineeringDecisions: ['Added graceful offline fallbacks and error handling for missing network.'],
    whatILearned: 'Asynchronous HTTP API consumption in Dart.',
    githubUrl: 'https://github.com/iamprassana/WeatherApp',
    updatedAt: '2025-07-27'
  },
  {
    id: 'express-jwt',
    title: 'Express JWT Service',
    subtitle: 'Express.js backend boilerplate with JWT authentication.',
    category: 'backend',
    featured: false,
    tags: ['JavaScript', 'Express.js', 'JWT', 'Node.js'],
    summary: 'Reusable Express.js backend starter featuring secure token generation, middleware verification, and password hashing.',
    problem: 'Repeated configuration of authentication middleware across backend projects.',
    solution: 'Modularized JWT authorization middleware and user router templates.',
    architecture: { title: 'Express Middleware Chain', description: 'Intercepts incoming HTTP headers to validate Bearer tokens.' },
    engineeringDecisions: ['Enforced bcrypt salt rounds for secure password storage.'],
    whatILearned: 'Middleware chaining, token signing, and stateless security.',
    githubUrl: 'https://github.com/iamprassana/express',
    updatedAt: '2025-11-06'
  }
];

export const techStackData: TechItem[] = [
  {
    id: 'java',
    name: 'Java',
    category: 'Languages',
    iconName: 'Code',
    description: 'Object-oriented language used for enterprise backend services, multithreading, and Spring Boot microservices.',
    projectsUsed: [
      { id: 'url-shortener-backend', name: 'URL Shortener Backend', context: 'Layered Spring Boot REST API & Kafka consumer' }
    ]
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Languages',
    iconName: 'FileCode',
    description: 'Strongly typed language powering modern full-stack web applications, monorepos, and CLI tools.',
    projectsUsed: [
      { id: 'semantic-search-platform', name: 'Semantic Search', context: 'TurboRepo monorepo, API routes & Prisma ORM' },
      { id: 'second-brain', name: 'Second Brain', context: 'React frontend & Express REST API handlers' },
      { id: 'draw-app', name: 'Draw App', context: 'Canvas rendering engine & command stack' },
      { id: 'url-detector', name: 'url-detector CLI', context: 'Node.js AST code parser' }
    ]
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    category: 'Languages',
    iconName: 'Smartphone',
    description: 'Modern concise language used for native Android mobile development, Room DB, and algorithms.',
    projectsUsed: [
      { id: 'question-bank', name: 'QuestionBank App', context: 'Native MVVM Android architecture' },
      { id: 'tictactoe-ai', name: 'TicTacToe AI', context: 'Minimax algorithm implementation' },
      { id: 'todo-room', name: 'ToDo App', context: 'Room Database & Coroutines' }
    ]
  },
  {
    id: 'dart',
    name: 'Dart / Flutter',
    category: 'Languages',
    iconName: 'LayoutGrid',
    description: 'Cross-platform UI toolkit and language for building performant mobile apps on iOS & Android.',
    projectsUsed: [
      { id: 'reader-pro', name: 'ReaderPro', context: 'Google Solution Challenge accessibility app' },
      { id: 'finance-tracker', name: 'Finance Tracker', context: 'Expense tracking & custom charts' },
      { id: 'bill-app', name: 'Bill App', context: 'Invoicing & Supabase integration' }
    ]
  },
  {
    id: 'spring-boot',
    name: 'Spring Boot',
    category: 'Backend & Distributed',
    iconName: 'Server',
    description: 'Java framework for building production-ready, horizontally scalable RESTful microservices.',
    projectsUsed: [
      { id: 'url-shortener-backend', name: 'URL Shortener Backend', context: 'Controller-Service-Repository architecture with JWT auth' }
    ]
  },
  {
    id: 'kafka',
    name: 'Apache Kafka',
    category: 'Backend & Distributed',
    iconName: 'Zap',
    description: 'Distributed event-streaming platform for high-throughput, asynchronous message queues.',
    projectsUsed: [
      { id: 'url-shortener-backend', name: 'URL Shortener Backend', context: 'Click event analytics pipeline cutting redirect latency by 58%' }
    ]
  },
  {
    id: 'express',
    name: 'Express.js & Node.js',
    category: 'Backend & Distributed',
    iconName: 'Cpu',
    description: 'Lightweight JavaScript runtime framework for building RESTful APIs and WebSocket servers.',
    projectsUsed: [
      { id: 'second-brain', name: 'Second Brain', context: 'REST API backend for note organization' },
      { id: 'realtime-chat', name: 'RealTime Chat', context: 'WebSocket bi-directional event server' }
    ]
  },
  {
    id: 'nextjs',
    name: 'Next.js & React',
    category: 'Frontend & AI',
    iconName: 'Globe',
    description: 'Modern React framework for server-rendered, fast web applications and monorepo architectures.',
    projectsUsed: [
      { id: 'semantic-search-platform', name: 'Semantic Search Engine', context: 'Next.js TurboRepo monorepo with server components' },
      { id: 'url-shortener-backend', name: 'URL Shortener Analytics', context: 'React real-time analytics dashboard' }
    ]
  },
  {
    id: 'qdrant-gemini',
    name: 'Qdrant & Gemini AI',
    category: 'Frontend & AI',
    iconName: 'Sparkles',
    description: 'Vector database engine combined with Gemini AI embeddings for high-precision semantic search.',
    projectsUsed: [
      { id: 'semantic-search-platform', name: 'Semantic Search Platform', context: '95% text precision cosine similarity vector retrieval' }
    ]
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL & Supabase',
    category: 'Databases & Storage',
    iconName: 'Database',
    description: 'Relational database engine with ACID compliance, normalized schemas, and Supabase cloud tooling.',
    projectsUsed: [
      { id: 'url-shortener-backend', name: 'URL Shortener Backend', context: 'Normalized schemas for users, URLs, and click events' },
      { id: 'bill-app', name: 'Bill App', context: 'Supabase PostgreSQL database backend' }
    ]
  },
  {
    id: 'mongodb',
    name: 'MongoDB & Prisma',
    category: 'Databases & Storage',
    iconName: 'Layers',
    description: 'NoSQL document storage and modern TypeScript ORMs for flexible schema management.',
    projectsUsed: [
      { id: 'second-brain', name: 'Second Brain', context: 'Mongoose document schemas for knowledge notes' },
      { id: 'semantic-search-platform', name: 'Semantic Search', context: 'Prisma ORM for database queries' }
    ]
  },
  {
    id: 'docker-git',
    name: 'Docker & Infrastructure',
    category: 'DevOps & Tools',
    iconName: 'Box',
    description: 'Containerization, version control, Postman API testing, and CI/CD development workflows.',
    projectsUsed: [
      { id: 'url-shortener-backend', name: 'URL Shortener Backend', context: 'Kafka broker & database container setup' }
    ]
  }
];

export const engineeringPrinciples: EngineeringPrinciple[] = [
  {
    number: '01',
    title: 'Decouple Latency-Critical Paths via Asynchronous Event Streams',
    subtitle: 'Prioritize low HTTP response latency by delegating non-blocking tasks.',
    description: 'Synchronous writes to analytics databases during critical request flows (like URL shortener redirects) create blocking database locks. Offloading event payloads to Apache Kafka topic streams ensures instant client responses while processing analytics asynchronously.',
    codeSnippet: `// Spring Boot Producer -> Kafka Topic
public void recordClickEvent(String shortCode, HttpServletRequest request) {
    ClickEvent event = new ClickEvent(shortCode, request.getRemoteAddr(), Instant.now());
    kafkaTemplate.send("url-click-analytics", shortCode, event);
} // Immediate HTTP 302 return to user (-58% latency)`,
    realWorldExample: 'Implemented in URL Manager Backend, cutting redirect response latency by 58%.'
  },
  {
    number: '02',
    title: 'Design Vector Spaces around Empirical Benchmark Precision',
    subtitle: 'Measure retrieval quality with labeled test sets before shipping AI features.',
    description: 'Adding vector search to an application is trivial; achieving high query relevance is hard. Always evaluate cosine-similarity thresholds against ground-truth evaluation datasets across both text and multi-modal query inputs.',
    codeSnippet: `// Qdrant Vector Cosine Similarity Query
const searchResult = await qdrantClient.search("documents", {
    vector: queryEmbedding,
    limit: 5,
    score_threshold: 0.82 // Evaluated threshold yielding >95% precision
});`,
    realWorldExample: 'Applied in Semantic Search Engine, achieving 95% text precision and 85% image precision.'
  },
  {
    number: '03',
    title: 'Build Schema Observability & Strict Types at System Boundaries',
    subtitle: 'Eliminate runtime data corruption through compile-time contract enforcement.',
    description: 'Whether modeling normalized PostgreSQL tables or defining TurboRepo monorepo packages, strict type boundaries prevent silent bugs between services. Leverage Prisma schemas and TypeScript interfaces across the entire stack.',
    codeSnippet: `// TurboRepo Shared Contract Definition
export interface VectorIngestionPayload {
  documentId: string;
  embeddings: number[];
  metadata: Record<string, unknown>;
}`,
    realWorldExample: 'Structured TurboRepo monorepo for Semantic Search Platform.'
  },
  {
    number: '04',
    title: 'Keep Client Logic Declarative & State Machines Predictable',
    subtitle: 'Avoid side-effect pollution in UI rendering engines.',
    description: 'Mobile applications and interactive browser canvases deteriorate when rendering logic mutates state unpredictably. Separate pure computations (like command stacks or financial calculations) from rendering components.',
    codeSnippet: `// Pure Command Pattern Undo/Redo Engine
class CanvasHistory {
  private undoStack: DrawAction[] = [];
  public execute(action: DrawAction) {
    action.draw(this.context);
    this.undoStack.push(action);
  }
}`,
    realWorldExample: 'Utilized in HTML5 Draw App command history stack & Flutter Clean Architecture.'
  },
  {
    number: '05',
    title: 'Structure Codebases for Modularity before Microservices',
    subtitle: 'Modular monoliths with clear boundaries outperform premature distributed complexity.',
    description: 'Do not split systems into microservices until domain boundaries and operational scale genuinely demand it. Layered architectures (Controller-Service-Repository) inside clean monorepos provide maximum velocity and maintainability.',
    realWorldExample: 'Layered Spring Boot architecture & Next.js modular services.'
  },
  {
    number: '06',
    title: 'Observe Systems Through Practical Metrics, Not Vanity Stars',
    subtitle: 'Focus on measurable engineering impact over buzzword metrics.',
    description: 'Real engineering is demonstrated through system latency graphs, vector retrieval precision percentages, normalized schema designs, and test coverage—not generic hype statements.',
    realWorldExample: 'Empirical testing across all 19 public GitHub repositories.'
  }
];

export const journeyMilestones: Milestone[] = [
  {
    id: 'vit-ap',
    period: '2023 – 2027',
    year: '2023',
    title: 'B.Tech in Computer Science & Engineering',
    organization: 'VIT-AP University',
    location: 'Amaravathi, India',
    type: 'education',
    description: 'Specializing in core Computer Science fundamentals: Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, and Object-Oriented Programming.',
    highlights: [
      'Academic CGPA: 9.03 / 10.0',
      'Focus areas: Distributed Systems, System Design, Backend Engineering & Mobile Platforms',
      'Active developer across open-source and hackathon engineering projects'
    ],
    badge: 'CGPA 9.03'
  },
  {
    id: 'flipkart-grid',
    period: '2026',
    year: '2026',
    title: 'Flipkart Grid 8.0 Semi-Finalist',
    organization: 'Flipkart',
    type: 'achievement',
    description: 'Advanced to the Semi-Finals of Flipkart Grid 8.0 national engineering hackathon competition, solving complex software architecture and algorithm challenges.',
    highlights: [
      'Competed among top engineering teams nationwide',
      'Designed scalable system architecture for real-time logistics and cataloging challenges'
    ],
    badge: 'Semi-Finalist'
  },
  {
    id: 'google-solution-challenge',
    period: '2026',
    year: '2026',
    title: 'Google Solution Challenge Participant',
    organization: 'Google Developer Student Clubs',
    type: 'achievement',
    description: 'Engineered ReaderPro—a Flutter mobile accessibility application designed to assist visually impaired and neurodivergent individuals in consuming digital media.',
    highlights: [
      'Built with Flutter, Firebase, and accessibility services',
      'Demonstrated product impact aligned with UN Sustainable Development Goals'
    ],
    badge: 'Global Challenge'
  },
  {
    id: 'sih-hackathon',
    period: '2025',
    year: '2025',
    title: 'Smart India Hackathon Participant',
    organization: 'Ministry of Education, Govt of India',
    type: 'achievement',
    description: 'Participated in Smart India Hackathon developing technical solutions for real-world civic and educational problem statements.',
    highlights: [
      'Rapid prototype development under high-pressure team hackathon environment'
    ]
  },
  {
    id: 'ibm-quantum',
    period: '2024',
    year: '2024',
    title: 'IBM Quantum Computing Certification',
    organization: 'IBM',
    type: 'certification',
    description: 'Completed certification training on quantum computing principles, Qiskit framework, and quantum circuit algorithms.',
    highlights: [
      'Explored quantum gates, entanglement principles, and Qiskit SDK'
    ],
    badge: 'Certified'
  },
  {
    id: 'android-java-cert',
    period: '2024',
    year: '2024',
    title: 'Android & Java Development Certification',
    organization: 'Professional Certification',
    type: 'certification',
    description: 'Formal certification in Java object-oriented paradigms, Android SDK lifecycle, Room persistence, and UI layout architecture.',
    highlights: [
      'Mastered native Android development in Java and Kotlin'
    ],
    badge: 'Certified'
  },
  {
    id: 'high-school',
    period: 'March 2023',
    year: '2023',
    title: 'Higher Secondary Education (92%)',
    organization: 'Ravilla K.R.A Vidhyashram',
    location: 'Kovilpatti, India',
    type: 'education',
    description: 'Completed Higher Secondary schooling with distinction in Mathematics, Physics, and Computer Science.',
    highlights: [
      'Scored 92% aggregate in final board examinations'
    ],
    badge: '92%'
  }
];
