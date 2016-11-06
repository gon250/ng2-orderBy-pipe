import { Pipe, PipeTransform } from '@angular/core';
import { isNull, isNumber, isString } from '../utils/utils';
@Pipe({
    name: 'orderByArrayObject'
})
export class orderByArrayObject implements PipeTransform {
    transform(values: any[], filter: any, orderType: any): any {
        if(isNull(values)) {return null; }

        

        return values;
    }
 }