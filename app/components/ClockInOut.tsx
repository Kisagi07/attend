"use client";
import { ButtonDropdown } from "@/app/components";

const ClockInOut = () => {
  const options = [
    {
      label: "Clock-in",
      className: "bg-green-400 hover:bg-green-500 text-white disabled:bg-green-300",
    },
    {
      label: "Sick",
      className: "bg-red-400 hover:bg-red-500 text-white disabled:bg-red-300",
    },
  ];

  const handleClockBtn = (value: string) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const date = new Date();
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const seconds = date.getSeconds().toString().padStart(2, "0");
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();

      if (value === "Clock-in") {
        fetch(`/api/attendance`, {
          method: "POST",
          body: JSON.stringify({
            type: "clock-in",
            time: `${hours}:${minutes}:${seconds}`,
            date: `${year}-${month}-${day}`,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .catch((error) => console.error(error));
      }
    });
  };

  return (
    <>
      <ButtonDropdown
        onClick={(value) => handleClockBtn(value)}
        // disabled={sendingLog}
        className="bg-slate-900 hover:bg-black text-white"
        options={options}
      />
    </>
  );
};
export default ClockInOut;
