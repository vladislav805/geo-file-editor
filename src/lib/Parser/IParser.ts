import type { IPlacemark, IMetaInfo } from '@typings';

export interface IParserCtr<T = string> {
    new(content: T): IParser;
}

export interface IParser {
    parse(): Promise<IParserResult>;
}

export interface IParserResult {
    meta: IMetaInfo;
    placemarks: IPlacemark[];
}
