import { Pipe, PipeTransform } from '@angular/core';
import { isNull } from '../utils/utils';
@Pipe({
    name: 'orderByDate'
})
export class OrderByDate implements PipeTransform {
    transform(values: number[], filter?: string): any {
        if(isNull(values)) {
            return null;
        }
        if (filter === 'descending'){
            values.sort(function(a,b) { 
                return new Date(a).getTime() - new Date(b).getTime() 
            });
        }else{
            values.sort(function(a,b) { 
                return new Date(b).getTime() - new Date(a).getTime() 
            });
        }
        return values;
    }
 }