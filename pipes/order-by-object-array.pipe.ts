import { Pipe, PipeTransform } from '@angular/core';
import { isNull, isNumber, isString } from '../utils/utils';
@Pipe({
    name: 'orderByArrayObject'
})
export class orderByArrayObject implements PipeTransform {
    // filter is going to contain the type to manage how order the array.
    transform(values: any[], filter: any): any {
        if(isNull(values)) {return null; }

        if(isNumber(filter)){
            //TODO: order by number
        }

        if(isString(filter)){
            //TODO: order by string
        }

        return values;
    }
 }