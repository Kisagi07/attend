import { describe, expect, it, test, vi } from "vitest";
import getTargetType from "@/utils/getTargetType";
import { logs } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

describe("Clock in Out", () => {    
            
        it("GetTargetType return home when today attendance type are work from home" , () => {                       
            const todayAttendance: logs = {
                id: 1,
                afterHourOvertime: false,
                clock_in_latitude: new Decimal(-7.619792855394331),
                clock_in_longitude: new Decimal(112.77486112096604),
                clock_in_picture: "proof",
                clock_in_time: new Date(new Date().setHours(9,0,0)),                
                type: "work_from_home",
                user_id: 2,
                date: new Date(),
                created_at: new Date(),
                updated_at: new Date(),
                work: [],
                clock_out_latitude: null,
                clock_out_longitude: null,
                clock_out_picture: null,
                clock_out_time: null,
                isOverTime: false
            }

            const target = getTargetType("clock-out", todayAttendance)
                    
            expect(target).toBe("home");                                
        })    

   
});
