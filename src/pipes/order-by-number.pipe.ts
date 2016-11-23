import { Pipe, PipeTransform } from '@angular/core';
import { isNull } from '../utils/utils';
import { OrderByNumberHelper } from '../utils/helper-pipe';
import * as MESSAGE from '../utils/messages';
@Pipe({
    name: 'orderByNumber'
})
export class OrderByNumber implements PipeTransform {
    transform(values: number[], filter?: string): number[] {
        if (isNull(values)) { throw new Error(MESSAGE.ERROR_NULL); }
        return OrderByNumberHelper(values, filter === '-');
    }
 }
