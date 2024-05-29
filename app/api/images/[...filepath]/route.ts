import { existsSync, readFileSync } from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { fileTypeFromBuffer } from "file-type";

const GET = async (
  req: NextRequest,
  { params }: { params: { filepath: string[] } },
) => {
  const { filepath: filename } = params;
  const directory = path.join(process.cwd(), "public/", filename.join("/"));
  const exists = existsSync(directory);
  if (!exists) return NextResponse.json("Not Found", { status: 404 });
  const image = readFileSync(directory);
  const fileinfo = await fileTypeFromBuffer(image);
  const response = new NextResponse(image);
  response.headers.set("Content-Type", "image/" + fileinfo!.ext);
  return response;
};

export { GET };
