import path from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';
import { createReadStream } from 'fs';

const calculateHash = async () => {
    const fileName = 'fileToCalculateHashFor.txt';
    const pathFileCalcHashJs = fileURLToPath(import.meta.url);
    const pathFolderHash = path.dirname(pathFileCalcHashJs);
    const pathFileName = path.join(pathFolderHash, 'files', fileName); // node-nodejs-basics\src\hash\files\fileToCalculateHashFor.txt
    const fileStream = createReadStream(pathFileName);
    const hash = createHash('sha256'); 

    fileStream.on('readable', () => {
        const data = fileStream.read();

        data
            ?  hash.update(data)
            : console.log(hash.digest('hex'));
    })
};

await calculateHash();