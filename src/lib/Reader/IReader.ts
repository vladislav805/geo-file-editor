import type { IPlacemark, IMetaInfo } from '@typings';

export interface IReaderCtr<T = string> {
    new(content: T): IReader;
}

export interface IReader {
    read(): Promise<IReaderResult>;
}

export interface IReaderResult {
    meta: IMetaInfo;
    placemarks: IPlacemark[];
}
