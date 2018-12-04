import * as fs from 'fs';

export default class fileRepository {
    public path: string;

    constructor(thePath: string){

        this.path = thePath;
    }
    public getFileContents(): any[]{
        const contents = fs.readFileSync(this.path);
        const jsonObject = JSON.parse(contents.toString());
        return jsonObject;
    }
}