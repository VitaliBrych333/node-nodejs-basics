import path from 'path';
import { fileURLToPath } from 'url';
import { stat, readFile } from 'fs/promises';

const read = async () => {
    const fileName = 'fileToRead.txt';
    const pathFileReadJs = fileURLToPath(import.meta.url);
    const pathFolderFs = path.dirname(pathFileReadJs);
    const pathFileName = path.join(pathFolderFs, 'files', fileName); // node-nodejs-basics\src\fs\files\fileName
    
    try {
        const isFileExist = await stat(pathFileName) // to get information about the given file or directory.
                                        .then((stats) => true) // if we have this file - return true
                                        .catch((e) => false); // else we dont have this file - return false

        if (!isFileExist) {
            throw new Error('FS operation failed');
        }

        const contentFile = await readFile(pathFileName, { encoding: 'utf-8' });

        console.log(contentFile);

    } catch(e) {
       throw new Error('FS operation failed');
    }
};

await read();