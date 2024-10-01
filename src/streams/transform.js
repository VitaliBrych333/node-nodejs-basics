import { stdin, stdout } from 'process';
import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
    const reverseTransform = new Transform({
        transform(chunk, enc, callback) {
            callback(null, chunk.toString().trim().split('').reverse().join('') + '\n');
        }
    });

    pipeline(stdin, reverseTransform, stdout);
};

await transform();