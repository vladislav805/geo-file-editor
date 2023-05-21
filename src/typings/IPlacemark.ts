import type { IPoint } from './IPoint';

export interface IPlacemark {
    id: number;
    point: IPoint;

    title: string;
    description: string;
    elevation?: number;
    time?: Date;

    markColor?: string;
    markIcon?: string;
}
