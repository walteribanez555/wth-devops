import React from 'react';

const Hours = () => {
    const hours = {
        Monday: '10 a.m. - 4 p.m.',
        Tuesday: '10 a.m. - 4 p.m.',
        Wednesday: '10 a.m. - 4 p.m.',
        Thursday: '10 a.m. - 4 p.m.',
        Friday: '10 a.m. - 4 p.m.',
        Saturday: '9 a.m. - 8 p.m.',
        Sunday: '9 a.m. - 8 p.m.',
    };

    return (
        <div className="shelter-hours">
            <h2>Horas de apertura del refugio</h2>
            <ul>
                {Object.entries(hours).map(([day, time]) => (
                    <li key={day}>
                        <strong>{day}:</strong> {time}
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default Hours;