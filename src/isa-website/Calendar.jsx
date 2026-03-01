import { useState } from 'react';
import compliments from './compliments.js';

const START_DATE = new Date("2025-04-25");
START_DATE.setHours(0, 0, 0, 0);

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

function getDayIndex(date) {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    const msPerDay = 1000 * 60 * 60 * 24;
    return Math.floor((d - START_DATE) / msPerDay);
}

function getComplimentForIndex(idx) {
    const i = ((idx % compliments.length) + compliments.length) % compliments.length;
    return compliments[i];
}

export default function Calendar() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [viewYear, setViewYear] = useState(today.getFullYear());
    const [viewMonth, setViewMonth] = useState(today.getMonth());
    const [selected, setSelected] = useState(null);

    // Build the calendar grid cells
    const firstDay = new Date(viewYear, viewMonth, 1);
    const lastDay = new Date(viewYear, viewMonth + 1, 0);
    const startPad = firstDay.getDay();

    const cells = [];
    for (let i = 0; i < startPad; i++) {
        cells.push({ empty: true, key: `pad-${i}` });
    }
    for (let d = 1; d <= lastDay.getDate(); d++) {
        const date = new Date(viewYear, viewMonth, d);
        date.setHours(0, 0, 0, 0);
        const dayIndex = getDayIndex(date);
        const isToday = date.getTime() === today.getTime();
        const isFuture = date > today;
        const isBeforeStart = dayIndex < 0;
        cells.push({ date, dayIndex, d, isToday, isFuture, isBeforeStart });
    }

    const canGoBack = !(viewYear === 2025 && viewMonth === 3);
    const canGoForward = !(viewYear === today.getFullYear() && viewMonth === today.getMonth());

    const prevMonth = () => {
        if (!canGoBack) return;
        if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
        else setViewMonth(m => m - 1);
    };

    const nextMonth = () => {
        if (!canGoForward) return;
        if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
        else setViewMonth(m => m + 1);
    };

    const handleDayClick = (cell) => {
        if (cell.empty || cell.isFuture || cell.isBeforeStart) return;
        setSelected(cell);
    };

    const closeModal = () => setSelected(null);

    return (
        <div className="calendar-page">
            <h1 className="calendar-title">Daily Compliments ♡</h1>
            <p className="calendar-subtitle">Click any day to reveal your compliment</p>

            <div className="calendar-container">
                <div className="calendar-header">
                    <button className="cal-nav" onClick={prevMonth} disabled={!canGoBack}>‹</button>
                    <span className="cal-month-label">{MONTHS[viewMonth]} {viewYear}</span>
                    <button className="cal-nav" onClick={nextMonth} disabled={!canGoForward}>›</button>
                </div>

                <div className="calendar-grid">
                    {DAYS_OF_WEEK.map(d => (
                        <div key={d} className="cal-dow">{d}</div>
                    ))}
                    {cells.map((cell, i) => {
                        if (cell.empty) return <div key={cell.key} className="cal-cell empty" />;
                        const classes = [
                            'cal-cell',
                            cell.isToday ? 'today' : '',
                            cell.isFuture ? 'future' : '',
                            cell.isBeforeStart ? 'before-start' : '',
                            (!cell.isFuture && !cell.isBeforeStart) ? 'revealed' : ''
                        ].filter(Boolean).join(' ');
                        return (
                            <div key={i} className={classes} onClick={() => handleDayClick(cell)}>
                                <span className="cal-day-num">{cell.d}</span>
                                {!cell.isFuture && !cell.isBeforeStart && (
                                    <span className="cal-heart">♡</span>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {selected && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-card" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>×</button>
                        <div className="modal-date">
                            {MONTHS[selected.date.getMonth()]} {selected.d}, {selected.date.getFullYear()}
                        </div>
                        <div className="modal-photo-placeholder">
                            <span>📷</span>
                            <p>Photo coming soon</p>
                        </div>
                        <div className="modal-compliment">
                            <p>"{getComplimentForIndex(selected.dayIndex)}"</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
