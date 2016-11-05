import { Pipe, PipeTransform } from '@angular/core';
import { isNull } from '../utils/utils';
@Pipe({
    name: 'orderByDate'
})
export class OrderByDate implements PipeTransform {
    transform(values: number[], filter: any): any {
        if(isNull(values)) {
            return null;
        }
        values.sort(function(a,b) { 
            return new Date(a).getTime() - new Date(b).getTime() 
        });
    }
 }