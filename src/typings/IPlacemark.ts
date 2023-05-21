import type { IPoint } from './IPoint';

export interface IPlacemark {
    id: number;
    point: IPoint;
    title: string;
    description: string;
    markColor?: string;
    markIcon?: string;
}
