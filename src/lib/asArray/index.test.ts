import { asArray } from '.';

describe('asArray', () => {
    it('should return array if passed array', () => {
        const arr = ['a', 'b', 0];

        expect(asArray(arr)).toBe(arr);
    });

    it('should return array if passed primitive or not array', () => {
        expect(asArray(1)).toEqual([1]);
        expect(asArray('str')).toEqual(['str']);
        expect(asArray(101n)).toEqual([101n]);

        const obj = { a: 1 };
        expect(asArray(obj)).toEqual([obj]);
    });

    it('should return empty array if passed null or undefined', () => {
        expect(asArray(null)).toEqual([]);
        expect(asArray(undefined)).toEqual([]);

        // But not zero or empty string
        expect(asArray(0)).toEqual([0]);
        expect(asArray('')).toEqual(['']);
    })
});
