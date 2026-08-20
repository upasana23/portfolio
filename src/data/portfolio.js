/* ============================================
   PROJECT DATA CONFIGURATION
   ============================================
   All project data is centralized here.
   To update a GitHub URL, simply change the 
   'github' field for the relevant project.
   ============================================ */

export const PROJECTS_DATA = [
  {
    id: 'arx-protocol',
    name: 'ARX Protocol',
    category: 'web3',
    categoryLabel: 'Web3 / Protocol',
    tagline: 'Decentralized Environmental Verification',
    description: 'A decentralized environmental verification platform on OP Stack L3 that tokenizes real-world climate actions into verifiable carbon credits through blockchain-based validation and governance.',
    problem: 'Climate action verification is centralized, opaque, and prone to greenwashing — making it hard to trust carbon credit systems.',
    solution: 'Built a transparent, blockchain-based platform that tokenizes verified climate actions into on-chain carbon credits with decentralized governance.',
    award: '🥉 3rd Place',
    awardDetails: 'Podium Finish — 3rd Place',
    features: [
      'Tokenized carbon credits via smart contracts',
      'On-chain governance and verification',
      'OP Stack L3 rollup infrastructure',
      'Transparent verification pipeline',
    ],
    tech: ['Solidity', 'OP Stack', 'React.js', 'Next.js', 'Celo', 'Ethereum'],
    github: 'https://github.com/upasana23/Arx-Protocol.git',
    live: 'https://arx-protocol.vercel.app/',
  },
  {
    id: 'credx',
    name: 'CredX',
    category: 'defi',
    categoryLabel: 'Web3 / DeFi',
    tagline: 'Decentralized Invoice Financing',
    description: 'A decentralized invoice financing protocol that tokenizes invoices as NFTs, enabling instant MSME liquidity and yield-backed investor participation through automated smart contracts.',
    problem: 'MSMEs face cash flow gaps, traditional financing is slow and expensive.',
    solution: 'Tokenize invoices as NFTs for instant liquidity and yield-backed investor staking.',
    features: [
      'Invoice tokenization as NFTs (ERC-1155)',
      'Wallet integration with Wagmi + Viem',
      'Staking & yield mechanisms',
    ],
    tech: ['Solidity', 'Wagmi', 'Viem', 'React.js', 'Next.js', 'Ethereum'],
    github: 'https://github.com/sim675/CredX.git',
    live: 'https://cred-x-orcin.vercel.app/',
  },
  {
    id: 'kognit',
    name: 'Kognit',
    category: 'ai',
    categoryLabel: 'AI / EdTech',
    tagline: 'Real-Time Socratic AI Coding Tutor',
    description: 'A real-time Socratic AI coding tutor supporting multiple programming languages, integrating Gemini, Groq Whisper, ElevenLabs, WebSockets, PostgreSQL, and Redis for an adaptive learning experience.',
    problem: 'Coding education lacks personalized, real-time guidance.',
    solution: 'Built a Socratic AI tutor with voice interaction, isolated code execution, and WebSocket architecture.',
    features: [
      'Socratic questioning methodology',
      'Voice-powered interaction (Groq Whisper + ElevenLabs)',
      'Isolated code execution environment',
    ],
    tech: ['Gemini AI', 'Groq Whisper', 'ElevenLabs', 'WebSockets', 'PostgreSQL', 'Redis', 'Python', 'Next.js'],
    github: 'https://github.com/aashi2609/kognit.git',
    live: 'https://kognit-app.vercel.app/',
  },
  {
    id: 'campus-mart',
    name: 'Campus Mart',
    category: 'fullstack',
    categoryLabel: 'Full-Stack',
    tagline: 'Student Marketplace Platform',
    description: 'A full-stack student marketplace enabling campus-based buying, selling, renting, trading, auctions, and real-time messaging with AI-powered product verification.',
    problem: 'Students lack a dedicated, secure platform for campus commerce.',
    solution: 'Comprehensive campus commerce platform with AI verification, live bidding, and chat.',
    award: '🥉 3rd Place',
    awardDetails: 'Podium Finish — 3rd Place',
    features: [
      'AI product verification (Gemini)',
      'Real-time messaging via Socket.IO',
      'Razorpay payment integration',
    ],
    tech: ['Next.js', 'React.js', 'TypeScript', 'MongoDB', 'Socket.IO', 'Tailwind CSS', 'Razorpay', 'Gemini AI'],
    github: 'https://github.com/GityImran/Innovatrix.git',
    live: 'https://innovatrix-sigma.vercel.app/',
  },
  {
    id: 'orbivia',
    name: 'Orbivia',
    category: 'ai',
    categoryLabel: 'AI / Autonomous Navigation',
    tagline: 'Terrain Intelligence System',
    description: 'An autonomous off-road terrain intelligence system that ingests raw imagery and outputs semantic terrain understanding using a fine-tuned SegFormer-B0 transformer model, classifying every pixel into 10 terrain categories with GO/SLOW/STOP navigation commands.',
    problem: 'Autonomous off-road vehicles struggle with real-time traversability decisions.',
    solution: 'Fine-tuned SegFormer-B0 model classifying terrain pixels with synthetic Falcon twin data.',
    award: '⭐ Top 5',
    awardDetails: 'Hackathon Top 5 Finalist',
    features: [
      '10-class segmentation & traversability scoring',
      'Video frame & webcam inference pipelines',
      'Trained on Falcon synthetic data',
    ],
    tech: ['Python', 'PyTorch', 'Flask', 'SegFormer', 'Duality AI', 'Computer Vision'],
    github: 'https://github.com/upasana23/Orbivia.git',
    live: null,
  },
];

