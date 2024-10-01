import path from 'path';
import { fileURLToPath } from 'url';
import { cpus } from 'os';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
    const countCpu = cpus().length;
    const pathFileMainJs = fileURLToPath(import.meta.url);
    const pathFolderWt = path.dirname(pathFileMainJs); 
    const pathWorker = path.join(pathFolderWt, 'worker.js'); // node-nodejs-basics\src\wt\worker.js
    const arrayWorkers = [];
    const startNumber = 10;

    for (let i = 0; i < countCpu; i++) {
        const worker = new Worker(pathWorker, { workerData: startNumber + i });

        const promise = new Promise((resolve, reject) => {
            worker.on('message', (value) => resolve({ status: 'resolved', data: value }));
            worker.on('error', () => reject({ status: 'error', data: null }));
        });

        arrayWorkers.push(promise);
    }

    const result = await Promise.allSettled(arrayWorkers);

    console.log(result.map((key) => key['value'] || key['reason']));
};

await performCalculations();