"use client";

import { useState, useEffect } from "react";

export default function CountdownScarcity() {
  const [seatsLeft, setSeatsLeft] = useState(0);
  const [totalSeats, setTotalSeats] = useState(30);

  useEffect(() => {
    const total = parseInt(process.env.NEXT_PUBLIC_TOTAL_SEATS || "30");
    const reserved = parseInt(process.env.NEXT_PUBLIC_RESERVED || "0");
    setTotalSeats(total);
    setSeatsLeft(total - reserved);
  }, []);

  const reservedSeats = totalSeats - seatsLeft;
  const percentageReserved = (reservedSeats / totalSeats) * 100;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#141414] border-y border-[#222222] rounded-none">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <div className="text-3xl font-mono font-bold text-[#00bf63] mb-2">{seatsLeft}</div>
          <div className="text-white/80 font-mono text-xs uppercase tracking-wider">Seats Remaining for Batch 14</div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#1526b4]/20 rounded-none h-3 mb-4 overflow-hidden border border-[#222222]">
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
