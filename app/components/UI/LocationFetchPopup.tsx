interface LocationFetchPopupProps {
    timeLeft: number;
    onCancel: () => void;
    onSkip: () => void;
}

const LocationFetchPopup = ({timeLeft, onCancel, onSkip}: LocationFetchPopupProps) => {
    return (
        <section className="fixed top-0 !mt-0 left-0 w-full h-screen flex items-center justify-center z-50 bg-black/10 ">
            <div className="bg-white shadow-xl rounded p-8 w-full max-w-sm flex flex-col items-center gap-4 animate-modal-bop">
                <div className="border-8 border-sky-600 rounded-full border-r-sky-100 animate-spin size-40"></div>
                <p className="font-medium">Sinkronasi GPS untuk lokasi akurat....</p>
                <p className="bg-violet-100 text-violet-600 border-2 border-violet-200 font-courierPrime text-xl px-4 py-2 rounded">Waktu Tersisa  04:23</p>
                <div className="flex items-center gap-4">
                    <button type="button" className="text-sm bg-neutral-100 text-neutral-500 border border-neutral-500 px-2 py-1 rounded-lg shadow hover:bg-neutral-200 transition-colors active:bg-neutral-300">Batalkan</button>
                    <button type="button" className="text-sm bg-emerald-100 text-emerald-500 border border-emerald-500 px-2 py-1 rounded-lg shadow hover:bg-emerald-200 transition-colors active:bg-emerald-300">Gunakan Langsung</button>
                </div>
            </div>
        </section>
    )
}
export default LocationFetchPopup;