import { Pipe, PipeTransform } from '@angular/core';
import { isNull, isDate } from '../utils/utils';
@Pipe({
    name: 'orderByDate'
})
export class OrderByDate implements PipeTransform {
    transform(values: any[], filter?: string): any {
        if(isNull(values)) { return null; }

        //TODO: validate date values.
        if (filter === 'descending'){
            values.sort(function(a, b) { 
                return new Date(a).getTime() - new Date(b).getTime() 
            });
        }else{
            values.sort(function(a, b) { 
                return new Date(b).getTime() - new Date(a).getTime() 
            });
        }
        return values;
    }
 }