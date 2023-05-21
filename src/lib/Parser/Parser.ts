import type { IMetaInfo, IPlacemark } from '@typings';
import type { IParser, IParserResult } from './IParser';

export abstract class Parser<Content> implements IParser {
    private file: File | string;

    public constructor(file: File | string) {
        this.file = file;
    }

    protected abstract parseFile(file: File | string): Promise<Content>;

    protected abstract getMetaInfo(content: Content): IMetaInfo;

    protected abstract getPlacemarks(contents: Content): IPlacemark[];

    public async parse(): Promise<IParserResult> {
        const contents = await this.parseFile(this.file);

        return {
            meta: this.getMetaInfo(contents),
            placemarks: this.getPlacemarks(contents),
        };
    }
}
