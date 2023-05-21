import type { IPlacemark } from './IPlacemark';

export interface IAppState {
    placemarks: IPlacemark[];
    nextId: number;
}
