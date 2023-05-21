import type { XMLStringOrCData } from '@typings';

/**
 * @param string String or CDATA object
 */
export function getXMLString(string: XMLStringOrCData | undefined, defaultValue: string = ''): string {
    if (string === undefined) {
        return defaultValue;
    }

    if (typeof string === 'string') {
        return string;
    }

    return string.$;
}
