import type { IReader } from '@lib/Reader/IReader';
import { Reader_gpx } from '@lib/Reader/_gpx/Reader_gpx';

export function readFile(file: File): IReader {
    if (file.name.endsWith('.gpx')) {
        return new Reader_gpx(file);
    }

    // kml
    // kmz
    // geojson

    throw new Error('Unknown type');
}
