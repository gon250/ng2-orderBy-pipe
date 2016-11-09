import { Pipe, PipeTransform } from '@angular/core';
import { isNull, isNumber, isString } from '../utils/utils';
import * as MESSAGE from "../utils/messages";
@Pipe({
    name: 'OrderByArrayObject'
})
export class OrderByArrayObject implements PipeTransform {
    transform(values: any[], orderType: string, filter: string): any[] {
        if(isNull(values)) { throw new Error(MESSAGE.ERROR_NULL);}
        return this.OrderByArray(values, orderType, filter === 'descending');
    }

    OrderByArray(values: any[], orderType: string, descending: boolean): any[] { 
        try {
            return values.sort((a, b) => {
                if (a[orderType] < b[orderType]) {
                    return descending ? 1 : -1;
                } else if (a[orderType] > b[orderType]) {
                    return descending ? -1 : 1;
                }
                return 0
            });
        } catch (e){
            throw e;
        }
    }
}
