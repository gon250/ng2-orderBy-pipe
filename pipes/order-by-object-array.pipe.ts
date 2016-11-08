import { Pipe, PipeTransform } from '@angular/core';
import { isNull, isNumber, isString } from '../utils/utils';
@Pipe({
    name: 'orderByArrayObject'
})
export class orderByArrayObject implements PipeTransform {
    transform(values: any[], orderType: string, filter: string): any[] {
        if(isNull(values)) {return null; }
        return this.OrderByArray(values, orderType);
    }

    OrderByArray(values: any[], orderType: string) : any[] { //TODO: implement filter option.
        return values.sort((a, b) => {
            if (a[orderType] < b[orderType]) {
                return -1;
            }
            if (a[orderType] > b[orderType]) {
                return 1;
            }
            return 0
        });
    }
    
    //TODO: future update for typescript 2.1 
    /*
    function OrderByArray<T, K keyof T>(values: T[], orderType: K) {
        ...
    }
    */
 }
