import { existsSync, mkdirSync } from "fs";
import { writeFile, unlink } from "fs/promises";
import { join } from "path";
import { v4 as uuidv4 } from "uuid";
import sharp from "sharp"

export async function storeFile(
  file: File,
  { uniqueName, storePath = "", maxSizeMB = 1 }: { uniqueName?: boolean; storePath?: string, maxSizeMB?: number },
) {
  const filename = uniqueName
    ? uuidv4() + "." + file.name.split(".").pop()
    : file.name;
  const byte = await file.arrayBuffer();
  const buffer = Buffer.from(byte);

  // check if directory exists or not
  const dir = join(process.cwd(), `public${storePath}`);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  const maxSizeBytes = maxSizeMB * 1024 * 1024;

  let finalBuffer = buffer;

  if (buffer.length > maxSizeBytes) {
    let quality = 80;
    let compressedBuffer = buffer;

    do {
      compressedBuffer = await sharp(buffer).toFormat("jpeg", { quality }).toBuffer();
      quality -= 10;
    } while (compressedBuffer.length > maxSizeBytes && quality > 10);

    finalBuffer = compressedBuffer;
  }

  const path = join(process.cwd(), `public${storePath}`, filename);
  await writeFile(path, finalBuffer);
  return storePath + "/" + filename;
}

export async function deleteFile(filepath: string): Promise<boolean> {
  const path = join(process.cwd(), "public", filepath);
  const exist = existsSync(path);
  if (exist) {
    await unlink(path);
  }
  return true;
}
