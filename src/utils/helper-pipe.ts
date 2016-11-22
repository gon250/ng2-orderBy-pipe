export function OrderByArrayHelper(values: any[], orderType: string, descending: boolean): any[] {
    try {
        return values.sort((a, b) => {
            if (a[orderType] < b[orderType]) {
                return descending ? 1 : -1;
            } else if (a[orderType] > b[orderType]) {
                return descending ? -1 : 1;
            }
            return 0;
        });
    } catch (e) {
        throw e;
    }
}

export function OrderByDateHelper(values: any[], descending: boolean): any[] {
    try {
        if (descending) {
            values.sort(function (a, b) {
                return new Date(a).getTime() - new Date(b).getTime();
            });
        } else {
            values.sort(function (a, b) {
                return new Date(b).getTime() - new Date(a).getTime();
            });
        }
    } catch (e) {
        throw e;
    }
    return values;
}

export function OrderByNumberHelper(values: number[], descending: boolean): number[] {
    try {
        if (descending) {
            values.sort(function (a: number, b: number) { return b - a; });
        } else {
            values.sort(function (a: number, b: number) { return a - b; });
        }
    } catch (e) {
        throw e;
    }
    return values;
}

export function OrderByStringHelper(values: string[], descending: boolean): string[] {
    try {
        if (descending) {
            values.sort((a, b) => 0 - (a > b ? 1 : -1));
        } else {
            values.sort();
        }
    } catch (e) {
        throw e;
    }
    return values;
}
