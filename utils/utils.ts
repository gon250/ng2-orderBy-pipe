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


export function toString (value: number|string) {
    
    return `${value}`;
}

export function toArray (object: any): Array<any> {
    
    return isArray(object) ? object : Object.keys(object).map((key) => {
        return object[key];
    });
}

export function count (input: any): any {
    
    if (!isArray(input) || !isObject(input) || !isString(input)) {
        return input;
    }
    
    if (isObject(input)) {
        return Object.keys(input).map((value) => input[value]).length;
    }
    
    return input.length;
}

export function empty (input: any): any {
    
    if (!isArray(input)) {
        return input;
    }
        
    return input.length === 0;
}