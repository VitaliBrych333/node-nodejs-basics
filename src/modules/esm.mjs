// it's equivalent in ECMAScript for cjsToEsm.cjs

import path from 'path';
import { readFile } from 'fs/promises';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { fileURLToPath } from 'url'
import './files/c.js';

const random = Math.random();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileA = 'a.json';
const fileB = 'b.json';
const pathFileEsmMjs = fileURLToPath(import.meta.url);
const pathFolderModules = path.dirname(pathFileEsmMjs);
const pathFileA = path.join(pathFolderModules, 'files', fileA); // node-nodejs-basics\src\modules\files\a.json
const pathFileB = path.join(pathFolderModules, 'files', fileB); // node-nodejs-basics\src\modules\files\b.json

const a = JSON.parse(await readFile(pathFileA));
const b = JSON.parse(await readFile(pathFileB));

const unknownObject = random > 0.5 ? a : b;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is '${path.sep}'`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };