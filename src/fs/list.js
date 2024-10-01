import path from 'path';
import { fileURLToPath } from 'url';
import { readdir, stat } from 'fs/promises';

const list = async () => {
    const folderName = 'files';
    const pathFileListJs = fileURLToPath(import.meta.url);
    const pathFolderFs = path.dirname(pathFileListJs);
    const pathFolderName = path.join(pathFolderFs, folderName); // node-nodejs-basics\src\fs\files
    
    try {
        const isFolderExist = await stat(pathFolderName) // to get information about the given file or directory.
                                        .then((stats) => true) // if we have this file - return true
                                        .catch((e) => false); // else we dont have this file - return false

        if (!isFolderExist) {
            throw new Error('FS operation failed');
        }

        const fileNames = await readdir(pathFolderName); // to get all file names in the folder 'files'

        fileNames.map(fileName => console.log(fileName));

    } catch(e) {
        throw new Error('FS operation failed');
    }
};

await list();