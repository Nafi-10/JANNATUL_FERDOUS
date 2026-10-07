import { Project, Service, Insight, ProcessStep } from '../types/portfolio';
import portraitImage from '../assets/images/jannatul-ferdous.png';

export const PORTRAIT_IMAGE = portraitImage;

export const PERSONAL_INFO = {
  name: 'JANNATUL FERDOUS',
  firstName: 'JANNATUL',
  lastName: 'FERDOUS',
  greeting: 'Assalamualikum',
  title: 'STUDENT',
  subtitle: 'Computer Science Student & Creative Technologist',
  bio: 'I’m Jannatul Ferdous, a science student at Khulna Government College, currently preparing for my Higher Secondary Certificate. My education at BAF Shaheen School and Khulna Collegiate Girls’ School has helped build a strong academic foundation and a lasting curiosity about learning.\n\nBeyond the classroom, I’ve developed practical skills through a computer training program certified by the Bangladesh Technical Education Board, defensive driving training at Jahanabad Military Driving School, and basic first-aid training with the Bangladesh Red Crescent Society. I also study Robindro Shongit, which gives me a creative outlet and a connection to cultural expression. These experiences reflect my interest in combining knowledge, practical preparedness, and creativity in everything I do.',
  location: 'Dhaka, Bangladesh',
  availability: 'Available Worldwide · Seeking Design Internships',
  email: 'jannatul.ferdous.portfolio@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  behance: 'https://behance.net',
  dribbble: 'https://dribbble.com',
};

export const PROJECTS: Project[] = [
  {
    id: 'pulse-health',
    title: 'Pulse Student Wellness Suite',
    category: 'UI/UX & Mobile App',
    tagline: 'Holistic health monitoring and cognitive balance platform for students.',
    description: 'A comprehensive mobile application designed to help university students balance academic deadlines, hydration, sleep hygiene, and mental mindfulness through gentle ambient prompts.',
    year: '2026',
    role: 'Lead Product Designer & UX Researcher',
    deliverables: ['Design System', 'User Journey Maps', 'High-Fidelity Figma Prototype', 'Usability Testing'],
    tools: ['Figma', 'React Native', 'Tailwind CSS', 'Framer'],
    challenge: 'Students frequently experience chronic cognitive fatigue and irregular sleep cycles during semester finals, while existing health apps feel clinical, overwhelming, or punitive.',
    solution: 'Designed a soothing, zero-guilt interface utilizing gentle aurora gradients, circadian-aware micro-widgets, and modular study-break reminders that adapt to exam schedules.',
    impact: 'Tested across 140+ student participants with a 92% weekly retention rate and 4.8/5 qualitative satisfaction score.',
    featured: true,
  },
  {
    id: 'edulearn-platform',
    title: 'EduLearn AI Academic Assistant',
    category: 'Web App & Design System',
    tagline: 'Next-generation interactive research workspace and collaborative syllabus navigator.',
    description: 'An intuitive web workspace that synthesizes complex lecture materials, generates contextual mind maps, and allows peer-to-peer study sessions in a focused, clutter-free environment.',
    year: '2025',
    role: 'UI Designer & Frontend Engineer',
    deliverables: ['Information Architecture', 'Dashboard UI', 'Design Token Library', 'Component Architecture'],
    tools: ['Figma', 'React', 'TypeScript', 'Tailwind CSS'],
    challenge: 'Synthesizing dense academic papers and lecture transcripts across 5+ disparate courses created severe cognitive load for undergrads.',
    solution: 'Crafted a modular split-pane interface with responsive markdown rendering, instant semantic search, and customizable focus modes.',
    impact: 'Selected as Best Academic Innovation Showcase at the 2025 University Tech Symposium.',
    featured: true,
  },
  {
    id: 'eco-campus',
    title: 'EcoCampus Sustainability Tracker',
    category: 'Mobile UX & IoT Interface',
    tagline: 'Gamified campus carbon offset and green transport incentive network.',
    description: 'An interactive mobile application connected to smart campus recycling hubs and bike-share kiosks, rewarding sustainable daily choices with campus dining credits.',
    year: '2025',
    role: 'UX Strategist & Visual Designer',
    deliverables: ['User Personas', 'Interaction Flows', 'Micro-interactions', 'Gamification Logic'],
    tools: ['Figma', 'Illustrator', 'ProtoPie', 'HTML/CSS'],
    challenge: 'Traditional environmental campaigns failed to inspire measurable student participation due to abstract messaging and lack of immediate feedback.',
    solution: 'Introduced an instant tap-and-track NFC logging flow with tactile gloss micro-animations and transparent campus leaderboard rankings.',
    impact: 'Adopted in campus beta test with over 2,400 logged eco-actions in its inaugural month.',
    featured: true,
  },
];

