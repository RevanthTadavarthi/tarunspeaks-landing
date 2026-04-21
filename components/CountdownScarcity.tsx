"use client";

import { useState, useEffect } from "react";

/**
 * CountdownScarcity Component
 * 
 * This component creates urgency by showing:
 * - How many seats are left in the course
 * - A visual progress bar showing seat availability
 * - The countdown to the cohort start date
 * 
 * This helps encourage potential students to enroll quickly.
 */
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
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-accent/10 border-y border-accent/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <div className="text-3xl font-bold text-secondary mb-2">{seatsLeft}</div>
          <div className="text-primary/80">Seats Remaining</div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-accent/20 rounded-full h-4 mb-4 overflow-hidden">
          <div
            className="bg-secondary h-full transition-all duration-500"
            style={{ width: `${percentageReserved}%` }}
            role="progressbar"
            aria-valuenow={reservedSeats}
            aria-valuemin={0}
            aria-valuemax={totalSeats}
            aria-label={`${reservedSeats} of ${totalSeats} seats reserved`}
          />
        </div>

        <div className="text-center text-sm text-primary/60">
          {reservedSeats} of {totalSeats} seats already reserved
        </div>
      </div>
    </section>
  );
}

