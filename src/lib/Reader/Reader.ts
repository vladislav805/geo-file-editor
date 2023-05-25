import type { IMetaInfo, IPlacemark, ITrack } from '@typings';
import type { IReader, IReaderResult } from './IReader';

export abstract class Reader<InternalFileContent> implements IReader {
    private file: File | string;

    public constructor(file: File | string) {
        this.file = file;
    }

    protected abstract parseFile(file: File | string): Promise<InternalFileContent>;

    protected abstract getMetaInfo(content: InternalFileContent): IMetaInfo;

    protected abstract getPlacemarks(contents: InternalFileContent): IPlacemark[];

    protected abstract getTracks(contents: InternalFileContent): ITrack[];

    public async read(): Promise<IReaderResult> {
        const contents = await this.parseFile(this.file);

        return {
            meta: this.getMetaInfo(contents),
            placemarks: this.getPlacemarks(contents),
            tracks: this.getTracks(contents),
        };
    }
}
