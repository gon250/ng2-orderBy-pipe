import { Pipe, PipeTransform } from '@angular/core';
import { isNull } from '../utils/utils';
@Pipe({
    name: 'orderByNumber'
})
export class OrderByNumber implements PipeTransform {
    transform(values: number[], filter?: string): any {
        if(isNull(values)) {  return null; }
        if (filter === 'descending'){
            values.sort(function(a: number, b: number){return b-a});
        }else{
            values.sort(function(a:number, b:number){return a-b});
        }
    return values;
    }
 }
 