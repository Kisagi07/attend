"use server";

import { auth } from "../api/auth/[...nextauth]/authConfig";
import prisma from "../prisma";

const createNSOvertime = async (formData: FormData) => {
  // retrieve fields
  const checkIn = formData.get("checkIn") as string | null;
  const checkOut = formData.get("checkOut") as string | null;
  const work = formData.get("work") as string | null;
  const date = formData.get("date") as string | null;

  // validations
  const errors: Record<string, string> = {};
  if (!checkIn) {
    errors.checkIn = "Check in dibutuhkan";
  }
  if (!checkOut) {
    errors.checkOut = "Check out dibutuhkan";
  }
  if (!work) {
    errors.work = "Work dibutuhkan";
  }
  if (!date) {
    errors.date = "Tanggal dibutuhkan";
  }
  if (Object.values(errors).length > 0) {
    return { status: 422, errors };
  }

  // authorize
  const session = await auth();
  if (!session) {
    return { status: 401 };
  }

  const user = await prisma.users.findFirst({
    where: {
      work_id: session.user.work_id,
    },
  });

  if (!user) {
    return { status: 404 };
  }

  // parse work to array
  const workA = [work];

  // create the logs
  try {
    const [hoursI, minutesI, secondsI] = checkIn!.split(":");
    const checkInTime = new Date(
      `${date}T${hoursI}:${minutesI}:${secondsI}Z`
    );
    const [hoursO, minutesO, secondsO] = checkOut!.split(":");
    const checkOutTime = new Date(
      `${date}T${hoursO}:${minutesO}:${secondsO}Z`
    );
    await prisma.logs.create({
      data: {
        clock_in_time: checkInTime,
        clock_out_time: checkOutTime,
        work: workA,
        user_id: user.id,
        type: "non_schedule_overtime",
        date: new Date(),
      },
    });
  } catch (error) {
    console.error(error);
    return { status: 400, message: "Terjadi kesalahan memasukan overtime" };
  }

  // create the timeline
  try {
    await prisma.timelines.create({
      data: {
        title: `${user.name} memasukkan overtime`,
        description: `${checkIn} - ${checkOut} : ${work}`,
        type: "new",
      },
    });
  } catch (error) {
    // console.log(error);
    return {
      status: 400,
      message: "Terjadi kesalahan memasukkan timeline overtime",
    };
  }

  return { status: 200 };
};
export default createNSOvertime;
