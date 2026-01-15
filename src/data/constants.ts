// thoda zada ts ho gya idhar
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  VIM = "vim",
  VERCEL = "vercel",
  PYTHON = "python",
  PHP = "php",
  LUA = "lua",
  JAVA = "java",
  KOTLIN = "kotlin",
  SWIFT = "swift",
  MYSQL = "mysql",
  MARIADB = "mariadb",
  XAMPP = "xampp",
  ANGULAR = "angular",
  CLOUDFLARE = "cloudflare",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
  level: "proficient" | "learning";
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: {
    id: 25,
    name: "python",
    label: "Python",
    shortDescription: "Indentation matters here! The snake that conquered the world �✨",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    level: "proficient",
  },
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "The only language that runs everywhere (sometimes unexpectedly!) 🌍�",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    level: "proficient",
    
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "JavaScript's overprotective parent that catches all your mistakes! �️�",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    level: "proficient",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "Semantic tags go brrr! The building blocks of the internet 🏗️🌐",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    level: "proficient",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Flexbox my beloved! Making things look pretty is an art form 🎨�",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    level: "proficient",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Hooks, components, and the eternal battle with re-renders! ⚛️🔄",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: "proficient",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Vue",
    shortDescription: "The approachable framework that just works! No cap energy ✨🟢",
    color: "#41b883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    level: "proficient",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "Full-stack everything! SSR, SSG, ISR - pick your poison! �⚡",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    level: "proficient",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "Utility classes? More like Utility ASSES when you have 100 classes! 😂🌪️",
    color: "#38bdf8",
    icon: "https://www.svgrepo.com/show/374118/tailwind.svg",
    level: "proficient",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript took the red pill and went full-stack! 💊🔙",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    level: "proficient",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "Lightweight server? More like lightweight on features but heavyweight on vibes! 🚂✨",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    level: "proficient",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "The elephant in the database room! Reliable, powerful, and always ready 💪",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    level: "proficient",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "JSON documents? Yes please! Schema-free chaos in the best way! ��",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    level: "proficient",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "Commit, push, panic! The holy trinity of a developer's life 😰",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    level: "proficient",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "Where code lives, communities thrive, and drama unfolds! 🐙💻",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    level: "proficient",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Prettier",
    shortDescription: "Code formatter that fixes your ugly code while you sleep! 😴✨",
    color: "#f7b93a",
    icon: "https://www.svgrepo.com/show/521304/prettier-16.svg",
    level: "proficient",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription: "Left-pad gate was wild! But it's still the default package manager 📦�",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    level: "proficient",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription: "Google's grab-bag of services! Auth, DB, hosting - all in one! 🔥�",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    level: "proficient",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "WordPress",
    shortDescription: "40% of the web runs on this! Plugins upon plugins upon plugins 🎭�",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
    level: "learning",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "Open-source everything! Terminal hacker energy unlocked �️⚡",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    level: "learning",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "Works on my machine? No more! Containerize everything! 🐳�",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    level: "learning",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "NginX",
    shortDescription: "Handles millions of connections like it's nothing! Reverse proxy GOAT �⚡",
    color: "#008000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    level: "learning",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription:
      "Amazon's playground! Services for everything, bills for something else! �☁️",
    color: "#ff9900",
    icon: "https://www.svgrepo.com/show/376356/aws.svg",
    level: "learning",
  },
  [SkillNames.VIM]: {
    id: 23,
    name: "vim",
    label: "Vim",
    shortDescription: "Escape, escape, escape! The editor that makes you question your life choices 🔥�",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
    level: "learning",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "Deploy faster than you can say 'git push'! Edge functions are chef's kiss! 👨‍🍳🚀",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    level: "proficient",
  },
  [SkillNames.PHP]: {
    id: 26,
    name: "php",
    label: "PHP",
    shortDescription:
      "The language that powers the internet's older websites with love! 💜�",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-plain.svg",
    level: "proficient",
  },
  [SkillNames.LUA]: {
    id: 27,
    name: "lua",
    label: "Lua",
    shortDescription:
      "The script that powers gaming dreams! Small but mighty, like a developer with espresso! ☕🎮",
    color: "#000080",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lua/lua-original.svg",
    level: "proficient",
  },
  [SkillNames.JAVA]: {
    id: 28,
    name: "java",
    label: "Java",
    shortDescription:
      "Write once, debug everywhere! The verbose language that makes comments look like code! 📝☕",
    color: "#007396",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    level: "proficient",
  },
  [SkillNames.KOTLIN]: {
    id: 29,
    name: "kotlin",
    label: "Kotlin",
    shortDescription:
      "Java's cooler cousin who went to the gym! Less boilerplate, more swag! 💪🏋️",
    color: "#7F52FF",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
    level: "proficient",
  },
  [SkillNames.SWIFT]: {
    id: 30,
    name: "swift",
    label: "Swift",
    shortDescription:
      "Fast as its name suggests! Making iOS dreams a reality, one optional at a time! 🚀📱",
    color: "#FA7343",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg",
    level: "proficient",
  },
  [SkillNames.MYSQL]: {
    id: 31,
    name: "mysql",
    label: "MySQL",
    shortDescription:
      "The OG database! It's been holding our data since the internet was young! 🗄️⚡",
    color: "#00758F",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    level: "proficient",
  },
  [SkillNames.MARIADB]: {
    id: 32,
    name: "mariadb",
    label: "MariaDB",
    shortDescription:
      "MySQL's fork that said 'we can do better!' And honestly? They weren't wrong! 🍴😎",
    color: "#003545",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg",
    level: "proficient",
  },
  [SkillNames.XAMPP]: {
    id: 33,
    name: "xampp",
    label: "XAMPP",
    shortDescription:
      "Local development stack go brrr! Apache, MySQL, PHP in one easy package! 📦🔧",
    color: "#FB7A24",
    icon: "https://www.svgrepo.com/show/306995/xampp.svg",
    level: "proficient",
  },
  [SkillNames.ANGULAR]: {
    id: 34,
    name: "angular",
    label: "Angular",
    shortDescription:
      "Google's heavyweight framework! Dependency injection and decorators galore! 📐🎪",
    color: "#DD0031",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
    level: "proficient",
  },
  [SkillNames.CLOUDFLARE]: {
    id: 35,
    name: "cloudflare",
    label: "Cloudflare",
    shortDescription:
      "Fast DNS, DDoS protection, and edge workers! Internet security that slaps! 🛡️⚡",
    color: "#F38020",
    icon: "https://www.svgrepo.com/show/353564/cloudflare.svg",
    level: "learning",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Start date",
    endDate: "End date, or not :)",
    title: "Next opportunity",
    company: "maybe your company",
    description: [
      "Currently open to joining a forward-thinking team as a junior full stack developer.",
      "Building scalable web applications with modern tech — and ready to bring that energy to you.",
      "Looking for a place where I can grow, contribute, and make a real impact.",
      "If you're reading this and thinking 'we need someone like this'… maybe this is the sign.",
      "Let's build something great — your company could be the next chapter.",
    ],
    skills: [
      SkillNames.NEXTJS,
    ],
  },
  {
    id: 2,
    startDate: "Feb 2025",
    endDate: "...",
    title: "Freelance Full Stack Junior Developer",
    company: "Independent Projects",
    description: [
      "Delivered custom web solutions for diverse clients across various industries.",
      "Managed full project lifecycles from design, development, to deployment.",
      "Built scalable applications using modern tech stack and best practices.",
      "Maintained high client satisfaction through effective communication and support.",
    ],
    skills: [
      SkillNames.REACT,

    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

