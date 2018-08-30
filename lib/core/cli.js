'use strict';

const os = require('os'),
    chalk = require('chalk'),
    env = require('./env');

exports.asciiGreeting = () => {
    const version = require('./../../package.json').version;
    let art =
        `
 _______                   _             
(_______)                 (_)  _         
 _______ _____ _   _  ____ _ _| |_ _____ 
|  ___  (___  ) | | |/ ___) (_   _) ___ |
| |   | |/ __/| |_| | |   | | | |_| ____|
|_|   |_(_____)____/|_|   |_| \\__)_____)
                                         
`
    art += 'Azurite, Version ' + version + os.EOL;
    art += 'A lightweight server clone of Azure Storage' + os.EOL;
    if (!env.nocyan) {
        console.log(chalk.cyan(art));
    } else {
        console.log(art);
    }
}

exports.blobStorageStatus = () => {
    if (env.nocyan) {
        console.log(`Azure Blob Storage Emulator listening on port ${env.blobStoragePort}`);
    } else {
        console.log(chalk.cyan(`Azure Blob Storage Emulator listening on port ${env.blobStoragePort}`));
    }
}

exports.queueStorageStatus = () => {
    if (env.nocyan) {
        console.log(`Azure Queue Storage Emulator listening on port ${env.queueStoragePort}`);
    } else {
        console.log(chalk.cyan(`Azure Queue Storage Emulator listening on port ${env.queueStoragePort}`));
    }
}

exports.tableStorageStatus = () => {
    if (env.nocyan) {
        console.log(`Azure Table Storage Emulator listening on port ${env.tableStoragePort}`);
    } else {
        console.log(chalk.cyan(`Azure Table Storage Emulator listening on port ${env.tableStoragePort}`));
    }
}