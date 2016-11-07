import { Pipe, PipeTransform } from '@angular/core';
import { isNull, isNumber, isString } from '../utils/utils';
@Pipe({
    name: 'orderByArrayObject'
})
export class orderByArrayObject implements PipeTransform {
    transform(values: any[], filter: any, orderType: string): any {
        if(isNull(values)) {return null; }
        //TODO: Manage ifs depends on  orderType.
        return this.OrderByArray(values, orderType).map(item => item[orderType]);
    }

    OrderByArray(values: any[], orderType: any) { //TODO: implement filter option.
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
