import { Pipe, PipeTransform } from '@angular/core';
import { isNull } from '../utils/utils';
import { OrderByArrayHelper } from '../utils/helper-pipe';
import * as MESSAGE from '../utils/messages';
@Pipe({
    name: 'OrderByArrayObject'
})
export class OrderByArrayObject implements PipeTransform {
    transform(values: any[], orderType: string, filter: string): any[] {
        if (isNull(values)) { throw new Error(MESSAGE.ERROR_NULL); }
        return OrderByArrayHelper(values, orderType, filter === '-');
    }
}
