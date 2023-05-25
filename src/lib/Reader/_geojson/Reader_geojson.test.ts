import { Reader_geojson } from './Reader_geojson';

/* eslint-disable max-len */
const stubYandexMapsConstructor = `{"type":"FeatureCollection","metadata":{"name":"test","creator":"Yandex Map Constructor"},"features":[{"type":"Feature","id":0,"geometry":{"type":"LineString","coordinates":[[30.23426750732405,60.01225612066701],[30.24161676002482,60.01434018072954],[30.248515401611115,60.00849051296242]]},"properties":{"description":"Description line","stroke":"#ed4543","stroke-width":"5","stroke-opacity":0.9}},{"type":"Feature","id":1,"geometry":{"type":"Point","coordinates":[30.177533422241073,59.999706004025455]},"properties":{"iconCaption":"Mark 1","marker-color":"#1e98ff"}},{"type":"Feature","id":2,"geometry":{"type":"Point","coordinates":[30.21847466064436,60.013760094835824]},"properties":{"description":"Mark 2 - desription","iconCaption":"Mark 2","iconContent":"1","marker-color":"#ed4543"}},{"type":"Feature","id":3,"geometry":{"type":"Point","coordinates":[30.218560491332834,60.008173559232475]},"properties":{"iconCaption":"With icon","marker-color":"#793d0e"}}]}`;
/* eslint-enable max-len */

describe('Reader_geojson', () => {
    describe('#read', () => {
        it('should parse Yandex.Maps Constructor case', async () => {
            const reader = new Reader_geojson(stubYandexMapsConstructor);

            expect(await reader.read()).toEqual({
                meta: {
                    name: 'test',
                },
                placemarks: [
                    {
                        description: undefined,
                        id: 1,
                        markColor: '#1e98ff',
                        point: {
                            latitude: 59.999706004025455,
                            longitude: 30.177533422241073,
                        },
                        title: 'Mark 1',
                    },
                    {
                        description: 'Mark 2 - desription',
                        id: 2,
                        markColor: '#ed4543',
                        point: {
                            latitude: 60.013760094835824,
                            longitude: 30.21847466064436,
                        },
                        title: 'Mark 2',
                    },
                    {
                        description: undefined,
                        id: 3,
                        markColor: '#793d0e',
                        point: {
                            latitude: 60.008173559232475,
                            longitude: 30.218560491332834,
                        },
                        title: 'With icon',
                    },
                ],
                tracks: [
                    {
                        segments: [
                            {
                                points: [
                                    {
                                        id: 1,
                                        point: {
                                            latitude: 60.01225612066701,
                                            longitude: 30.23426750732405,
                                        },
                                    },
                                    {
                                        id: 2,
                                        point: {
                                            latitude: 60.01434018072954,
                                            longitude: 30.24161676002482,
                                        },
                                    },
                                    {
                                        id: 3,
                                        point: {
                                            latitude: 60.00849051296242,
                                            longitude: 30.248515401611115,
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
        });
    });
});
