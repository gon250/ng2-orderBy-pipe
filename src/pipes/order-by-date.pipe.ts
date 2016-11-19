import { Pipe, PipeTransform } from '@angular/core';
import { isNull } from '../utils/utils';
import { OrderByDateHelper } from '../utils/helper-pipe';
import * as MESSAGE from '../utils/messages';
@Pipe({
    name: 'orderByDate'
})
export class OrderByDate implements PipeTransform {
    transform(values: any[], filter?: string): any {
        if (isNull(values)) { throw new Error(MESSAGE.ERROR_NULL); }
        return OrderByDateHelper(values, filter);
    }
 }
