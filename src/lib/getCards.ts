import fs from 'fs';
import path from 'path';

export async function getCards() {
  const filePath = path.join(process.cwd(), 'public/data/cards.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}
