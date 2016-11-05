import { Pipe, PipeTransform } from '@angular/core';
import { isArray } from '../utils/utils';
@Pipe({
    name: 'orderByDate'
})
export class OrderByDate implements PipeTransform {
    transform(values: any[], filter: any): any {
        
    }
 }