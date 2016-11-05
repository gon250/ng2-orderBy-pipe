import { Pipe, PipeTransform } from '@angular/core';
import { isArray } from '../utils/utils';

@Pipe({
    name: 'orderByString'
})
export class OrderByString implements PipeTransform {
    transform(values: any[], filter: any): any {
        
    }
 }
 