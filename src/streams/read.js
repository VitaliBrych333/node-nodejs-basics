import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'fs';
import { stdout } from 'process';

const read = async () => {
    const fileName = 'fileToRead.txt';
    const pathFileReadJs = fileURLToPath(import.meta.url);
    const pathFolderStreams = path.dirname(pathFileReadJs);
    const pathFileName = path.join(pathFolderStreams, 'files', fileName); // node-nodejs-basics\src\streams\files\fileToRead.txt
    const fileStream = createReadStream(pathFileName);

    fileStream.on('data', (chunk) => stdout.write(chunk)); // or fileStream.pipe(stdout);
};

await read();