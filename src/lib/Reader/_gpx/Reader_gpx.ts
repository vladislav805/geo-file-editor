import type { IMetaInfo, IPlacemark, ITrack } from '@typings';
import { convert } from 'xmlbuilder2';

import { asArray } from '@lib/asArray';
import { readFileAsText } from '@lib/readFileAsText';

import { Reader } from '../Reader';
import type { GPXRoot, GPXWaypoint } from './Reader_gpx.typings';
import { getXMLString } from '@lib/xml/getXMLString';

export class Reader_gpx extends Reader<GPXRoot> {
    protected override async parseFile(file: File | string) {
        if (typeof file !== 'string') {
            file = await readFileAsText(file);
        }

        return convert(file, {
            format: 'object',
        }) as unknown as GPXRoot;
    }

    protected override getMetaInfo(content: GPXRoot): IMetaInfo {
        const metadata = content.gpx.metadata;

        return {
            name: getXMLString(metadata?.name),
            description: getXMLString(metadata?.desc),
            time: metadata?.time !== undefined ? new Date(metadata.time) : undefined,
        };
    }

    protected override getPlacemarks(contents: GPXRoot): IPlacemark[] {
        const wpt = asArray(contents.gpx.wpt);

        return wpt.map(this.getPlacemark.bind(this));
    }

    protected override getTracks(contents: GPXRoot): ITrack[] {
        const getPlacemark = this.getPlacemark.bind(this);

        return asArray(contents.gpx.trk).map(track => {
            const segments = asArray(track.trkseg).map(segment => {
                const points = asArray(segment.trkpt).map(getPlacemark);

                return { points };
            });

            return { segments };
        });
    }

    private getPlacemark(wpt: GPXWaypoint, index: number): IPlacemark {
        return {
            id: index + 1,
            point: {
                latitude: Number(wpt['@lat']),
                longitude: Number(wpt['@lon']),
            },
            title: getXMLString(wpt.name),
            description: getXMLString(wpt.desc),
            elevation: wpt.ele !== undefined ? Number(wpt.ele) : undefined,
            time: wpt.time !== undefined ? new Date(wpt.time) : undefined,
        };
    }
}
