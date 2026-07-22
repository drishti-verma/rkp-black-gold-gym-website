"use client";

import { Calculator, Droplets, Dumbbell, Scale } from "lucide-react";
import { useMemo, useState } from "react";
import SectionHeader from "./SectionHeader";

const goals = {
  strength: "Upper/lower split with two heavy strength sessions, technique practice, and 48-72 hours between hard lifts.",
  muscle: "Hypertrophy split with 10-20 challenging sets per muscle per week, progressive overload, and planned recovery.",
  fatloss: "Resistance training 3-4 days, cardio 2-3 days, daily steps, hydration, and sustainable nutrition habits.",
  fitness: "Balanced week with strength, cardio, mobility, core and one lighter recovery session."
};

export default function FitnessTools() {
  const [units, setUnits] = useState("metric");
  const [bmi, setBmi] = useState({ age: "", height: "", weight: "" });
  const [workout, setWorkout] = useState({ goal: "strength", level: "beginner", days: 4, duration: 60, style: "gym", equipment: "full gym" });
  const [oneRm, setOneRm] = useState({ weight: "", reps: "" });
  const [waterWeight, setWaterWeight] = useState("");

  const bmiResult = useMemo(() => {
    const height = Number(bmi.height);
    const weight = Number(bmi.weight);
    if (!height || !weight || height <= 0 || weight <= 0) return null;
    const metricHeight = units === "metric" ? height / 100 : height * 0.0254;
    const metricWeight = units === "metric" ? weight : weight * 0.453592;
    const value = metricWeight / (metricHeight * metricHeight);
    let category = "General healthy range";
    if (value < 18.5) category = "Below general range";
    if (value >= 25) category = "Above general range";
    if (value >= 30) category = "Higher health-risk range";
    return { value: value.toFixed(1), category };
  }, [bmi, units]);

  const workoutPlan = useMemo(() => {
    const days = Number(workout.days);
    const duration = Number(workout.duration);
    if (!days || days < 1 || days > 7 || duration < 20) return "Choose realistic training days and session duration.";
    return `${days} training days/week, ${duration} minutes/session. ${goals[workout.goal]} Level: ${workout.level}. Style: ${workout.style}. Equipment: ${workout.equipment}.`;
  }, [workout]);

  const oneRmValue = useMemo(() => {
    const weight = Number(oneRm.weight);
    const reps = Number(oneRm.reps);
    if (!weight || !reps || reps < 1) return null;
    return Math.round(weight * (1 + reps / 30));
  }, [oneRm]);

  const waterValue = useMemo(() => {
    const weight = Number(waterWeight);
    if (!weight || weight <= 0) return null;
    return (weight * 0.035).toFixed(1);
  }, [waterWeight]);

  return (
    <section id="fitness-tools" className="section-pad bg-black">
      <div className="container-x">
        <SectionHeader eyebrow="Fitness calculators" title="Tools For Smarter Training">
          <p>
            These tools provide general fitness guidance only. They are not diagnoses, prescriptions or replacements for qualified professional advice.
          </p>
        </SectionHeader>
        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-2">
          <ToolCard icon={Scale} title="BMI Calculator">
            <div className="mb-4 inline-flex rounded-sm border border-blackgold-gold/25 bg-black p-1">
              {["metric", "imperial"].map((item) => (
                <button key={item} onClick={() => setUnits(item)} className={`focus-ring min-h-10 rounded-sm px-3 text-xs font-bold uppercase tracking-[0.12em] ${units === item ? "bg-blackgold-gold text-black" : "text-blackgold-bone/62"}`}>
                  {item}
                </button>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <Input label="Age" value={bmi.age} onChange={(value) => setBmi({ ...bmi, age: value })} />
              <Input label={units === "metric" ? "Height (cm)" : "Height (in)"} value={bmi.height} onChange={(value) => setBmi({ ...bmi, height: value })} />
              <Input label={units === "metric" ? "Weight (kg)" : "Weight (lb)"} value={bmi.weight} onChange={(value) => setBmi({ ...bmi, weight: value })} />
            </div>
            {bmiResult && <Result title={`BMI ${bmiResult.value}`} copy={`${bmiResult.category}. Use this as a broad screening estimate, not a complete health assessment.`} />}
          </ToolCard>

          <ToolCard icon={Dumbbell} title="Workout Calculator">
            <div className="grid gap-3 sm:grid-cols-2">
              <Select label="Goal" value={workout.goal} onChange={(value) => setWorkout({ ...workout, goal: value })} options={[["strength", "Strength"], ["muscle", "Muscle Gain"], ["fatloss", "Fat Loss"], ["fitness", "Fitness"]]} />
              <Select label="Experience" value={workout.level} onChange={(value) => setWorkout({ ...workout, level: value })} options={[["beginner", "Beginner"], ["intermediate", "Intermediate"], ["advanced", "Advanced"]]} />
              <Input label="Days/week" value={workout.days} onChange={(value) => setWorkout({ ...workout, days: value })} />
              <Input label="Minutes/session" value={workout.duration} onChange={(value) => setWorkout({ ...workout, duration: value })} />
              <Select label="Style" value={workout.style} onChange={(value) => setWorkout({ ...workout, style: value })} options={[["gym", "Gym"], ["functional", "Functional"], ["mixed", "Mixed"]]} />
              <Input label="Equipment" value={workout.equipment} onChange={(value) => setWorkout({ ...workout, equipment: value })} type="text" />
            </div>
            <Result title="Suggested Weekly Structure" copy={workoutPlan} />
          </ToolCard>

          <ToolCard icon={Calculator} title="One-Rep Max Estimate">
            <div className="grid gap-3 sm:grid-cols-2">
              <Input label="Weight lifted" value={oneRm.weight} onChange={(value) => setOneRm({ ...oneRm, weight: value })} />
              <Input label="Reps completed" value={oneRm.reps} onChange={(value) => setOneRm({ ...oneRm, reps: value })} />
            </div>
            {oneRmValue && <Result title={`${oneRmValue} estimated 1RM`} copy="Use conservative loads and a spotter for heavy attempts. Estimates are less reliable at high rep counts." />}
          </ToolCard>

          <ToolCard icon={Droplets} title="Water Intake Estimate">
            <Input label="Body weight (kg)" value={waterWeight} onChange={setWaterWeight} />
            {waterValue && <Result title={`${waterValue} L/day estimate`} copy="Training heat, sweat rate and medical needs can change hydration requirements." />}
          </ToolCard>
        </div>
      </div>
    </section>
  );
}

function ToolCard({ icon: Icon, title, children }) {
  return (
    <article className="glass-panel flex h-full flex-col rounded-sm p-5">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-sm border border-blackgold-gold/25 bg-blackgold-gold/10 text-blackgold-gold"><Icon className="h-5 w-5" /></span>
        <h3 className="font-display text-3xl text-blackgold-bone">{title}</h3>
      </div>
      {children}
    </article>
  );
}

function Input({ label, value, onChange, type = "number" }) {
  return (
    <label className="grid gap-2 text-sm text-blackgold-bone/64">
      {label}
      <input type={type} value={value} onChange={(event) => onChange(event.target.value)} className="min-h-12 rounded-sm border border-white/10 bg-black/40 px-3 text-blackgold-bone outline-none focus:border-blackgold-gold" />
    </label>
  );
}

function Select({ label, value, onChange, options }) {
  return (
    <label className="grid gap-2 text-sm text-blackgold-bone/64">
      {label}
      <select value={value} onChange={(event) => onChange(event.target.value)} className="min-h-12 rounded-sm border border-white/10 bg-black/40 px-3 text-blackgold-bone outline-none focus:border-blackgold-gold">
        {options.map(([id, text]) => <option key={id} value={id}>{text}</option>)}
      </select>
    </label>
  );
}

function Result({ title, copy }) {
  return (
    <div className="mt-5 rounded-sm border border-blackgold-gold/20 bg-blackgold-gold/8 p-4">
      <p className="font-display text-3xl text-blackgold-gold">{title}</p>
      <p className="mt-2 text-sm leading-7 text-blackgold-bone/64">{copy}</p>
    </div>
  );
}
