import "./CountDown.css";

import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

function GradientCircularProgress() {
    return (
        <React.Fragment>
            <svg width={0} height={0}>
                <defs>
                    <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#e01cd5" />
                        <stop offset="100%" stopColor="#1CB5E0" />
                    </linearGradient>
                </defs>
            </svg>
            <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
        </React.Fragment>
    );
}


export default function CountDown() {
    const [timeLeft, setTimeLeft] = useState<{
        days?: string;
        hours?: string;
        minutes?: string;
        seconds?: string;
    }>({});

    useEffect(() => {
        const targetDate = Date.UTC(2025, 0, 26, 16, 0, 0);

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
            {timeLeft.days === undefined ||
                timeLeft.hours === undefined ||
                timeLeft.minutes === undefined ||
                timeLeft.seconds === undefined ? (
                <div className="loading">
                    <GradientCircularProgress />
                </div>
            ) : (
                <>
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
                </>
            )}
        </div>
    );
}
