import fs from 'fs';
import path from 'path';

export async function parseData(dataLocation: string) {
  const filePath = path.join(process.cwd(), 'src/data', dataLocation);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}
