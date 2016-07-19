import * as ConsoleStream from './consolestream';
import * as FS from 'fs';

var inputStream = FS.createReadStream('package.json');

let consoleStream = ConsoleStream.create();
inputStream.pipe(consoleStream);

consoleStream.write('hello');