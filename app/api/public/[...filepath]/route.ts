import { fileTypeFromBuffer } from "file-type";
import { existsSync, readFileSync } from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
const GET = async (req: NextRequest, props: { params: Promise<{ filepath: string[] }> }): Promise<NextResponse> => {
  const params = await props.params;
  const { filepath: filename } = params;
  const directory = path.join(process.cwd(), "public/", filename.join("/"));
  const exists = existsSync(directory);
  if (!exists) return NextResponse.json("Not Found", { status: 404 });
  const file = readFileSync(directory);
  const fileinfo = await fileTypeFromBuffer(file);
  if (!fileinfo) return NextResponse.json("File not registered", { status: 500 });
  const response = new NextResponse(file);
  response.headers.set("Content-Type", fileinfo.mime);
  return response;
};

export { GET };
