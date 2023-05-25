import type { IReader } from '@lib/Reader/IReader';
import { Reader_gpx } from '@lib/Reader/_gpx';
import { Reader_geojson } from '@lib/Reader/_geojson';

export function readFile(file: File): IReader {
    if (file.name.endsWith('.gpx')) {
        return new Reader_gpx(file);
    }

    if (file.name.endsWith('.geojson')) {
        return new Reader_geojson(file);
    }

    // kml
    // kmz

    throw new Error('Unknown type');
}
