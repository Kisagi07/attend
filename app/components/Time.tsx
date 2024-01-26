"use client";
import Card from "@/app/components/Card";
import { useState, useEffect } from "react";
const Time = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Card>
      <h3>
        Time{" : "}
        {currentTime ? (
          <span>
            {currentTime.getHours()}:
            {currentTime.getMinutes() < 10
              ? "0" + currentTime.getMinutes()
              : currentTime.getMinutes()}
          </span>
        ) : (
          "--:--"
        )}
      </h3>
    </Card>
  );
};
export default Time;
