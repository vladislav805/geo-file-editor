import { Reader_gpx } from './Reader_gpx';
import type { GPXRoot, GPXWaypoint } from './Reader_gpx.typings';

/* eslint-disable max-len */
const stubMinimal = `<?xml version="1.0" encoding="utf-8"?><gpx xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd"><time>2020-08-01T10:31:07.039Z</time><metadata><name>track</name><desc /></metadata><wpt lat="60.00885816124969" lon="30.372439115032552"><name>#1 Sight</name></wpt><wpt lat="60.00839426009858" lon="30.375299011963346"><name>#2 Sight</name></wpt></gpx>`;

const stubYandexMapsConstructor = `<?xml version="1.0" encoding="UTF-8"?><gpx version="1.1" creator="Yandex Map Constructor" xmlns="http://www.topografix.com/GPX/1/1"><metadata><name><![CDATA[test]]></name><desc /><time>2023-05-21T19:56:35.548Z</time></metadata><wpt lon="30.177533422241073" lat="59.999706004025455"><name><![CDATA[Mark 1]]></name></wpt><wpt lon="30.21847466064436" lat="60.013760094835824"><name><![CDATA[Mark 2]]></name><desc><![CDATA[Mark 2 - desription]]></desc></wpt><wpt lon="30.218560491332834" lat="60.008173559232475"><name><![CDATA[With icon]]></name></wpt></gpx>`;

const stubGeoTracker = '<?xml version=\'1.0\' encoding=\'UTF-8\' standalone=\'yes\' ?><gpx version="1.1" xmlns="http://www.topografix.com/GPX/1/1" xmlns:geotracker="http://ilyabogdanovich.com/gpx/extensions/geotracker" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd" creator="Geo Tracker 5.2.1.3167 for Android by Ilya Bogdanovich"><metadata><name>2023-05-24 18:49 GMT+3</name><author><name>Recorded in Geo Tracker for Android from Ilya Bogdanovich</name><link href="https://play.google.com/store/apps/details?id=com.ilyabogdanovich.geotracker" /></author><link href="https://play.google.com/store/apps/details?id=com.ilyabogdanovich.geotracker" /><time>2023-05-24T15:49:49Z</time></metadata><trk><name>2023-05-24 18:49 GMT+3</name><src>Recorded in Geo Tracker for Android from Ilya Bogdanovich</src><link href="https://play.google.com/store/apps/details?id=com.ilyabogdanovich.geotracker" /><extensions><geotracker:meta><length>43200.1</length><duration>11100470</duration><creationtime>2023-05-24T15:49:49Z</creationtime><activity>0</activity></geotracker:meta></extensions><trkseg><trkpt lat="59.9855267" lon="30.25629695"><ele>23</ele><time>2023-05-24T18:35:00Z</time><extensions><geotracker:meta c="6.23" s="4.93" /></extensions></trkpt><trkpt lat="59.98563236" lon="30.2562946"><ele>23</ele><time>2023-05-24T18:35:02Z</time><extensions><geotracker:meta c="0.01" s="6.35" /></extensions></trkpt><trkpt lat="59.9857466" lon="30.25629653"><ele>23</ele><time>2023-05-24T18:35:04Z</time><extensions><geotracker:meta c="6.24" s="6.32" /></extensions></trkpt></trkseg></trk></gpx>';
/* eslint-enable max-len */

