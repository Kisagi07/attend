import { storeFile } from "@/app/file";
import prisma from "@/app/prisma";
import { JsonArray } from "@prisma/client/runtime/library";
import { NextRequest, NextResponse } from "next/server";

// TODO: create documentation

const POST = async (req: NextRequest) => {
    let formData = null;
    try {
        formData = await req.formData();
    } catch (error) {
        console.error(error);
        return NextResponse.json({error: "Gagal mengambil formdata dari request"});
    }

    // #region field retrieve and validation
    let logId = formData.get("log_id") as FormDataEntryValue | null | number;
    if (!logId) return NextResponse.json({error: "log_id tidak ditemukan di formData"}, {status: 422});

    logId = Number(logId);
    if (isNaN(logId)) return NextResponse.json({error: "log_id bukan sebuah angka"}, {status: 422});

    let works = formData.get("work") as string | null | string[];
    if (!works) return NextResponse.json({error: "Pekerjaan dibutuhkan"}, {status: 422});
    try {
        works = JSON.parse(works as string) as string[];
    } catch (error) {
        console.error(error);
        return NextResponse.json({error: "Pekerjaan harus json_encoded"})
    }
    if (works.length === 0) return NextResponse.json({error: "Pekerjaan tidak boleh kosong"}, {status: 422});

    const clockOutTime = formData.get("clock_out_time") as string | null;
    if (!clockOutTime) return NextResponse.json({error: "Jam pulang tidak ditemukan"}, {status: 422});

    const clockOutProof = formData.get("clock_out_proof") as File | null;
    if (!clockOutProof) return NextResponse.json({error: "Bukti absen pulang dibutuhkan"}, {status: 422});

    const validImageTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!validImageTypes.includes(clockOutProof.type)) {
        return NextResponse.json({ error: "Bukti absen pulang harus berupa gambar (jpeg, png, gif, webp)" }, {status: 422});
    }
    // #endregion

    // validate log exist
    const log = await prisma.logs.findFirst({
        where: {
            id: logId
        }
    });

    if (!log) return NextResponse.json({error: "Absensi tidak ditemukan"}, {status: 404})

    // storre file
    
    const clock_out_picture = await storeFile(clockOutProof, {storePath: "/upload/log-proof"})    

    const newWorks = [...log.work as JsonArray, ...works];
    
    const today = new Date();

    const clockOutTimeISO = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}T${clockOutTime}Z`

    // update log
    const newLog = await prisma.logs.update({
        where: {
            id: logId
        },
        data: {
            clock_out_time: clockOutTimeISO,
            clock_out_picture,
            work: newWorks
        }
    })

    return NextResponse.json({
        clock_out_time: newLog.clock_out_time,
        clock_out_latitude: newLog.clock_out_latitude,
        clock_out_longitude: newLog.clock_out_longitude,
        clock_out_picture: newLog.clock_out_picture,
        works: newLog.work
    })
}
export { POST };