export const SKILLS_DATA = [
  {
    title: 'Languages',
    icon: '💻',
    color: 'blue',
    count: 6,
    skills: ['C', 'Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    color: 'cyan',
    count: 6,
    skills: ['HTML5', 'CSS3', 'React.js', 'Next.js', 'Tailwind CSS', 'shadcn/ui'],
  },
  {
    title: 'Backend & Database',
    icon: '⚙️',
    color: 'teal',
    count: 6,
    skills: ['Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'Supabase', 'REST APIs'],
  },
  {
    title: 'AI / ML / Data',
    icon: '🧠',
    color: 'indigo',
    count: 9,
    skills: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'OpenCV', 'PyTorch', 'TensorFlow', 'YOLO'],
  },
  {
    title: 'Web3 / Blockchain',
    icon: '⛓️',
    color: 'violet',
    count: 12,
    skills: ['Solidity', 'Smart Contracts', 'Ethereum', 'CELO', 'OP Stack', 'IPFS', 'ERC-20', 'ERC-1155', 'Web3', 'DeFi', 'RWA', 'Prediction Markets'],
  },
];

export const PERSONAL = {
  name: 'Upasana Majumder',
  firstName: 'UPASANA',
  lastName: 'MAJUMDER',
  email: 'upasanamajumder2006@gmail.com',
  github: 'https://github.com/upasana23',
  linkedin: 'https://www.linkedin.com/in/upasana-majumder-5a9264287/',
  resume: 'https://drive.google.com/file/d/1WJkiy85S8JefRiMriLFyGC6oLUR-nyvg/view?usp=sharing',
  location: 'Kolkata, India',
  cgpa: '9.13',
  institution: 'Heritage Institute of Technology, Kolkata',
  degree: 'B.Tech — Computer Science & Engineering',
  specialization: 'Artificial Intelligence & Machine Learning',
};

export const COURSEWORK = [
  'Data Structures & Algorithms',
  'Operating Systems',
  'Database Management Systems',
  'Computer Architecture',
  'Image Processing',
  'Data Mining',
  'Machine Learning',
  'Mathematics & Statistics',
  'Programming',
];
