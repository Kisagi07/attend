import { existsSync, readFileSync } from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { fileTypeFromBuffer } from "file-type";
import sharp from "sharp";

const GET = async (req: NextRequest, props: { params: Promise<{ filepath: string[] }> }) => {
  const searchParams = req.nextUrl.searchParams;
  const width = searchParams.get("width") ? Number(searchParams.get("width")): 300;  

  const params = await props.params;
  const { filepath: filename } = params;
  const directory = path.join(process.cwd(), "public/", filename.join("/"));
  const exists = existsSync(directory);
  if (!exists) return NextResponse.json("Not Found", { status: 404 });
  const image = readFileSync(directory);
  const optimizedImage = await sharp(Buffer.from(image)).resize(width).webp().toBuffer();
  

  const fileinfo = await fileTypeFromBuffer(optimizedImage);
  const response = new NextResponse(optimizedImage);
  response.headers.set("Content-Type", "image/" + fileinfo!.ext);
  return response;
};

export { GET };
