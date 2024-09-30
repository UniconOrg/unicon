import "./CountDown.css";

import { useEffect, useState } from "react";


export default function CountDown() {
    const [timeLeft, setTimeLeft] = useState<{
        days?: string;
        hours?: string;
        minutes?: string;
        seconds?: string;
    }>({days: '00', hours: '00', minutes: '00', seconds: '00'});

    useEffect(() => {
        const targetDate = Date.UTC(2025, 0, 25, 16, 0, 0);

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(interval);
                return;
            }

            const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hoursDifference = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesDifference = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const secondsDifference = Math.floor((difference % (1000 * 60)) / 1000);

            const formatTime = (time: number) => (time < 10 ? `0${time}` : `${time}`);

            const days = formatTime(daysDifference);
            const hours = formatTime(hoursDifference);
            const minutes = formatTime(minutesDifference);
            const seconds = formatTime(secondsDifference);

            setTimeLeft({ days, hours, minutes, seconds });

        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="countDown">

            <div>
                <p className="countDownTime">{timeLeft.days}</p>
                <p className="countDownLabel">DAYS</p>
            </div>
            <div>
                <p className="countDownTime">{timeLeft.hours}</p>
                <p className="countDownLabel">HRS</p>
            </div>
            <div>
                <p className="countDownTime">{timeLeft.minutes}</p>
                <p className="countDownLabel">MIN</p>
            </div>
            <div>
                <p className="countDownTime">{timeLeft.seconds}</p>
                <p className="countDownLabel">SEC</p>
            </div>

        </div>
    );
}
