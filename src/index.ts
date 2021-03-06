import { NgModule } from '@angular/core';
import { OrderBy } from './pipes/order-by.pipe';
import { OrderByString } from './pipes/order-by-string.pipe';
import { OrderByNumber } from './pipes/order-by-number.pipe';
import { OrderByDate } from './pipes/order-by-date.pipe';
import { OrderByArrayObject } from './pipes/order-by-object-array.pipe';

@NgModule({
    declarations: [
        OrderByString,
        OrderByNumber,
        OrderByDate,
        OrderByArrayObject,
        OrderBy
    ],
    exports: [
        OrderByString,
        OrderByNumber,
        OrderByDate,
        OrderByArrayObject,
        OrderBy
    ]
})
export class NgOrderByModule { }
