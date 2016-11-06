import { Pipe, PipeTransform } from '@angular/core';
import { isNull, isNumber, isString } from '../utils/utils';
@Pipe({
    name: 'orderByArrayObject'
})
export class orderByArrayObject implements PipeTransform {
    transform(values: any[], filter: any, orderType: any): any {
        if(isNull(values)) {return null; }

        //TODO: Manage ifs depends on  orderType.
        values.sort((a, b) => {
            if (a[orderType] < b[orderType]) {
                return -1;
            }

            if (a[orderType] > b[orderType]) {
                return 1;
            }

            return 0
        });

        return values;
    }
 }