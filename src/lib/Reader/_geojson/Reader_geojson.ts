import type { IMetaInfo, IPlacemark, ITrack, ITrackPoint } from '@typings';

import { readFileAsText } from '@lib/readFileAsText';

import { Reader } from '../Reader';
import type { GeoJSONRoot } from './Reader_geojson.typings';

export class Reader_geojson extends Reader<GeoJSONRoot> {
    protected override async parseFile(file: File | string) {
        if (typeof file !== 'string') {
            file = await readFileAsText(file);
        }

        return JSON.parse(file) as GeoJSONRoot;
    }

    protected override getMetaInfo(content: GeoJSONRoot): IMetaInfo {
        const metadata = content.metadata;

        return {
            name: metadata?.name,
        };
    }

    protected override getPlacemarks(contents: GeoJSONRoot): IPlacemark[] {
        return contents.features.reduce((acc, feature) => {
            if (feature.type === 'Feature' && feature.geometry.type === 'Point') {
                const { properties, geometry: { coordinates } } = feature;

                acc.push({
                    id: acc.length + 1,
                    point: {
                        latitude: coordinates[1],
                        longitude: coordinates[0],
                    },
                    title: properties?.iconCaption as string ?? undefined,
                    description: properties?.description as string ?? undefined,
                    markColor: properties?.['marker-color'] as string ?? undefined, // yandex constructor
                });
            }

            return acc;
        }, [] as IPlacemark[]);
    }

    protected override getTracks(contents: GeoJSONRoot): ITrack[] {
        return contents.features.reduce((acc, feature) => {
            if (feature.type === 'Feature' && feature.geometry.type === 'LineString') {
                const points: ITrackPoint[] = feature.geometry.coordinates.map(([longitude, latitude], index) => ({
                    id: index + 1,
                    point: { latitude, longitude },
                }));

                acc.push({
                    segments: [{ points }],
                });
            }

            return acc;
        }, [] as ITrack[]);
    }
}
