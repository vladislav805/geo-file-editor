import type { IAppState, IPlacemark, IPoint } from '@typings';

export const defaultAppState: IAppState = {
    placemarks: [],
    nextId: 1,
};

export interface IAppActionPlacemarkCreate {
    action: 'placemark/create';
    point: IPoint;
}

export interface IAppActionPlacemarkEdit {
    action: 'placemark/edit';
    id: number;
    title?: string;
    description?: string;
}

export type IAppAction =
    | IAppActionPlacemarkCreate
    | IAppActionPlacemarkEdit
;

export function appStateReducer(prev: IAppState, action: IAppAction): IAppState {
    switch (action.action) {
        case 'placemark/create': {
            const placemark: IPlacemark = {
                id: prev.nextId,
                point: action.point,
                title: '',
                description: '',
            };

            return {
                ...prev,
                placemarks: [...prev.placemarks, placemark],
                nextId: prev.nextId + 1,
            };
        }

        case 'placemark/edit': {
            const { placemarks } = prev;
            const index = placemarks.findIndex(mark => mark.id === action.id);

            if (index === -1) {
                return prev;
            }

            const placemark: IPlacemark = {
                ...placemarks[index],
            };

            if (action.title !== undefined) {
                placemark.title = action.title;
            }

            if (action.description !== undefined) {
                placemark.description = action.description;
            }

            return {
                ...prev,
                placemarks: [
                    ...placemarks.slice(0, index - 1),
                    placemark,
                    ...placemarks.slice(index + 1),
                ],
            };
        }
    }

    return prev;
}
