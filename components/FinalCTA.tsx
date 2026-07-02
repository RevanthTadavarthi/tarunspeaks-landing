"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface FinalCTAProps {
  id?: string;
}

export default function FinalCTA({ id }: FinalCTAProps) {
  const [uiState, setUiState] = useState<'form' | 'loading' | 'success'>('form');
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    role: "",
    goal: "",
    source: "",
  });

  useEffect(() => {
    if (uiState === "success") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [uiState]);

  const closeSuccessModal = () => {
    setFormData({ name: "", phone: "", email: "", role: "", goal: "", source: "" });
    setUiState("form");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side sanitization & validation
    const sanitizedName = formData.name.trim().replace(/[<>]/g, "");
    const sanitizedPhone = formData.phone.trim().replace(/[<>]/g, "");
    const sanitizedEmail = formData.email.trim().toLowerCase().replace(/[<>]/g, "");
    const sanitizedRole = formData.role.trim().replace(/[<>]/g, "");
    const sanitizedGoal = formData.goal.trim().replace(/[<>]/g, "");
    const sanitizedSource = formData.source.trim().replace(/[<>]/g, "");

    if (sanitizedName.length < 2 || sanitizedName.length > 70) {
      setErrorMsg("Please enter a valid name (2-70 characters).");
      return;
    }
    if (sanitizedPhone.length < 8 || sanitizedPhone.length > 20) {
      setErrorMsg("Please enter a valid phone number.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!sanitizedRole) {
      setErrorMsg("Please select your current role.");
      return;
    }
    if (sanitizedGoal.length < 5 || sanitizedGoal.length > 500) {
      setErrorMsg("Please specify your goals (5-500 characters).");
      return;
    }

    setUiState("loading");
    setErrorMsg("");

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000); // 12 seconds timeout limit

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: sanitizedName,
          phone: sanitizedPhone,
          email: sanitizedEmail,
          role: sanitizedRole,
          goal: sanitizedGoal,
          source: sanitizedSource,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (res.ok) {
        setUiState("success");
      } else {
        setUiState("form");
        setErrorMsg("Something went wrong. Please email us at teamtarunspeaks@gmail.com");
      }
    } catch (err: any) {
      setUiState("form");
      if (err.name === "AbortError") {
        setErrorMsg("Connection timed out. Please check your internet connection or email us at teamtarunspeaks@gmail.com");
      } else {
        setErrorMsg("Something went wrong. Please email us at teamtarunspeaks@gmail.com");
      }
    }
  };

  const inputClass = "w-full bg-transparent border-b border-[#222222] rounded-none py-[11px] px-0 text-white/80 placeholder:text-white/30 focus:outline-none focus:border-white transition-colors font-mono text-sm";
  const labelClass = "block text-[13px] text-white/60 mb-[6px] font-mono uppercase tracking-wider";

  return (
    <section id={id || "apply"} className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-[#1b1b1b]">
      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-center mb-4 text-white uppercase tracking-[-0.04em] leading-[1.0] max-w-2xl">
          Ready to stop learning in fragments?
        </h2>
        <div className="text-[#8e8e93] text-center mb-12 text-base leading-[1.65]">
          Apply for Batch 14. We'll be in touch within 48 hours.
        </div>

        {/* ALWAYS RENDER FORM & LOADING */}
        <div className="w-full max-w-[580px]">
          {/* Form Card */}
          <div className="bg-transparent border-0 p-0 w-full rounded-none">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className={labelClass}>Full name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    disabled={uiState === "loading"}
                    className={inputClass}
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>Phone number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91"
                    disabled={uiState === "loading"}
                    className={inputClass}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  disabled={uiState === "loading"}
                  className={inputClass}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="role" className={labelClass}>I am currently a</label>
                <select
                  id="role"
                  name="role"
                  required
                  disabled={uiState === "loading"}
                  className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%238e8e93%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-no-repeat bg-[position:right_14px_center]`}
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="" disabled className="bg-zinc-900">Select an option</option>
                  <option value="Student" className="bg-zinc-900">Student</option>
                  <option value="Working Professional" className="bg-zinc-900">Working Professional</option>
                  <option value="Freelancer" className="bg-zinc-900">Freelancer</option>
                  <option value="Entrepreneur" className="bg-zinc-900">Entrepreneur</option>
                  <option value="Other" className="bg-zinc-900">Other</option>
                </select>
              </div>

              <div className="relative">
                <label htmlFor="goal" className={labelClass}>
                  What do you want to be able to do after RMDM?
                </label>
                <textarea
                  id="goal"
                  name="goal"
                  required
                  maxLength={200}
                  disabled={uiState === "loading"}
                  placeholder="What do you want to be able to do after this cohort?"
                  className={`${inputClass} resize-none h-28 pb-8`}
                  value={formData.goal}
                  onChange={handleChange}
                />
                <div className="absolute bottom-[10px] right-[14px] text-[11px] font-mono text-white/30 pointer-events-none">
                  {formData.goal.length} / 200
                </div>
              </div>

              <div>
                <label htmlFor="source" className={labelClass}>How did you hear about us?</label>
                <select
                  id="source"
                  name="source"
                  disabled={uiState === "loading"}
                  className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%238e8e93%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-no-repeat bg-[position:right_14px_center]`}
                  value={formData.source}
                  onChange={handleChange}
                >
                  <option value="" disabled className="bg-zinc-900">Select an option (Optional)</option>
                  <option value="Instagram" className="bg-zinc-900">Instagram</option>
                  <option value="LinkedIn" className="bg-zinc-900">LinkedIn</option>
                  <option value="Word of mouth" className="bg-zinc-900">Word of mouth</option>
                  <option value="Google" className="bg-zinc-900">Google</option>
                  <option value="Other" className="bg-zinc-900">Other</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={uiState === "loading"}
                  className="w-full rounded-md bg-[#1526b4] py-[15px] px-[24px] text-white font-bold text-center tracking-tight transition-all duration-200 uppercase disabled:opacity-85 hover:bg-[#1f32d2] flex items-center justify-center gap-2"
                >
                  {uiState === "loading" ? (
                    "SUBMITTING..."
                  ) : (
                    "Submit application →"
                  )}
                </button>
                {errorMsg && (
                  <div className="text-red-500/70 text-[13px] font-mono text-center mt-3">
                    {errorMsg}
                  </div>
                )}
              </div>
            </form>
          </div>

          <div className="mt-8 text-center px-4">
            <p className="text-[13px] text-white/25 mb-4 font-mono">
              Applications are reviewed manually. Not everyone is accepted — we want each cohort to be the right mix of people.
            </p>
            <Link href="/syllabus.pdf" className="text-[13px] text-white/30 underline hover:text-white/50 transition-colors font-mono">
              Download the syllabus first →
            </Link>
          </div>
        </div>

        {/* COMPACT MODAL POPUP FOR SUCCESS STATE */}
        {uiState === "success" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dim Overlay - Closes Modal on Click */}
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-[4px] cursor-pointer"
              onClick={closeSuccessModal}
            ></div>
            
            {/* Modal Card */}
            <div className="relative w-[420px] max-w-[90vw] max-h-[85vh] bg-[#0d0d0d] border border-[#141414] rounded-none p-[24px] overflow-y-auto animate-in zoom-in-95 fade-in duration-200 ease-out shadow-2xl">
              
              {/* Close Button X */}
              <button 
                onClick={closeSuccessModal}
                className="absolute top-[16px] right-[16px] text-white/60 hover:text-white font-mono text-[20px] leading-none z-10 transition-colors"
                aria-label="Close"
              >
                &times;
              </button>

              {/* Status Header Indicator */}
              <div className="text-[#00bf63] font-mono text-center text-xs tracking-wider mb-4">
                [SECURED]
              </div>
              
              {/* Title & Body */}
              <h3 className="text-white font-extrabold text-[20px] text-center mt-2 mb-2 uppercase tracking-[-0.04em] leading-[1.0]">Application received.</h3>
              <p className="text-[13px] text-[#8e8e93] text-center leading-relaxed font-mono">
                We've got your details. Someone from the TarunSpeaks team will call you within 48 hours.
              </p>
              
              {/* Divider */}
              <div className="h-[1px] w-full bg-[#141414] my-[20px]"></div>
              
              {/* Compact Steps list */}
              <div className="space-y-4">
                <div className="flex gap-2.5 text-left">
                  <div className="flex-shrink-0 text-[#00bf63] font-mono text-[14px]">•</div>
                  <div>
                    <div className="text-white font-bold text-[14px] leading-tight mb-0.5 uppercase tracking-wide">Check your phone.</div>
                    <div className="text-[#8e8e93] text-[12px] leading-relaxed">
                      We'll call the number you provided — usually within 24–48 hours on working days.
                    </div>
                  </div>
                </div>
                <div className="flex gap-2.5 text-left">
                  <div className="flex-shrink-0 text-[#00bf63] font-mono text-[14px]">•</div>
                  <div>
                    <div className="text-white font-bold text-[14px] leading-tight mb-0.5 uppercase tracking-wide">15-minute conversation.</div>
                    <div className="text-[#8e8e93] text-[12px] leading-relaxed">
                      No prep needed. We just want to understand your goals and whether RMDM is the right fit.
                    </div>
                  </div>
                </div>
                <div className="flex gap-2.5 text-left">
                  <div className="flex-shrink-0 text-[#00bf63] font-mono text-[14px]">•</div>
                  <div>
                    <div className="text-white font-bold text-[14px] leading-tight mb-0.5 uppercase tracking-wide">You'll hear back.</div>
                    <div className="text-[#8e8e93] text-[12px] leading-relaxed">
                      Accepted candidates receive payment details. All others get honest feedback.
                    </div>
                  </div>
                </div>
              </div>

              {/* Dismiss Button */}
              <button 
                onClick={closeSuccessModal}
                className="block w-full mt-[24px] py-[10px] px-[24px] rounded-md border border-white/15 text-white/60 hover:bg-white/5 hover:text-white/90 font-mono text-sm uppercase transition-colors cursor-pointer"
              >
                Got it
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
