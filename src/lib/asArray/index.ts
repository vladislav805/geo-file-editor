export function asArray<T>(data: T | T[] | undefined | null): T[] {
    if (data === undefined || data === null) {
        return [];
    }

    if (Array.isArray(data)) {
        return data;
    }

    return [data];
}
