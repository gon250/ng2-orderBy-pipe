export function isUndefined (value: any): boolean {

    return typeof value === 'undefined';
}

export function isNull (value: any): boolean {

    return value === null;
}

export function isNumber (value: any): boolean {

    return typeof value === 'number';
}

export function isInteger (value: number): boolean {

    // No rest, is an integer
    return (value % 1) === 0;
}

export function isString (value: any): boolean {

    return typeof value === 'string';
}

export function isObject (value: any): boolean {

    return typeof value === 'object';
}

export function isArray (value: any): boolean {

    return Array.isArray(value);
}

export function isDate(value) {
    let dateWrapper = new Date(value);
    return !isNaN(dateWrapper.getDate());
}
