import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import VideoPlayer from "@/components/video-player";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiSwift,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiIonic,
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
  swift: {
    title: "Swift",
    bg: "black",
    fg: "white",
    icon: <SiSwift />,
  },
  ionic: {
    title: "Ionic",
    bg: "black",
    fg: "white",
    icon: <SiIonic />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <span className="font-bold text-lg">☕</span>,
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
    id: "pawplace",
    category: "iOS App",
    title: "PawPlace",
    src: "/assets/projects-screenshots/Pawplace/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"],
    live: "#",
    skills: {
      frontend: [PROJECT_SKILLS.swift],
      backend: [PROJECT_SKILLS.firebase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Connect Rescue Animals with Loving Homes
          </TypographyP>
          <TypographyP className="font-mono">
            PawPlace is a native iOS application built with SwiftUI that connects abandoned and rescue animals with potential adopters. With a modern and user-friendly interface, the app makes it easy to discover and adopt animals while offering favorites, notifications, and a complete authentication system.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Animal Discovery</TypographyH3>
          <p className="font-mono mb-2">
            Browse through a paginated list of rescue animals with advanced filters by type (dogs, cats, and more). View detailed profiles with photos, descriptions, and adoption requirements.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/Pawplace/1.png`,
              `${BASE_PATH}/Pawplace/2.png`,
              `${BASE_PATH}/Pawplace/3.png`,
              `${BASE_PATH}/Pawplace/4.png`,
              `${BASE_PATH}/Pawplace/5.png`,
              `${BASE_PATH}/Pawplace/6.png`,
              `${BASE_PATH}/Pawplace/7.png`,
            ]}
            maxHeight="500px"
          />
          <TypographyH3 className="my-4 mt-8">Favorites & Bookmarks</TypographyH3>
          <p className="font-mono mb-2">
            Mark your favorite animals and save them for later. Organize your bookmarks and easily revisit animals you&apos;re interested in adopting.
          </p>
          <TypographyH3 className="my-4 mt-8">Push Notifications</TypographyH3>
          <p className="font-mono mb-2">
            Receive real-time alerts about newly available rescue animals that match your preferences. Stay updated on adoption opportunities in your area.
          </p>
          <TypographyH3 className="my-4 mt-8">Secure Authentication</TypographyH3>
          <p className="font-mono mb-2">
            Sign up and log in securely with Firebase Authentication. Manage your profile, preferences, and adoption history all in one place.
          </p>
          <TypographyH3 className="my-4 mt-8">User Profile & Achievements</TypographyH3>
          <p className="font-mono mb-2">
            Track your adoption journey with a personalized profile. Earn achievements and badges as you explore and learn about rescue animals.
          </p>
        </div>
      );
    },
  },
  {
    id: "project-3",
    category: "Weather App",
    title: "Weather Forecast",
    src: "/assets/projects-screenshots/WeatherApp/opera_69GXdc8o5M.png",
    screenshots: ["opera_69GXdc8o5M.png", "opera_ArmeYFVLef.png", "opera_Jk3YwlMWI6.png", "opera_xQzmoPfKN0.png"],
    live: "#",
    skills: {
      frontend: [PROJECT_SKILLS.ionic, PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Real-time Weather Forecasts at Your Fingertips
          </TypographyP>
          <TypographyP className="font-mono">
            Weather Forecast is a cross-platform Ionic application that provides real-time weather information by integrating with the WeatherAPI and OpenWeatherMap APIs. Users can search for weather by city, save favorites, check air quality, and access detailed 5-day forecasts with a custom backend for personalized user settings and feedback.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">Current Weather & Forecasts</TypographyH3>
          <p className="font-mono mb-2">
            Get real-time weather information for any city including temperature, humidity, wind speed, and atmospheric pressure. Access detailed 5-day forecasts to plan ahead.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/WeatherApp/opera_69GXdc8o5M.png`,
              `${BASE_PATH}/WeatherApp/opera_ArmeYFVLef.png`,
              `${BASE_PATH}/WeatherApp/opera_Jk3YwlMWI6.png`,
              `${BASE_PATH}/WeatherApp/opera_xQzmoPfKN0.png`,
            ]}
            maxHeight="500px"
          />
          <TypographyH3 className="my-4 mt-8">Air Quality Monitoring</TypographyH3>
          <p className="font-mono mb-2">
            Monitor air pollution levels and air quality index (AQI) for any location. Get health recommendations based on current air quality conditions.
          </p>
          <TypographyH3 className="my-4 mt-8">Favorite Cities</TypographyH3>
          <p className="font-mono mb-2">
            Save your favorite cities for quick access. Manage your favorites and get instant weather updates for locations that matter to you.
          </p>
          <TypographyH3 className="my-4 mt-8">User Preferences & Settings</TypographyH3>
          <p className="font-mono mb-2">
            Customize your experience with personalized settings including temperature units (Celsius/Fahrenheit), theme preferences, and notification settings.
          </p>
          <TypographyH3 className="my-4 mt-8">User Feedback System</TypographyH3>
          <p className="font-mono mb-2">
            Share your feedback and suggestions directly from the app. Help us improve the weather forecasting experience with your valuable insights.
          </p>
        </div>
      );
    },
  },
  {
    id: "ludoria",
    category: "Android App",
    title: "Ludoria",
    src: "/assets/projects-screenshots/Ludoria/image.png",
    screenshots: ["Vídeo WhatsApp 2025-04-08 às 17.31.32_d79dbe1a.mp4"],
    live: "https://gitlab.com/swagga/ludoria",
    github: "https://gitlab.com/swagga/ludoria",
    skills: {
      frontend: [PROJECT_SKILLS.java],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Your Ultimate Gaming Companion
          </TypographyP>
          <TypographyP className="font-mono">
            Ludoria is an Android application developed for gaming enthusiasts, offering a comprehensive platform to discover new games, track achievements, and manage wishlist. Designed to be responsive across mobile devices and tablets, the app follows Material Design guidelines for a modern and intuitive user experience.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Game Discovery</TypographyH3>
          <p className="font-mono mb-2">
            Explore new releases, special offers, and featured games. Browse through a curated collection of games with detailed descriptions, ratings, and reviews.
          </p>
          <VideoPlayer
            videoSrc={`${BASE_PATH}/Ludoria/Ludoria.mp4`}
            maxHeight="500px"
          />
          <TypographyH3 className="my-4 mt-8">Achievement System</TypographyH3>
          <p className="font-mono mb-2">
            Track your gaming progress and achievements within the app. Unlock badges and milestones as you explore different games and complete challenges.
          </p>
          <TypographyH3 className="my-4 mt-8">Wishlist Management</TypographyH3>
          <p className="font-mono mb-2">
            Add games to your wishlist and manage your preferences. Keep track of games you want to play and get notified about price drops and special offers.
          </p>
          <TypographyH3 className="my-4 mt-8">Social Integration</TypographyH3>
          <p className="font-mono mb-2">
            Share your achievements and favorite games with friends on social media. Connect with other gamers and discuss your gaming experiences.
          </p>
          <TypographyH3 className="my-4 mt-8">Responsive Design</TypographyH3>
          <p className="font-mono mb-2">
            Optimized interface for both mobile devices and tablets. Experience seamless gameplay across different screen sizes with Material Design principles.
          </p>
        </div>
      );
    },
  },
  {
    id: "techbooks",
    category: "Book Library",
    title: "TechBooks",
    src: "/assets/projects-screenshots/techbooks/opera_gOzvNKCRLh.png",
    screenshots: ["opera_gOzvNKCRLh.png", "opera_Pw87NsZpDv.png"],
    live: "#",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.ts],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Free Knowledge, Accessible to Everyone
          </TypographyP>
          <TypographyP className="font-mono">
            TechBooks is an educational, non-profit platform dedicated to providing free access to technical books and learning materials. This project embodies the principle that knowledge should be freely accessible to students and self-learners worldwide.
          </TypographyP>
          <TypographyP className="font-mono bg-slate-900 p-4 rounded-lg my-4">
            <strong>⚖️ Educational & Non-Profit Mission</strong><br />
            This website is 100% educational and non-profit. Built to help students and self-learners access knowledge freely and easily. All books listed here are property of their respective authors and publishers. We do not claim copyright on any shared materials.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">Free Book Access</TypographyH3>
          <p className="font-mono mb-2">
            Browse and access a curated collection of technical books covering programming, web development, data science, and more. All resources are provided freely to support education.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/techbooks/opera_gOzvNKCRLh.png`,
              `${BASE_PATH}/techbooks/opera_Pw87NsZpDv.png`,
            ]}
            maxHeight="500px"
          />
          <TypographyH3 className="my-4 mt-8">Supporting Authors & Creators</TypographyH3>
          <p className="font-mono mb-2">
            We believe these works exist because of authors&apos; hard work, dedication, and generosity. If you&apos;re able, please consider purchasing the originals to support the creators behind the knowledge.
          </p>
          <TypographyH3 className="my-4 mt-8">No Monetization</TypographyH3>
          <p className="font-mono mb-2">
            This platform does not earn any money from the content. No ads, no affiliate links, no monetization — only free access to learning resources.
          </p>
          <TypographyH3 className="my-4 mt-8">Copyright Respect & DMCA</TypographyH3>
          <p className="font-mono mb-2">
            We respect copyright holders completely. Content removal requests are handled within 24 hours. We believe in dialogue over legal battles — communication is always the best path forward.
          </p>
          <TypographyP className="font-mono text-sm mt-6 italic text-slate-400">
            Status: Em Desenvolvimento (Development features and user scripts being refined)
          </TypographyP>
        </div>
      );
    },
  },
];
export default projects;
