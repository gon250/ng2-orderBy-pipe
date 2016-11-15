import { Pipe, PipeTransform } from '@angular/core';
import { isNull, isDate } from '../utils/utils';
import * as MESSAGE from "../utils/messages";
@Pipe({
    name: 'orderByDate'
})
export class OrderByDate implements PipeTransform {
    transform(values: any[], filter?: string): any {
        if(isNull(values)) { throw new Error(MESSAGE.ERROR_NULL);}
        try{
            if (filter === 'descending'){
                values.sort(function(a, b) { 
                    return new Date(a).getTime() - new Date(b).getTime();
                });
            }else{
                values.sort(function(a, b) { 
                    return new Date(b).getTime() - new Date(a).getTime();
                });
            }
        } catch (e){
            throw e;
        }
        return values;
    }
 }