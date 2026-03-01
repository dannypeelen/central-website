import { useState, useEffect } from 'react';

const ARRIVAL   = new Date("2026-04-21T08:20:00");
const GRADUATION = new Date("2026-09-13T09:00:00");

function getTimeLeft(target) {
    const diff = target - new Date();
    if (diff <= 0) return null;
    return {
        days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours:   Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
    };
}

function CountdownCard({ title, date, icon, description, delay }) {
    const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(date));

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(getTimeLeft(date)), 1000);
        return () => clearInterval(timer);
    }, [date]);

    const units = timeLeft
        ? [
            { value: timeLeft.days,    label: 'days' },
            { value: timeLeft.hours,   label: 'hours' },
            { value: timeLeft.minutes, label: 'mins' },
            { value: timeLeft.seconds, label: 'secs' },
          ]
        : [];

    return (
        <div className="countdown-card" style={{ animationDelay: delay }}>
            <div className="countdown-icon">{icon}</div>
            <h2 className="countdown-title">{title}</h2>
            <p className="countdown-desc">{description}</p>
            {timeLeft ? (
                <div className="countdown-timer">
                    {units.map(({ value, label }) => (
                        <div key={label} className="countdown-unit">
                            <span className="countdown-num">{String(value).padStart(2, '0')}</span>
                            <span className="countdown-label">{label}</span>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="countdown-done">The day has arrived! 🎉</div>
            )}
        </div>
    );
}

export default function Countdown() {
    return (
        <div className="countdown-page">
            <h1 className="countdown-main-title">Counting Down ♡</h1>
            <p className="countdown-main-sub">The moments we're looking forward to most</p>
            <div className="countdown-cards">
                <CountdownCard
                    title="Danny Arrives in London"
                    icon="✈️"
                    date={ARRIVAL}
                    description="April 21, 2026 · 8:20 AM"
                    delay="0s"
                />
                <CountdownCard
                    title="Isa Graduates!"
                    icon="🎓"
                    date={GRADUATION}
                    description="September 13, 2026"
                    delay="0.12s"
                />
            </div>
        </div>
    );
}
