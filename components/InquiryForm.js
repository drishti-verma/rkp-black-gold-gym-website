"use client";

import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { membershipPlans } from "@/lib/data";
import { whatsappHref } from "@/lib/utils";
import MagneticButton from "./MagneticButton";

const steps = [
  { title: "Identity", fields: ["fullName", "mobile", "email", "ageGroup"] },
  { title: "Goal", fields: ["goal", "membership", "personalTraining", "preferredTime", "experience"] },
  { title: "Confirm", fields: ["message", "consent"] }
];

export default function InquiryForm({ compact = false }) {
  const [step, setStep] = useState(0);
  const [server, setServer] = useState({ status: "idle", message: "" });
  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    formState: { errors, isSubmitting },
    watch
  } = useForm({ mode: "onBlur", defaultValues: { personalTraining: "Maybe", membership: "quarterly", consent: false, website: "" } });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const plan = params.get("plan");
    if (plan) setValue("membership", plan);
  }, [setValue]);

  async function next() {
    const valid = await trigger(steps[step].fields);
    if (valid) setStep((value) => Math.min(value + 1, steps.length - 1));
  }

  async function onSubmit(data) {
    setServer({ status: "loading", message: "" });
    const response = await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    if (!response.ok) {
      setServer({ status: "error", message: result.message || "Please check the form and try again." });
      return;
    }
    setServer({ status: "success", message: "Inquiry received. Use WhatsApp for the fastest follow-up." });
  }

  if (server.status === "success") {
    return (
      <div className="glass-panel relative overflow-hidden rounded-sm p-8 text-center">
        <div className="confetti" aria-hidden="true" />
        <CheckCircle2 className="mx-auto h-12 w-12 text-blackgold-gold" />
        <h2 className="mt-4 font-display text-5xl text-blackgold-bone">Inquiry Sent</h2>
        <p className="mx-auto mt-3 max-w-xl text-blackgold-bone/68">{server.message}</p>
        <div className="mt-6 flex justify-center">
          <MagneticButton href={whatsappHref("Namaste RKP BLACK GOLD GYM, I submitted the membership inquiry form and want to follow up.")} target="_blank" rel="noreferrer">
            Continue on WhatsApp
          </MagneticButton>
        </div>
      </div>
    );
  }

  const progress = ((step + 1) / steps.length) * 100;
  const selectedMembership = watch("membership");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass-panel rounded-sm p-5 sm:p-7" noValidate>
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.14em] text-blackgold-bone/52">
          <span>Step {step + 1} of {steps.length}</span>
          <span>{steps[step].title}</span>
        </div>
        <div className="mt-3 h-1 overflow-hidden rounded bg-white/10">
          <div className="h-full bg-metal transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <input type="text" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" {...register("website")} />

      {step === 0 && (
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full name" error={errors.fullName?.message}>
            <input {...register("fullName", { required: "Full name is required.", minLength: { value: 2, message: "Enter your full name." } })} className="field" />
          </Field>
          <Field label="Mobile number" error={errors.mobile?.message}>
            <input {...register("mobile", { required: "Mobile number is required.", pattern: { value: /^[+0-9\s-]{8,16}$/, message: "Enter a valid mobile number." } })} className="field" />
          </Field>
          <Field label="Email address" error={errors.email?.message}>
            <input type="email" {...register("email", { pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address." } })} className="field" />
          </Field>
          <Field label="Age group" error={errors.ageGroup?.message}>
            <select {...register("ageGroup", { required: "Choose an age group." })} className="field">
              <option value="">Choose</option>
              <option>Under 18</option>
              <option>18-25</option>
              <option>26-35</option>
              <option>36-45</option>
              <option>46+</option>
            </select>
          </Field>
        </div>
      )}

      {step === 1 && (
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Fitness goal" error={errors.goal?.message}>
            <select {...register("goal", { required: "Choose your goal." })} className="field">
              <option value="">Choose</option>
              <option>Fat Loss</option>
              <option>Muscle Gain</option>
              <option>Strength</option>
              <option>Fitness</option>
              <option>Lifestyle Transformation</option>
            </select>
          </Field>
          <Field label="Preferred membership" error={errors.membership?.message}>
            <select {...register("membership", { required: "Choose a membership." })} className="field">
              {membershipPlans.map((plan) => <option key={plan.slug} value={plan.slug}>{plan.title}</option>)}
            </select>
          </Field>
          <Field label="Personal training interest" error={errors.personalTraining?.message}>
            <select {...register("personalTraining")} className="field">
              <option>Yes</option>
              <option>Maybe</option>
              <option>No</option>
            </select>
          </Field>
          <Field label="Preferred training time" error={errors.preferredTime?.message}>
            <select {...register("preferredTime", { required: "Choose preferred training time." })} className="field">
              <option value="">Choose</option>
              <option>Morning 5:00 AM - 11:00 AM</option>
              <option>Evening 4:00 PM - 10:00 PM</option>
            </select>
          </Field>
          <Field label="Previous training experience" error={errors.experience?.message}>
            <select {...register("experience", { required: "Choose your experience." })} className="field">
              <option value="">Choose</option>
              <option>Beginner</option>
              <option>Returning after a break</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </Field>
          <div className="rounded-sm border border-blackgold-gold/20 bg-blackgold-gold/8 p-4 text-sm text-blackgold-bone/62">
            Selected plan: <span className="text-blackgold-gold">{selectedMembership}</span>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="grid gap-4">
          <Field label="Message" error={errors.message?.message}>
            <textarea rows="5" {...register("message")} className="field resize-y" placeholder="Tell us your goal, schedule, or any questions." />
          </Field>
          <label className="flex items-start gap-3 text-sm leading-6 text-blackgold-bone/68">
            <input type="checkbox" {...register("consent", { required: "Consent is required." })} className="mt-1 accent-blackgold-gold" />
            I consent to be contacted by RKP BLACK GOLD GYM about this inquiry. I understand pricing and availability are confirmed directly by the gym.
          </label>
          {errors.consent && <p className="text-sm text-red-300">{errors.consent.message}</p>}
        </div>
      )}

      {server.status === "error" && <p className="mt-5 rounded-sm border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-200">{server.message}</p>}

      <div className="mt-7 flex flex-wrap justify-between gap-3">
        <button type="button" onClick={() => setStep((value) => Math.max(value - 1, 0))} className="focus-ring min-h-12 rounded-sm border border-white/10 px-5 text-sm font-bold uppercase tracking-[0.12em] text-blackgold-bone/72 disabled:opacity-40" disabled={step === 0}>
          Back
        </button>
        {step < steps.length - 1 ? (
          <MagneticButton type="button" onClick={next}>Next</MagneticButton>
        ) : (
          <MagneticButton type="submit">{isSubmitting || server.status === "loading" ? "Sending..." : "Submit Inquiry"}</MagneticButton>
        )}
      </div>
      <style jsx>{`
        .field {
          min-height: 48px;
          width: 100%;
          border-radius: 2px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(0, 0, 0, 0.42);
          padding: 0.75rem 0.9rem;
          color: #f2efe6;
          outline: none;
        }
        .field:focus {
          border-color: #d4af37;
        }
        .confetti::before,
        .confetti::after {
          content: "";
          position: absolute;
          inset: 12% 18%;
          background-image: radial-gradient(circle, rgba(212, 175, 55, 0.9) 0 2px, transparent 3px);
          background-size: 34px 34px;
          animation: fall 1.2s ease-out both;
        }
        .confetti::after {
          inset: 18% 8%;
          animation-delay: 0.1s;
        }
        @keyframes fall {
          from { transform: translateY(-18px); opacity: 1; }
          to { transform: translateY(70px); opacity: 0; }
        }
      `}</style>
    </form>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="grid gap-2 text-sm text-blackgold-bone/66">
      {label}
      {children}
      {error && <span className="text-sm text-red-300">{error}</span>}
    </label>
  );
}
