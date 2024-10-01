import path from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'fs';
import { stdin } from 'process';

const write = async () => {
    const fileName = 'fileToWrite.txt';
    const pathFileWriteJs = fileURLToPath(import.meta.url);
    const pathFolderStreams = path.dirname(pathFileWriteJs);
    const pathFileName = path.join(pathFolderStreams, 'files', fileName); // node-nodejs-basics\src\streams\files\fileToWrite.txt

    console.log(`Enter text to write to the ${fileName} file and press 'Enter'.\nTo finish writing, please press 'ctrl + c'`);

    stdin.pipe(createWriteStream(pathFileName));
};

await write();