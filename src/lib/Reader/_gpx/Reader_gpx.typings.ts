import type { XMLStringOrCData } from '@typings';

export interface GPXRoot {
    gpx: GPXDocument;
}

export interface GPXDocument {
    '@xmlns'?: string;
    time?: string;
    metadata?: GPXMetaData;
    wpt?: GPXWaypoint | GPXWaypoint[];
    trk?: GPXTrack | GPXTrack[];
    extensions?: unknown;
}

/**
 * http://www.topografix.com/GPX/1/1/#type_wptType
 */
export interface GPXWaypoint {
    /**
     * The latitude of the point. Decimal degrees, WGS84 datum.
     */
    '@lat': string;

    /**
     * The longitude of the point. Decimal degrees, WGS84 datum.
     */
    '@lon': string;

    /**
     * Elevation (in meters) of the point.
     */
    ele?: string;

    /**
     * Creation/modification timestamp for element. Date and time in are in Univeral Coordinated Time (UTC),
     * not local time! Conforms to ISO 8601 specification for date/time representation. Fractional seconds
     * are allowed for millisecond timing in tracklogs.
     */
    time?: string;

    /**
     * Magnetic variation (in degrees) at the point
     */
    magvar?: string;

    /**
     * Height (in meters) of geoid (mean sea level) above WGS84 earth ellipsoid. As defined in NMEA GGA message.
     */
    geoidheight?: string;

    /**
     * The GPS name of the waypoint. This field will be transferred to and from the GPS. GPX does not place
     * restrictions on the length of this field or the characters contained in it. It is up to the receiving
     * application to validate the field before sending it to the GPS.
     */
    name?: XMLStringOrCData;

    /**
     * GPS waypoint comment. Sent to GPS as comment
     */
    cmt?: XMLStringOrCData;

    /**
     * A text description of the element. Holds additional information about the element intended for the user, not the GPS.
     */
    desc?: XMLStringOrCData;

    /**
     * Source of data. Included to give user some idea of reliability and accuracy of data. "Garmin eTrex", "USGS quad Boston North", e.g.
     */
    src?: XMLStringOrCData;

    /**
     * Link to additional information about the waypoint.
     */
    link?: GPXLink | GPXLink[];

    /**
     * Text of GPS symbol name. For interchange with other programs, use the exact spelling of the symbol as displayed
     * on the GPS. If the GPS abbreviates words, spell them out.
     */
    sym?: XMLStringOrCData;

    /**
     * Type (classification) of the waypoint.
     */
    type?: string;

    /**
     * Type of GPX fix.
     */
    fix?: string;

    /**
     * Number of satellites used to calculate the GPX fix.
     */
    sat?: string;

    /**
     * Horizontal dilution of precision.
     */
    hdop?: string;

    /**
     * Vertical dilution of precision.
     */
    vdop?: string;

    /**
     * Position dilution of precision.
     */
    pdop?: string;

    /**
     * Number of seconds since last DGPS update.
     */
    ageofdgpsdata?: string;

    /**
     * ID of DGPS station used in differential correction.
     */
    dgpsid?: string;

    /**
     * You can add extend GPX by adding your own elements from another schema here.
     */
    extensions?: string;
}

/**
 * http://www.topografix.com/GPX/1/1/#metadataType
 */
export interface GPXMetaData {
    /**
     * The name of the GPX file.
     */
    name?: XMLStringOrCData;

    /**
     * A description of the contents of the GPX file.
     */
    desc?: XMLStringOrCData;

    /**
     * The person or organization who created the GPX file.
     */
    author?: GPXAuthor;

    /**
     * Copyright and license information governing use of the file.
     */
    copyright?: GPXCopyright;

    /**
     * URLs associated with the location described in the file.
     */
    link?: GPXLink | GPXLink[];

    /**
     * The creation date of the file.
     */
    time?: string;

    /**
     * Keywords associated with the file. Search engines or databases can use this information to classify the data.
     */
    keywords?: XMLStringOrCData;

    /**
     * Minimum and maximum coordinates which describe the extent of the coordinates in the file.
     */
    bounds?: string;

    /**
     * You can add extend GPX by adding your own elements from another schema here.
     */
    extensions?: unknown;
}

/**
 * http://www.topografix.com/GPX/1/1/#personType
 */
export interface GPXAuthor {
    /**
     * Name of person or organization.
     */
    name?: string;

    /**
     * Email address.
     */
    email?: string;

    /**
     * Link to Web site or other external information about person.
     */
    link?: GPXLink;
}

export interface GPXCopyright {
    /**
     * Copyright holder (TopoSoft, Inc.)
     */
    '@author': string;

    /**
     * Year of copyright.
     */
    year?: string;

    /**
     * Link to external file containing license text.
     */
    license?: string;
}

export interface GPXLink {
    /**
     * URL of hyperlink.
     */
    '@href': string;

    /**
     * Text of hyperlink.
     */
    text?: string;

    /**
     * Mime type of content (image/jpeg)
     */
    type?: string;
}

export interface GPXTrack {
    /**
     * GPS name of track.
     */
    name?: string;

    /**
     * GPS comment for track.
     */
    cmt?: XMLStringOrCData;

    /**
     * User description of track.
     */
    desc?: XMLStringOrCData;

    /**
     * Source of data. Included to give user some idea of reliability and accuracy of data.
     */
    src?: XMLStringOrCData;

    /**
     * Links to external information about track.
     */
    link?: GPXLink;

    /**
     * GPS track number. (non negative integer)
     */
    number?: string;

    /**
     * Type (classification) of track.
     */
    type?: string;

    /**
     * You can add extend GPX by adding your own elements from another schema here.
     */
    extensions?: unknown;

    /**
     * A Track Segment holds a list of Track Points which are logically connected in order. To represent a single
     * GPS track where GPS reception was lost, or the GPS receiver was turned off, start a new Track Segment for
     * each continuous span of track data.
     */
    trkseg?: GPXTrackSegment | GPXTrackSegment[];
}

export interface GPXTrackSegment {
    /**
     * A Track Point holds the coordinates, elevation, timestamp, and metadata for a single point in a track.
     */
    trkpt?: GPXWaypoint | GPXWaypoint[];

    /**
     * You can add extend GPX by adding your own elements from another schema here.
     */
    extensions?: unknown;
}
