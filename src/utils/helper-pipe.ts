import { isDescending } from '../utils/utils';

export function OrderByArrayHelper(
    values: any[],
    orderType: string,
    descending = false): any[] {
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

export function OrderByDateHelper(values: any[], descending = false): any[] {
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

export function OrderByNumberHelper(values: number[], descending = false): number[] {
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

export function OrderByStringHelper(values: string[], descending = false): string[] {
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
// I saw this online. Needed to test.
export function OrderByMultiplePropertiesHelper(values: any[], properties: any[]) {
    return values.sort(function (a: any, b: any) {
        properties.forEach(property => {
            let desc = isDescending(property);
            let propertyToCheck = !desc
                ? property
                : property.substr(1);

            let comparison = !desc ?
                OrderByComparator(a[propertyToCheck], b[propertyToCheck])
                : -OrderByComparator(a[propertyToCheck], b[propertyToCheck]);

            // Don't return 0 yet in case of needing to sort by next property
            if (comparison != 0) {
                return comparison;
            }
        });

        return 0; // equal each other
    });
}

export function OrderByComparator(a: any, b: any): number {

    // TODO compare different type of properties.

    return 0; // equal each other
}
