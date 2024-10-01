import path from 'path';
import { fileURLToPath } from 'url';
import { copyFile, mkdir, readdir } from 'fs/promises';

const copy = async () => {
    const folderName = 'files';
    const newCopiedFolderName = 'files_copy';
    const pathFileCopyJs = fileURLToPath(import.meta.url);
    const pathFolderFs = path.dirname(pathFileCopyJs);
    const pathFolderName = path.join(pathFolderFs, folderName);
    const pathNewCopiedFolderName = path.join(pathFolderFs, newCopiedFolderName);

    try {
        const fileNames = await readdir(pathFolderName); // to get all file names in the folder 'files'

        await mkdir(pathNewCopiedFolderName); // to create a directory 'node-nodejs-basics\src\fs\files_copy' asynchronously

        fileNames.map(fileName => copyFile(path.join(pathFolderName, fileName), path.join(pathNewCopiedFolderName, fileName)));

    } catch (e) {
        throw new Error('FS operation failed');
    }
};

await copy();
