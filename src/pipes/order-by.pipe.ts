import { Pipe, PipeTransform } from '@angular/core';
import { OrderByArrayObject } from './order-by-object-array.pipe';
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
        let objectPipe = new OrderByArrayObject();

        // Single propery to sort.
        if (!Array.isArray(args) || (Array.isArray(args) && args.length === 1)) {

            let propertyToCheck: string = !Array.isArray(args) ? args : args[0];
            let desc: boolean = this.isDescending(propertyToCheck);

            // Basic array
            if (!propertyToCheck || propertyToCheck === '-' || propertyToCheck === '') {
                // Should we use the simple pipes?
                result = !desc ? values.sort() : values.sort().reverse();
            } else {
                // complex array sorting by property    
                let property: string = !desc
                    ? propertyToCheck
                    : propertyToCheck.substr(1);

                result = objectPipe.OrderByArray(values, property, desc);
            }
        } else {
            // complex array sorting by multiple properties

            // Loop over property of the array in order and sort
            args.forEach(item => {
                // let desc: boolean = this.isDescending(item);
                // let property: string = !desc ? item : item.substr(1);
                // TODO: Implement code above
            });

        }
        return result;
    }

    isDescending(property: string): boolean {
        return property.substr(0, 1) === '-';
    }
}
