import path from 'path';
import { fileURLToPath } from 'url';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import { exitCode } from 'process';

const decompress = async () => {
    const fileName = 'fileToCompress.txt';
    const archiveName = 'archive.gz';
    const pathFileCompressJs = fileURLToPath(import.meta.url);
    const pathFolderZip = path.dirname(pathFileCompressJs);
    const pathFileName = path.join(pathFolderZip, 'files', fileName); // node-nodejs-basics\src\zip\files\fileToCompress.txt
    const pathArchiveName = path.join(pathFolderZip, 'files', archiveName); // node-nodejs-basics\src\zip\files\archive.gz

    const gunzip = createGunzip();
    const source = createReadStream(pathArchiveName);
    const destination = createWriteStream(pathFileName);

    pipeline(source, gunzip, destination, (err) => {
        if (err) {
            console.error('Error:', err);
            exitCode = 1;
        } else {
            console.log('Archive was decompressesed!');
        }
    });
};

await decompress();