import { Pipe, PipeTransform } from '@angular/core';
import { isNull } from '../utils/utils';
import { OrderByStringHelper } from '../utils/helper-pipe';
import * as MESSAGE from '../utils/messages';
@Pipe({
    name: 'orderByString'
})
export class OrderByString implements PipeTransform {
    transform(values: string[], filter?: string): string[] {
        if (isNull(values)) { throw new Error(MESSAGE.ERROR_NULL); }
        return OrderByStringHelper(values, filter === "-");
    }
 }

