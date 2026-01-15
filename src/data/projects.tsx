import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "vigora",
    category: "Fitness app",
    title: "Vigora",
    src: "/assets/projects-screenshots/Vigora/opera_2w7Ixc4Rdz.png",
    screenshots: ["opera_2w7Ixc4Rdz.png", "opera_vIJbDW9zQD.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.chakra,
        PROJECT_SKILLS.reactQuery,
        PROJECT_SKILLS.firebase,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.sockerio,
      ],
    },
    live: "https://vigora-pt-frontend.vercel.app",
    github: "https://github.com/seu-usuario/Vigora",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Your Personal Fitness Companion
          </TypographyP>
          <TypographyP className="font-mono ">
            Vigora is a comprehensive fitness platform designed to help you track workouts, monitor progress, and stay motivated on your fitness journey. Connect with your Personal Trainer, access customized workout plans, and log exercises with ease. Whether you&apos;re a beginner or an athlete, Vigora is your ultimate gym companion.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Workout Tracking</TypographyH3>
          <p className="font-mono mb-2">
            Log your exercises with detailed information including sets, reps, weight, and duration. Track your progress over time and watch yourself get stronger.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/Vigora/opera_2w7Ixc4Rdz.png`,
              `${BASE_PATH}/Vigora/opera_vIJbDW9zQD.png`,
              `${BASE_PATH}/Vigora/opera_tbJHWvOXhK.png`,
              `${BASE_PATH}/Vigora/opera_9qSsuLLz3K.png`,
              `${BASE_PATH}/Vigora/opera_iBltcajFXw.png`,
              `${BASE_PATH}/Vigora/opera_IiExOXyLmc.png`,
              `${BASE_PATH}/Vigora/opera_Nvg9poGSNG.png`,
              `${BASE_PATH}/Vigora/opera_skymWtZEvZ.png`,
              
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Personalized Plans</TypographyH3>
          <p className="font-mono mb-2">
            Receive customized workout plans tailored to your fitness goals and experience level. Access structured routines created by certified trainers.
          </p>
          <TypographyH3 className="my-4 mt-8">Trainer Connection</TypographyH3>
          <p className="font-mono mb-2">
            Connect with your personal trainer directly through the app. Share your progress, get real-time feedback, and receive guidance on your fitness journey.
          </p>
          <TypographyH3 className="my-4 mt-8">Progress Dashboard</TypographyH3>
          <p className="font-mono mb-2">
            Visualize your fitness progress with comprehensive charts and analytics. Monitor key metrics like total volume lifted, calories burned, and personal records.
          </p>
          <TypographyH3 className="my-4 mt-8">Real-time Notifications</TypographyH3>
          <p className="font-mono mb-2">
            Stay on track with timely reminders for your scheduled workouts. Receive motivation and encouragement to help you reach your fitness goals.
          </p>
        </div>
      );
    },
  },
  {
    id: "project-2",
    category: "Coming soon",
    title: "Project 2",
    src: "/assets/projects-screenshots/placeholder.png",
    screenshots: [],
    live: "#",
    skills: {
      frontend: [],
      backend: [],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono text-center text-xl">
            🚀 Projeto em construção...
          </TypographyP>
          <p className="font-mono text-center">
            Adicione a descrição e detalhes deste projeto aqui.
          </p>
        </div>
      );
    },
  },
  {
    id: "project-3",
    category: "Coming soon",
    title: "Project 3",
    src: "/assets/projects-screenshots/placeholder.png",
    screenshots: [],
    live: "#",
    skills: {
      frontend: [],
      backend: [],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono text-center text-xl">
            🚀 Projeto em construção...
          </TypographyP>
          <p className="font-mono text-center">
            Adicione a descrição e detalhes deste projeto aqui.
          </p>
        </div>
      );
    },
  },
  {
    id: "project-4",
    category: "Coming soon",
    title: "Project 4",
    src: "/assets/projects-screenshots/placeholder.png",
    screenshots: [],
    live: "#",
    skills: {
      frontend: [],
      backend: [],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono text-center text-xl">
            🚀 Projeto em construção...
          </TypographyP>
          <p className="font-mono text-center">
            Adicione a descrição e detalhes deste projeto aqui.
          </p>
        </div>
      );
    },
  },
  {
    id: "project-5",
    category: "Coming soon",
    title: "Project 5",
    src: "/assets/projects-screenshots/placeholder.png",
    screenshots: [],
    live: "#",
    skills: {
      frontend: [],
      backend: [],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono text-center text-xl">
            🚀 Projeto em construção...
          </TypographyP>
          <p className="font-mono text-center">
            Adicione a descrição e detalhes deste projeto aqui.
          </p>
        </div>
      );
    },
  },
  {
    id: "project-6",
    category: "Coming soon",
    title: "Project 6",
    src: "/assets/projects-screenshots/placeholder.png",
    screenshots: [],
    live: "#",
    skills: {
      frontend: [],
      backend: [],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono text-center text-xl">
            🚀 Projeto em construção...
          </TypographyP>
          <p className="font-mono text-center">
            Adicione a descrição e detalhes deste projeto aqui.
          </p>
        </div>
      );
    },
  },
];
export default projects;
