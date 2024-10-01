import path from 'path';
import { fileURLToPath } from 'url';
import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
    // Write your code here
    const scriptName = 'script.js';
    const pathFileCpJs = fileURLToPath(import.meta.url);
    const pathFolderCp = path.dirname(pathFileCpJs);
    const pathChildProcess = path.join(pathFolderCp, 'files', scriptName); // node-nodejs-basics\src\cp\files\script.js
    const childProcess = fork(pathChildProcess, args, { silent: true });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);

    childProcess.on('close', () => console.log('Child process was closed!'));
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2']);