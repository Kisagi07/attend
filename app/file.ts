import { existsSync, mkdirSync } from "fs";
import { writeFile, unlink } from "fs/promises";
import { join } from "path";
import { v4 as uuidv4 } from "uuid";

export async function storeFile(
  file: File,
  { uniqueName, storePath = "" }: { uniqueName?: boolean; storePath?: string },
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

  const path = join(process.cwd(), `public${storePath}`, filename);
  await writeFile(path, buffer);
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