export const SERVICES: Service[] = [
  {
    id: 'ui-ux-design',
    number: '01',
    title: 'UI/UX & Product Design',
    description: 'End-to-end interface crafting from initial empathy interviews to high-fidelity wireframes, interactive prototypes, and scalable design token systems.',
    iconName: 'Layout',
    skills: ['Figma Mastery', 'Wireframing', 'User Testing', 'Micro-interactions', 'Design Tokens'],
  },
  {
    id: 'frontend-dev',
    number: '02',
    title: 'Frontend Development',
    description: 'Translating nuanced designs into performant, accessible, and responsive codebases utilizing modern component architectures and fluid transitions.',
    iconName: 'Code',
    skills: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'Accessible HTML5', 'Motion Libraries'],
  },
  {
    id: 'research-strategy',
    number: '03',
    title: 'Research & Information Architecture',
    description: 'Systematic qualitative user research, competitive benchmarking, and structured content taxonomies grounded in cognitive empathy.',
    iconName: 'Compass',
    skills: ['User Interviews', 'Card Sorting', 'Heuristic Audits', 'Journey Mapping', 'Data Synthesis'],
  },
  {
    id: 'creative-direction',
    number: '04',
    title: 'Brand Identity & Visual Systems',
    description: 'Crafting cohesive digital identities with glossy depth, expressive typography, and memorable design artifacts tailored for modern audiences.',
    iconName: 'Palette',
    skills: ['Visual Branding', 'Color Systems', 'Iconography', 'Glossy Surface Styling', 'Design Guidelines'],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover & Empathize',
    description: 'Conducting in-depth interviews, academic benchmarking, and persona synthesis to pinpoint the core human problem before touching the canvas.',
    focus: ['User Interviews', 'Competitive Analysis', 'Problem Definition', 'Project Constraints'],
  },
  {
    step: '02',
    title: 'Architecture & Wireframing',
    description: 'Mapping out user journeys, site hierarchies, and rapid low-fidelity sketches to validate intuitive mental models and seamless task completion.',
    focus: ['Information Architecture', 'User Flows', 'Low-Fi Wireframes', 'Content Strategy'],
  },
  {
    step: '03',
    title: 'High-Fi Design & Gloss System',
    description: 'Infusing color theory, custom typography, tactile glossy glassmorphism, and responsive auto-layout components into cohesive high-fidelity designs.',
    focus: ['Design Systems', 'Micro-Interactions', 'Interactive Prototypes', 'Accessibility Audits'],
  },
  {
    step: '04',
    title: 'Refinement & Code Validation',
    description: 'Executing usability sessions with target users, iterating based on real feedback, and collaborating or coding frontend implementations with precision.',
    focus: ['Usability Testing', 'Design-to-Code Handoff', 'Component Audits', 'Final Polishing'],
  },
];

export const INSIGHTS: Insight[] = [
  {
    id: 'glossy-tactility',
    title: 'The Return of Tactile Depth: Designing Beyond Flat Surfaces',
    date: 'March 2026',
    readTime: '4 min read',
    category: 'Design Philosophy',
    summary: 'Why modern digital interfaces are embracing subtle refractive highlights, glass panels, and ambient orbs to create human warmth.',
    content: [
      'For over a decade, flat design reigned supreme, stripping interfaces of physical cues. While this established necessary minimalism, it also stripped many products of emotional resonance.',
      'By carefully orchestrating glossy surface highlights, inner rim lights, and muted diffuse shadows, we reintroduce a sense of physical touch without falling into tacky skeuomorphism.',
      'The key lies in restraint: soft pearl wash backgrounds, a disciplined 60-30-10 color balance, and reserving high-vibrancy aurora gradients solely for primary touchpoints.'
    ],
  },
  {
    id: 'student-workflows',
    title: 'Designing for Cognitive Balance in Student Workflows',
    date: 'January 2026',
    readTime: '5 min read',
    category: 'Product Research',
    summary: 'A study on how reducing unnecessary visual noise and badge alerts improves sustained academic focus among undergrads.',
    content: [
      'During my second year in computer science, I noticed how educational portals bombarded learners with red badges, high-stress countdowns, and fragmented notifications.',
      'Our team conducted user sessions with 40 fellow students to test calm UI paradigms: replacing aggressive badges with serene progress bars, unboxed quiet metadata, and ambient day/night transitions.',
      'The results demonstrated a 34% reduction in self-reported exam stress and significantly higher sustained task completion rates.'
    ],
  },
  {
    id: 'accessible-dark-mode',
    title: 'Optical Compensation: The Hidden Art of Accessible Dark Mode',
    date: 'November 2025',
    readTime: '3 min read',
    category: 'Frontend Engineering',
    summary: 'Practical tips on contrast ratios, letter-spacing tweaks, and elevated card luminescence when implementing dual themes.',
    content: [
      'Inverting colors is not dark mode. Pure white text on pure black causes halation, eye strain, and typographic blurriness for astigmatic users.',
      'In this article, I share techniques for optical compensation: tinting the dark canvas with deep midnight blue (#0C0F1D), expanding letter-tracking by 0.01em, and using layered translucency for cards.',
      'Accessibility should never be an afterthought—it is the bedrock of delightful engineering.'
    ],
  },
];

export const ACADEMIC_STATS = [
  { label: 'Current CGPA', value: '3.92', subtext: 'Computer Science Major' },
  { label: 'Curated Projects', value: '12+', subtext: 'Case Studies & Production Apps' },
  { label: 'Hackathons & Awards', value: '4', subtext: 'Regional UI/UX & Tech Honors' },
  { label: 'User Research Hours', value: '180+', subtext: 'Interviews & Usability Sessions' },
];
