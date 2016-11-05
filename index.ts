import { NgModule } from '@angular/core';

import { OrderByString } from './pipes/order-by-string.pipe';
import { OrderByNumber } from './pipes/order-by-number.pipe';
import { OrderByDate } from './pipes/order-by-date.pipe';

@NgModule({
    exports: [
        OrderByString,
        OrderByNumber,
        OrderByDate
    ]
})
export class NgOrderByModule {}