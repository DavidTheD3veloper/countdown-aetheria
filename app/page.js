"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/countdown");
      const data = await res.json();
      startCountdown(new Date(data.endTime));
    }
    load();
  }, []);

  function startCountdown(end) {
    function update() {
      const now = new Date();
      let diff = end - now;

      if (diff <= 0) return;

      const totalSeconds = Math.floor(diff / 1000);

      const seconds = totalSeconds % 60;
      const minutes = Math.floor(totalSeconds / 60) % 60;
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const days = Math.floor(totalSeconds / 86400);

      let years = end.getFullYear() - now.getFullYear();
      let months = end.getMonth() - now.getMonth();

      if (months < 0) {
        years--;
        months += 12;
      }

      setTime({
        years,
        months,
        days: days % 30,
        hours,
        minutes,
        seconds
      });
    }

    update();
    setInterval(update, 1000);
  }

  if (!time) return <div className="loading">Loading…</div>;

  return (
    <main className="wrapper">
      <h1>Event Countdown</h1>
      <div className="countdown">
        {Object.entries(time).map(([label, value]) => (
          <div className="box" key={label}>
            <div className="value">{value}</div>
            <div className="label">{label}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
