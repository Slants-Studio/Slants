import { useState, useEffect } from 'react';

export function LagosClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Africa/Lagos',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(time);

  return (
    <div className="fixed top-8 right-8 text-xs opacity-60 z-50 pointer-events-none text-right">
      <div>LAGOS, NG</div>
      <div className="text-xl font-bold tracking-widest">{formattedTime}</div>
    </div>
  );
}
