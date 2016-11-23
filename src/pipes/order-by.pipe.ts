import { Pipe, PipeTransform } from '@angular/core';
import { OrderByArrayHelper, OrderByMultiplePropertiesHelper } from '../utils/helper-pipe';
import { isDescending, isArray } from '../utils/utils';
@Pipe({
    name: 'orderBy'
})
export class OrderBy implements PipeTransform {
    /********************************************************************
        // Order simple list ascending
         *ngFor="let user of usersList | orderBy   
    
         // Order simple list descending
         *ngFor="let user of usersList | orderBy:'-'
    
         // Order complex list by userId descending
        *ngFor="let user of usersList | orderBy:'-userId'
    
        // Order complex list by userId descending and memberId asc
        *ngFor="let user of usersList | orderBy:['-userId','memberId'] 
        
    ********************************************************************/
    transform(values: any[], args: string[] = ['']): any[] { // Default sort ascending

        let result: any[];

        // Single propery to sort.
        if (!isArray(args) || (isArray(args) && args.length === 1)) {

            let propertyToCheck: string = !isArray(args) ? args.toString() : args[0];
            let desc: boolean = isDescending(propertyToCheck);
            // Basic array
            if (!propertyToCheck || propertyToCheck === '-' || propertyToCheck === '') {
                // Should we use the simple pipes?
                result = !desc ? values.sort() : values.sort().reverse();
            } else {
                // complex array sorting by property    
                let property: string = !desc
                    ? propertyToCheck
                    : propertyToCheck.substr(1);

                result = OrderByArrayHelper(values, property, desc);
            }
        } else {
            // complex array sorting by multiple properties
            result = OrderByMultiplePropertiesHelper(values, args);
        }
        return result;
    }


}
