import prisma from "@/app/prisma";
import { fromDate, parseDate, today } from "@internationalized/date";
import { JsonArray } from "generated/prisma/runtime/library";
import { NextRequest, NextResponse } from "next/server";

interface ReqJson {
    userId: number;
    latitude: number;
    longitude: number;
    timestamp: string;    
}

const AUTH_TOKEN = process.env.ANDROID_APP_API_KEY;

const POST = async (req: NextRequest) => {
    // #region authentication
    const auth = req.headers.get("X-UROBOROS");
    if (auth != AUTH_TOKEN) {
        return NextResponse.json({message: "Unauthorized"}, {status: 401});        
    }    
    // #endregion authentication


    const json = await req.json() as ReqJson    
    const {userId, latitude, longitude,  timestamp} = json;

    // #region validation
    if (!userId) {
        return NextResponse.json({message: "User Id required"}, {status: 422});        
    }
    if (typeof userId !== "number") {
        return NextResponse.json({message: "Type of User id need to be a number"});
    }
    if (!latitude) {
        return NextResponse.json({message: "Latitude is required"}, {status: 422});
    }
    if (typeof latitude !== "number") {
        return NextResponse.json({message: "Type of latitude id need to be a number"});
    }
    if (!longitude) {
        return NextResponse.json({message: "Longitude is required"}, {status: 422});
    }
    if (typeof longitude !== "number") {
        return NextResponse.json({message: "Type of longitude need to be a number"});
    }
    if (!timestamp) {
        return NextResponse.json({message: "Time is required"}, {status: 422});
    }
    if (typeof timestamp !== 'string') {
        return NextResponse.json({message: "Type of time need to be a string"});
    }

    // #endregion validation

    // Get user today attendance and check if its on site or not
    const log = await prisma.logs.findFirst({
        where: {
            user_id: userId
        },
        orderBy: {
            id: "desc"
        }
    });
    if (!log) {
        return NextResponse.json(null)
    }
    // check if its today or not
    const todayDate = today('UTC');        
    const logDate = parseDate(log.date!.toISOString().split("T")[0]);
    const result = todayDate.compare(logDate);
    if (result === 0) {
        // check if its on site work or not
        if (log.type === "on_site_work") {
            // append the new coordinate
            const oldCoordinate = log.onSiteCoordinates as JsonArray;
            let newCoordinate = []
            if (oldCoordinate) {
                 newCoordinate = [...oldCoordinate, { timestamp, latitude, longitude}];                
            } else {                
                 newCoordinate = [{ timestamp, latitude, longitude}];               
            }

            await prisma.logs.update({
                    where: {
                        id: log.id
                    },
                    data: {
                        onSiteCoordinates: newCoordinate
                    }
                })

            return NextResponse.json({message: "Coordinate saved"}, {status: 200})
        } else {
            return NextResponse.json({message: "Today attendance was not on site work"}, {status: 400});
        }
    } else {
        return NextResponse.json({message: "Today attendance not found"}, {status: 404});
    }
        
}
export  { POST }