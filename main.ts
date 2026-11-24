import fs from 'node:fs';
import path from 'node:path';
const entry = 'I take you to be my lawfully wedded co-processor, to have and to hold, through every firmware update, till power loss do us part.';
const outDir = '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), entry, 'utf8');
