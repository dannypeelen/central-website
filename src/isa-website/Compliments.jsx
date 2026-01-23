import compliments from './compliments.js';

export default function Compliments() {

    const startDate = new Date("2025-04-25"); // 2

    // 3) Today’s date (midnight, local time)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // 4) Compute number of days elapsed since startDate
    const msPerDay = 1000 * 60 * 60 * 24;
    const daysElapsed = Math.floor((today - startDate) / msPerDay);

    // 5) Map that to your array index (wrap via modulo)
    const index = ((daysElapsed % compliments.length) + compliments.length) % compliments.length;

    // 6) Grab today’s entry
    const todaysCompliment = compliments[index];

    return (
        <div class="compliments">
            <div className="compliments-intro">
                <h1>Daily Compliment &lt;3</h1>
                <div className="bigBuffer"></div>
                <p id="compliment">{todaysCompliment}</p>
                <div className="bigBuffer"></div>
            </div>
        </div>
    );
}
