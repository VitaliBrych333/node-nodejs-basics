import { fileURLToPath } from 'url';
import path from 'path';
import { writeFile } from 'fs/promises';

const create = async () => {
    const pathFileCreateJs = fileURLToPath(import.meta.url);
    const pathFolderFs = path.dirname(pathFileCreateJs);
    const content = 'I am fresh and young';

    try {
        await writeFile(path.join(pathFolderFs, 'files', 'fresh.txt'), content, { flag: 'wx' }); // flag wx+ - Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists), but fails if the path exists.
    } catch(e) {
        throw new Error('FS operation failed');
    }
};

await create();