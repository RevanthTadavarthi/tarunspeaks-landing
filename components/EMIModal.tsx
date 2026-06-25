"use client";

import { useEffect } from "react";

interface EMIModalProps {
  onClose: () => void;
}

export default function EMIModal({ onClose }: EMIModalProps) {
  const totalPrice = parseInt(process.env.NEXT_PUBLIC_PRICE || "97000");

  const emiPlans = [
    { months: 3, emi: Math.ceil(totalPrice / 3), interest: "0%" },
    { months: 6, emi: Math.ceil(totalPrice / 6), interest: "0%" },
    { months: 9, emi: Math.ceil(totalPrice / 9), interest: "0%" },
    { months: 12, emi: Math.ceil(totalPrice / 12), interest: "0%" },
  ];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden"; // Prevent background scrolling

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="emi-modal-title"
    >
      <div
        className="bg-[#0d0d0d] border border-[#222222] p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 id="emi-modal-title" className="text-xl font-bold text-white uppercase tracking-tight font-mono">
            EMI Payment Plans //
          </h2>
          <button
            onClick={onClose}
            className="text-[#8e8e93] hover:text-white text-2xl font-mono focus:outline-none"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>

        {/* EMI Plans */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {emiPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#141414] border border-[#222222] p-6 hover:border-[#1526b4]/50 rounded-none transition-colors duration-200"
            >
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-[#00bf63] mb-2">
                  ₹{plan.emi.toLocaleString("en-IN")}
                </div>
                <div className="text-[#8e8e93] text-xs font-mono mb-1">
                  per month for {plan.months} months
                </div>
                <div className="text-[#00bf63] text-xs font-mono uppercase tracking-wider font-semibold">
                  {plan.interest} interest
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Amount */}
        <div className="bg-[#141414] border border-[#222222] p-4 mb-6 rounded-none">
          <div className="flex justify-between items-center font-mono text-sm">
            <span className="text-[#8e8e93]">Total Amount:</span>
            <span className="text-xl font-bold text-white">
              ₹{totalPrice.toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        {/* Note */}
        <div className="text-[#8e8e93] text-xs mb-6 font-mono leading-relaxed">
          <p>
            * EMI plans are subject to bank approval. Interest rates may vary based on your credit
            score and bank policies. Contact us for more details.
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => {
            alert("EMI payment options are discussed during and after your interview call.");
          }}
          className="w-full bg-[#1526b4] hover:bg-[#1f32d2] text-white px-8 py-4 rounded-none font-mono font-bold uppercase tracking-wider transition-colors focus:outline-none"
        >
          Request EMI Approval
        </button>
      </div>
    </div>
  );
}
