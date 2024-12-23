'use client'
import React, {useEffect, useRef, useState} from "react";


const SendSuccess: React.FC = () => {
    const [duration, setDuration] = useState<number>(60);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
            if(duration>0){
                timerRef.current = setInterval(() => {
                    setDuration((prevTime) => {
                        if (prevTime <= 1) {
                            clearInterval(timerRef.current!);
                            return 0;
                        }
                        return prevTime - 1;
                    });
                }, 1000);
            }
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    },[duration]);

    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    return (
            <div
                className="flex flex-col rounded-16 border w-full  p-6 gap-5 border-[#C9D8DF] bg-[#F9FBFE] ">
                <h1 className=" font-bold text-3xl text-center">Send mail Successfully</h1>
                <span
                    className='text-center font-normal text-base'>Please check your mail to get reset link </span>
                <div className="text-center font-medium text-base">
                    Time remaining: {formatTime(duration)}
                </div>
            </div>
    );
}

export default SendSuccess;
