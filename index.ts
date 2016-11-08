import { NgModule } from '@angular/core';

import { OrderByString } from './pipes/order-by-string.pipe';
import { OrderByNumber } from './pipes/order-by-number.pipe';
import { OrderByDate } from './pipes/order-by-date.pipe';
import { orderByArrayObject } from './pipes/order-by-object-array.pipe'; 

@NgModule({
    declarations: [
        OrderByString,
        OrderByNumber,
        OrderByDate,
        OrderByArrayObject
    ],
    exports: [
        OrderByString,
        OrderByNumber,
        OrderByDate,
        OrderByArrayObject
    ]
})
export class NgOrderByModule {}
