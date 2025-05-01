"use client";
import { useCallback, useEffect, useRef } from "react";

interface LocationFetchPopupProps {
  timeLeft: number;
  onCancel: () => void;
  onDone: () => void;
}

const LocationFetchPopup = ({
  timeLeft,
  onCancel,
  onDone,
}: LocationFetchPopupProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const formatTimeLeft = () => {
    const minutes = Math.floor(timeLeft / 60).toString();
    const remainingSeconds = (timeLeft % 60).toString();
    return `${minutes.padStart(2, "0")}:${remainingSeconds.padStart(2, "0")}`;
  };

  const handlePreOnCancel = () => {
    animateClosing("cancel");
  };

  const animateClosing = useCallback(
    (type: "cancel" | "done" = "done") => {
      contentRef.current?.classList.replace(
        "animate-modal-bop",
        "animate-modal-bop-close"
      );

      setTimeout(() => {
        if (type === "cancel") {
          onCancel();
        } else {
          onDone();
        }
      }, 160);
    },
    [onCancel, onDone]
  );

  useEffect(() => {
    if (timeLeft === 0) {
      animateClosing();
    }
  }, [timeLeft, animateClosing]);

  return (
    <section className="fixed top-0 !mt-0 left-0 w-full h-screen flex items-center justify-center z-50 bg-black/10 ">
      <div
        ref={contentRef}
        className="bg-white shadow-xl rounded-lg p-8 w-full max-w-sm flex flex-col items-center gap-4 animate-modal-bop"
      >
        <div className="border-8 border-sky-600 rounded-full border-r-sky-100 animate-spin size-40"></div>
        <p className="font-medium">Sinkronasi GPS untuk lokasi akurat....</p>
        <p className="bg-violet-100 text-violet-600 border-2 border-violet-200 font-courierPrime text-xl px-4 py-2 rounded">
          {formatTimeLeft()}
        </p>
        <button
          onClick={handlePreOnCancel}
          type="button"
          className="text-sm bg-neutral-100 text-neutral-600 border border-neutral-600 px-2 py-1 rounded shadow hover:bg-neutral-200 transition-colors active:bg-neutral-300"
        >
          Batalkan
        </button>
      </div>
    </section>
  );
};
export default LocationFetchPopup;