describe('Reader_gpx', () => {
    describe('#read', () => {
        it('should parse minimal case', async () => {
            const reader = new Reader_gpx(stubMinimal);

            expect(await reader.read()).toEqual({
                meta: {
                    description: undefined,
                    name: 'track',
                    time: undefined,
                },
                placemarks: [
                    {
                        description: '',
                        elevation: undefined,
                        id: 1,
                        point: {
                            latitude: 60.00885816124969,
                            longitude: 30.372439115032552,
                        },
                        time: undefined,
                        title: '#1 Sight',
                    },
                    {
                        description: '',
                        elevation: undefined,
                        id: 2,
                        point: {
                            latitude: 60.00839426009858,
                            longitude: 30.375299011963346,
                        },
                        time: undefined,
                        title: '#2 Sight',
                    },
                ],
                tracks: [],
            });
        });

        it('should parse Yandex.Map Constructor case', async () => {
            const reader = new Reader_gpx(stubYandexMapsConstructor);

            expect(await reader.read()).toEqual({
                meta: {
                    description: undefined,
                    name: 'test',
                    time: new Date('2023-05-21T19:56:35.548Z'),
                },
                placemarks: [
                    {
                        description: '',
                        elevation: undefined,
                        id: 1,
                        point: {
                            latitude: 59.999706004025455,
                            longitude: 30.177533422241073,
                        },
                        time: undefined,
                        title: 'Mark 1',
                    },
                    {
                        description: 'Mark 2 - desription',
                        elevation: undefined,
                        id: 2,
                        point: {
                            latitude: 60.013760094835824,
                            longitude: 30.21847466064436,
                        },
                        time: undefined,
                        title: 'Mark 2',
                    },
                    {
                        description: '',
                        elevation: undefined,
                        id: 3,
                        point: {
                            latitude: 60.008173559232475,
                            longitude: 30.218560491332834,
                        },
                        time: undefined,
                        title: 'With icon',
                    },
                ],
                tracks: [],
            });
        });

        it('should parse GeoTracker app case', async () => {
            const reader = new Reader_gpx(stubGeoTracker);

            expect(await reader.read()).toEqual({
                meta: {
                    description: '',
                    name: '2023-05-24 18:49 GMT+3',
                    time: new Date('2023-05-24T15:49:49.000Z'),
                },
                placemarks: [],
                tracks: [
                    {
                        segments: [
                            {
                                points: [
                                    {
                                        description: '',
                                        elevation: 23,
                                        id: 1,
                                        point: {
                                            latitude: 59.9855267,
                                            longitude: 30.25629695,
                                        },
                                        time: new Date('2023-05-24T18:35:00.000Z'),
                                        title: '',
                                    },
                                    {
                                        description: '',
                                        elevation: 23,
                                        id: 2,
                                        point: {
                                            latitude: 59.98563236,
                                            longitude: 30.2562946,
                                        },
                                        time: new Date('2023-05-24T18:35:02.000Z'),
                                        title: '',
                                    },
                                    {
                                        description: '',
                                        elevation: 23,
                                        id: 3,
                                        point: {
                                            latitude: 59.9857466,
                                            longitude: 30.25629653,
                                        },
                                        time: new Date('2023-05-24T18:35:04.000Z'),
                                        title: '',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
        });
    });

    describe('#getMetaInfo', () => {
        it('should return metadata', () => {
            const root: GPXRoot = {
                gpx: {
                    metadata: {
                        name: 'name',
                        desc: 'description',
                        time: '2023-05-21T20:46:20.434Z',
                    },
                },
            };

            // @ts-expect-error private method
            expect(Reader_gpx.prototype.getMetaInfo.call(null, root, 0)).toEqual({
                name: 'name',
                description: 'description',
                elevation: undefined,
                time: new Date('2023-05-21T20:46:20.434Z'),
            });
        });
    });

    describe('#getPlacemark', () => {
        it('should return placemark by wpt object', () => {
            const wpt: GPXWaypoint = {
                '@lat': '1',
                '@lon': '2',
                name: 'name',
            };

            // @ts-expect-error private method
            expect(Reader_gpx.prototype.getPlacemark.call(null, wpt, 0)).toEqual({
                id: 1,
                point: {
                    latitude: 1,
                    longitude: 2,
                },
                title: 'name',
                description: '',
                elevation: undefined,
                time: undefined,
            });
        });
    });
});
