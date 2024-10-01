import path from 'path';
import { fileURLToPath } from 'url';
import promises, { stat } from 'fs/promises';

const rename = async () => {
    const prevFileName = 'wrongFilename.txt';
    const newFileName = 'properFilename.md';
    const pathFileRenameJs = fileURLToPath(import.meta.url);
    const pathFolderFs = path.dirname(pathFileRenameJs);
    const prevPathFileName = path.join(pathFolderFs, 'files', prevFileName); // node-nodejs-basics\src\fs\files\wrongFilename.txt
    const newPathFileName = path.join(pathFolderFs, 'files', newFileName); // node-nodejs-basics\src\fs\files\properFilename.md

    try {
        const isFileExist = await stat(newPathFileName) // to get information about the given file or directory.
                                    .then((stats) => true) // if we have this file - return true
                                    .catch((e) => false); // else we dont have this file - return false

        if (isFileExist) {
            throw new Error('FS operation failed');
        }

        await promises.rename(prevPathFileName, newPathFileName);

    } catch(e) {
        throw new Error('FS operation failed');
    }
};

await rename();