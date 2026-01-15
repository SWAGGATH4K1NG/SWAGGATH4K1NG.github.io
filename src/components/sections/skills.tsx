import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { SKILLS } from "@/data/constants";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SkillsSection = () => {
  const skillsList = Object.values(SKILLS);
  const proficientSkills = skillsList.filter(s => s.level === "proficient");
  const learningSkills = skillsList.filter(s => s.level === "learning");

  return (
    <SectionWrapper id="skills" className="w-full min-h-screen py-20 pointer-events-auto">
      <SectionHeader id='skills' title="Tech Stack" desc="Technologies I work with" />
      
      {/* PROFICIENT SKILLS */}
      <div className="mt-16 px-4 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Comfortable</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {proficientSkills.map((skill) => (
            <Tooltip key={skill.id} delayDuration={200}>
              <TooltipTrigger asChild>
                <div className="flex flex-col items-center justify-center gap-3 p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="relative w-10 h-10 md:w-12 md:h-12">
                    <Image
                      src={skill.icon}
                      alt={skill.label}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-center text-sm md:text-base font-semibold text-slate-900 dark:text-white">
                    {skill.label}
                  </p>
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-xs">
                <p className="text-sm">{skill.shortDescription}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>

      {/* SEPARATOR */}
      <div className="my-8 border-t border-slate-300 dark:border-slate-400 max-w-6xl mx-auto"></div>

      {/* LEARNING SKILLS */}
      <div className="px-4 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Learning</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {learningSkills.map((skill) => (
            <Tooltip key={skill.id} delayDuration={200}>
              <TooltipTrigger asChild>
                <div className="flex flex-col items-center justify-center gap-3 p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="relative w-10 h-10 md:w-12 md:h-12">
                    <Image
                      src={skill.icon}
                      alt={skill.label}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-center text-sm md:text-base font-semibold text-slate-900 dark:text-white">
                    {skill.label}
                  </p>
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-xs">
                <p className="text-sm">{skill.shortDescription}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
