import { Pipe, PipeTransform } from '@angular/core';
import { isNull } from '../utils/utils';
@Pipe({
    name: 'orderByString'
})
export class OrderByString implements PipeTransform {
    transform(values: string[], filter?: any): any {
        if(isNull(values)) { return null; }
        if (filter === 'descending'){
            values.sort((a,b) => 0 - (a > b ? 1 : -1));
        }else{
            values.sort();
        }
        return values;
    }
 }
 