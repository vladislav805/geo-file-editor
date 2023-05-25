export interface GeoJSONRoot extends GeoJSON.FeatureCollection {
    metadata?: GeoJSONMetaData;
}

export interface GeoJSONMetaData {
    name: string;
    creator: string;
}
