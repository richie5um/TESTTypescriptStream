import * as Stream from 'stream';

export function create() {
    console.log('Writer: Create');
    return new ConsoleStream();
}

export class ConsoleStream extends Stream.Writable {
    constructor(opts?: Stream.WritableOptions) {
        super();
        console.log('Writer: Constructor');
    }

    public _write(chunk, enc, next) {
        console.log('Writer: Write - ', chunk);
        next();
    }
}