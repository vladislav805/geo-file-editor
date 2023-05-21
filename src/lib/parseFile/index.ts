import type { IParser } from '@lib/Parser/IParser';
import { Parser_gpx } from '@lib/Parser/_gpx/Parser_gpx';

export function parseFile(file: File): IParser {
    if (file.name.endsWith('.gpx')) {
        return new Parser_gpx(file);
    }

    // kml
    // kmz
    // geojson

    throw new Error('Unknown type');
}
