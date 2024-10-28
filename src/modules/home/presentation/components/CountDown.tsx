import "./CountDown.css";

import { useEffect, useState } from "react";


export default function CountDown() {
    const [timeLeft, setTimeLeft] = useState<{
        days?: string;
        hours?: string;
        minutes?: string;
        seconds?: string;
    }>({ days: '00', hours: '00', minutes: '00', seconds: '00' });

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
        <div>
            <div className="countDown">

                <div className="countDownItemColumn">
                    <p className="countDownTimeDays"
                        style={{ fontSize: '4rem' }}

                    >{timeLeft.days}</p>



                    <p className="countDownLabel"
                        style={{
                            transform: 'rotate(270deg)',
                            fontSize: '1.6rem'
                        }}
                    >Días</p>
                </div>




                <div className="countDownItemRow">
                    <p className="countDownLabel"
                        style={{ fontSize: '1.4rem' }}
                    >Horas</p>



                    <p className="countDownTimeHours"
                    >{timeLeft.hours}</p>
                </div>






                <p style={{ fontSize: '3.2rem', marginTop: "13px", marginBottom: '0px' }}>:</p>




                <div className="countDownItemRow"
                    style={{ marginTop: '10px' }}
                >
                    <p className="countDownLabel"
                    >Minutos</p>
                    <p className="countDownTimeMins"
                        style={{ 
                            fontSize: '2.4rem',
                            transform: 'translateY(-9px)'
                        }}
                    >{timeLeft.minutes}</p>
                </div>




                <p style={{ fontSize: '3.2rem', marginTop: "13px", marginBottom: '0px' }} className="countDownItemRowSec">:</p>




                <div className="countDownItemRowSec"
                    style={{ marginTop: '20px' }}
                >
                    <p className="countDownLabel"
                        style={{ fontSize: '0.7rem' }}
                    >Segundos</p>
                    <p className="countDownTimeSec"

                    >{timeLeft.seconds}</p>
                </div>

            </div>
        </div>
    );
}
