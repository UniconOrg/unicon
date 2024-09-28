import { CSSProperties, useEffect, useState } from "react";
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
        <>

            <div style={styles.countDown}>
                {timeLeft.days === undefined ||
                    timeLeft.hours === undefined ||
                    timeLeft.minutes === undefined ||
                    timeLeft.seconds === undefined ? (
                    <div style={styles.loading}>
                        <GradientCircularProgress />
                    </div>
                ) : (<>
                    <div>
                        <p style={styles.countDownTime}>{timeLeft.days}</p>
                        <p style={styles.countDownLabel}>DAYS</p>
                    </div>
                    <div>
                        <p style={styles.countDownTime}>{timeLeft.hours}</p>
                        <p style={styles.countDownLabel}>HRS</p>
                    </div>
                    <div>
                        <p style={styles.countDownTime}>{timeLeft.minutes}</p>
                        <p style={styles.countDownLabel}>MIN</p>
                    </div>
                    <div>
                        <p style={styles.countDownTime}>{timeLeft.seconds}</p>
                        <p style={styles.countDownLabel}>SEC</p>
                    </div>
                </>)}

            </div>

        </>
    );
}
const styles: {
    countDown: CSSProperties,
    countDownTime: CSSProperties,
    countDownLabel: CSSProperties,
    loading: CSSProperties,
} = {
    countDown: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '20%',
        width: '40%',
        margin: 'auto',
    },
    countDownTime: {
        fontSize: '3rem',
        marginTop: '20px',
        marginBottom: '10px',
    },
    countDownLabel: {
        marginTop: '1px',
    },
    loading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
};
