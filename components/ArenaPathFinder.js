"use client";

import { useMemo, useState } from "react";
import { Activity, ArrowRight, Dumbbell, Flame, Gauge, Target, Trophy } from "lucide-react";
import MagneticButton from "./MagneticButton";
import SectionHeader from "./SectionHeader";

const paths = [
  {
    id: "strength",
    icon: Dumbbell,
    title: "Strength Build",
    focus: "Heavy basics, form correction, progressive overload",
    schedule: "4 days/week",
    result: "Bench, squat, deadlift confidence"
  },
  {
    id: "fat-loss",
    icon: Flame,
    title: "Fat Loss",
    focus: "Resistance training, cardio finishers, habit tracking",
    schedule: "5 days/week",
    result: "Lean, consistent, energetic routine"
  },
  {
    id: "muscle",
    icon: Trophy,
    title: "Muscle Gain",
    focus: "Hypertrophy split, pump work, recovery discipline",
    schedule: "5-6 days/week",
    result: "Visible size with cleaner technique"
  },
  {
    id: "athlete",
    icon: Activity,
    title: "Athletic Fit",
    focus: "Functional circuits, core, mobility, conditioning",
    schedule: "3-5 days/week",
    result: "Better movement and stamina"
  }
];

const levels = ["Beginner", "Intermediate", "Advanced"];

export default function ArenaPathFinder() {
  const [selectedPath, setSelectedPath] = useState(paths[0]);
  const [level, setLevel] = useState(levels[0]);

  const weeklyPlan = useMemo(() => {
    const base = selectedPath.id === "fat-loss" ? ["Strength", "Cardio", "Circuit", "Recovery", "Conditioning"] : ["Push", "Pull", "Legs", "Core", "Assessment"];
    if (level === "Beginner") return base.slice(0, 3);
    if (level === "Intermediate") return base.slice(0, 4);
    return base;
  }, [level, selectedPath.id]);

  return (
    <section className="section-pad relative overflow-hidden bg-[#070604]">
      <div className="pathfinder-depth" aria-hidden="true">
        {Array.from({ length: 7 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
      <div className="container-x relative grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <SectionHeader eyebrow="Choose Your Path" title="Find Your Arena Plan">
          <p>
            Select your main goal and training level to see a quick starter route before you call or visit the gym.
          </p>
        </SectionHeader>

        <div className="glass-panel relative overflow-hidden rounded-sm p-4 sm:p-5">
          <div className="grid items-stretch gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {paths.map((path) => {
              const Icon = path.icon;
              const active = selectedPath.id === path.id;
              return (
                <button
                  key={path.id}
                  type="button"
                  onClick={() => setSelectedPath(path)}
                  className={`focus-ring flex h-full min-h-[148px] flex-col items-start rounded-sm border p-4 text-left transition duration-300 ${
                    active ? "border-blackgold-gold bg-blackgold-gold text-black" : "border-white/10 bg-black/45 text-blackgold-bone hover:border-blackgold-gold/45"
                  }`}
                >
                  <Icon className={`h-6 w-6 ${active ? "text-black" : "text-blackgold-gold"}`} />
                  <span className="mt-4 font-display text-2xl leading-none">{path.title}</span>
                  <span className={`mt-auto pt-4 text-xs uppercase tracking-[0.12em] ${active ? "text-black/70" : "text-blackgold-bone/52"}`}>{path.schedule}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-[0.72fr_1fr]">
            <div className="rounded-sm border border-white/10 bg-black/45 p-4">
              <p className="eyebrow text-[0.62rem]">Training Level</p>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {levels.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setLevel(item)}
                    className={`focus-ring min-h-11 rounded-sm border px-2 text-[0.68rem] font-bold uppercase tracking-[0.1em] transition ${
                      level === item ? "border-blackgold-gold bg-blackgold-gold text-black" : "border-white/10 text-blackgold-bone/62 hover:border-blackgold-gold/45"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="mt-5 grid gap-3 text-sm text-blackgold-bone/70">
                <span className="inline-flex items-center gap-2"><Target className="h-4 w-4 text-blackgold-gold" /> {selectedPath.focus}</span>
                <span className="inline-flex items-center gap-2"><Gauge className="h-4 w-4 text-blackgold-gold" /> {selectedPath.result}</span>
              </div>
            </div>

            <div className="rounded-sm border border-blackgold-gold/18 bg-[linear-gradient(145deg,rgba(212,175,55,0.09),rgba(0,0,0,0.48))] p-4">
              <div className="flex items-center justify-between gap-4">
                <p className="eyebrow text-[0.62rem]">Starter Week</p>
                <span className="font-accent text-xs uppercase tracking-[0.18em] text-blackgold-gold">{level}</span>
              </div>
              <div className="mt-4 grid gap-2 sm:grid-cols-[repeat(auto-fit,minmax(88px,1fr))]">
                {weeklyPlan.map((item, index) => (
                  <div key={item} className="flex min-h-[84px] flex-col justify-between rounded-sm border border-white/10 bg-black/40 p-3">
                    <span className="font-display text-2xl text-blackgold-gold">0{index + 1}</span>
                    <span className="text-xs font-bold uppercase tracking-[0.12em] text-blackgold-bone/72">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <MagneticButton href="/inquiry" className="w-full sm:w-auto">
                  Start This Plan <ArrowRight className="h-4 w-4" />
                </MagneticButton>
                <MagneticButton href="/fitness-tools" variant="dark" className="w-full sm:w-auto">Check BMI & Calories</MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
