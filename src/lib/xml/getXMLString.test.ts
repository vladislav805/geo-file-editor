import { getXMLString } from './getXMLString';

describe('xml', () => {
    describe('getXMLString', () => {
        it('should return string if passed string', () => {
            expect(getXMLString('string')).toEqual('string');
            expect(getXMLString('0')).toEqual('0');
            expect(getXMLString('')).toEqual('');
        });

        it('should return string if passed CDATA object', () => {
            expect(getXMLString({ $: 'string' })).toEqual('string');
            expect(getXMLString({ $: '0' })).toEqual('0');
            expect(getXMLString({ $: '' })).toEqual('');
        });

        it('should return default value if passed undefined', () => {
            expect(getXMLString(undefined, 'def')).toEqual('def');
        });
    });
});
