import { Pipe, PipeTransform } from '@angular/core';
import { isNull } from '../utils/utils';
@Pipe({
    name: 'orderByArrayObject'
})
export class orderByArrayObject implements PipeTransform {
    transform(values: any[], filter?: string): any {
        if(isNull(values)) {
            return null;
        }
        
        return values;
    }
 }