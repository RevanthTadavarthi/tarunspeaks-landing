"use client";

import { useEffect } from "react";

/**
 * EMIModal Component
 * 
 * This is a modal (popup) that shows EMI (Equated Monthly Installment) payment options.
 * It displays different EMI plans with monthly payment amounts.
 * The modal can be closed by clicking outside, pressing Escape, or clicking the close button.
 */
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
        className="bg-bg border-2 border-accent rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 id="emi-modal-title" className="text-2xl font-bold text-primary">
            EMI Payment Plans
          </h2>
          <button
            onClick={onClose}
            className="text-primary/70 hover:text-primary text-2xl focus:outline-none focus:ring-2 focus:ring-accent rounded"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* EMI Plans */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {emiPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-accent/10 border border-accent/30 rounded-lg p-6 hover:border-secondary transition-all"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">
                  ₹{plan.emi.toLocaleString("en-IN")}
                </div>
                <div className="text-primary/70 text-sm mb-1">
                  per month for {plan.months} months
                </div>
                <div className="text-secondary text-xs font-semibold">
                  {plan.interest} interest
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Amount */}
        <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-primary/80">Total Amount:</span>
            <span className="text-2xl font-bold text-primary">
              ₹{totalPrice.toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        {/* Note */}
        <div className="text-primary/60 text-sm mb-6">
          <p>
            * EMI plans are subject to bank approval. Interest rates may vary based on your credit
            score and bank policies. Contact us for more details.
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => {
            // In a real implementation, this would redirect to EMI payment gateway
            alert("EMI payment integration coming soon. Please contact us for EMI options.");
          }}
          className="w-full bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
        >
          Proceed with EMI
        </button>
      </div>
    </div>
  );
}

