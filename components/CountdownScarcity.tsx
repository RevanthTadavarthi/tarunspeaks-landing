"use client";

import { useState, useEffect } from "react";

export default function CountdownScarcity() {
  const [seatsLeft, setSeatsLeft] = useState(0);
  const [totalSeats, setTotalSeats] = useState(30);

  useEffect(() => {
    const total = parseInt(process.env.NEXT_PUBLIC_TOTAL_SEATS || "30");
    const reserved = parseInt(process.env.NEXT_PUBLIC_RESERVED || "26");
    setTotalSeats(total);
    setSeatsLeft(total - reserved);
  }, []);

  const reservedSeats = totalSeats - seatsLeft;
  const percentageReserved = (reservedSeats / totalSeats) * 100;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0d0d0d] border-y border-[#1b1b1b] rounded-none">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 space-y-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.04em] leading-[1.0] text-white uppercase">
            {seatsLeft} Seats Remaining
          </h2>
          <p className="text-[#8e8e93] text-base leading-[1.65] max-w-xl mx-auto">
            Batch 14 cohort size is strictly capped at 30 seats to maintain high-touch interactive learning and direct access.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#1526b4]/20 rounded-none h-3 mb-6 overflow-hidden border border-[#1b1b1b]">
          <div
            className="bg-[#00bf63] h-full transition-all duration-500 rounded-none"
            style={{ width: `${percentageReserved}%` }}
            role="progressbar"
            aria-valuenow={reservedSeats}
            aria-valuemin={0}
            aria-valuemax={totalSeats}
            aria-label={`${reservedSeats} of ${totalSeats} seats reserved`}
          />
        </div>

        <div className="text-center text-xs font-mono text-[#8e8e93] uppercase tracking-wider">
          {reservedSeats} of {totalSeats} seats already reserved — cohort closes when full
        </div>
      </div>
    </section>
  );
}
