import { Pipe, PipeTransform } from '@angular/core';
import { isArray } from '../utils/utils';
@Pipe({
    name: 'orderByNumber'
})
export class OrderByNumber implements PipeTransform {
    transform(values: any[], filter: any): any {
        
    }
 }
 