import path from 'path';

import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "api");

import defaultFunc from '../../index.js';

const k1 = defaultFunc({
    toPath: appJsPath,
    inTargetPath: __dirname
});

// console.log("ssssssssss : ", k1);
console.log("ssssssssss : ", JSON.stringify(k1[0], null, 2));
