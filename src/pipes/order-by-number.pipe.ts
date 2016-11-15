import { Pipe, PipeTransform } from '@angular/core';
import { isNull } from '../utils/utils';
import * as MESSAGE from '../utils/messages';
@Pipe({
    name: 'orderByNumber'
})
export class OrderByNumber implements PipeTransform {
    transform(values: number[], filter?: string): number[] {
        if (isNull(values)) { throw new Error(MESSAGE.ERROR_NULL); }
        try {
            if (filter === 'descending') {
                values.sort(function(a: number, b: number){return b - a; });
            }else {
                values.sort(function(a: number, b: number){return a - b; });
            }
        } catch (e) {
            throw e;
        }
        return values;
    }
 }
