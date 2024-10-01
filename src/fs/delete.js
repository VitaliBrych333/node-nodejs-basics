import path from 'path';
import { fileURLToPath } from 'url';
import { stat, rm } from 'fs/promises';

const remove = async () => {
    const fileNameDelete = 'fileToRemove.txt';
    const pathFileDeleteJs = fileURLToPath(import.meta.url);
    const pathFolderFs = path.dirname(pathFileDeleteJs);
    const pathFile = path.join(pathFolderFs, 'files', fileNameDelete); // node-nodejs-basics\src\fs\files\fileToRemove.txt
    
    try {
        const isFileExist = await stat(pathFile) // to get information about the given file or directory.
                                    .then((stats) => true) // if we have this file - return true
                                    .catch((e) => false); // else we dont have this file - return false

        if (!isFileExist) {
            throw new Error('FS operation failed');
        }

        await rm(pathFile); // removes files and directories

    } catch(e) {
        throw new Error('FS operation failed');
    }
};

await remove();