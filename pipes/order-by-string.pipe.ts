import { Pipe, PipeTransform } from '@angular/core';
import { isNull } from '../utils/utils';
import * as MESSAGE from "../utils/messages";
@Pipe({
    name: 'orderByString'
})
export class OrderByString implements PipeTransform {
    transform(values: string[], filter?: string): string[] {
        if(isNull(values)) { throw new Error(MESSAGE.ERROR_NULL);}
        if (filter === 'descending'){
            values.sort((a,b) => 0 - (a > b ? 1 : -1));
        }else{
            values.sort();
        }
        return values;
    }
 }
 
