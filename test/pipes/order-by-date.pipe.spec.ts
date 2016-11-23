// import { TestBed } from '@angular/core/testing';
import { OrderByDate } from '../../src/pipes/order-by-date.pipe';
import * as MESSAGE from '../../src/utils/messages';

describe('OrdeByDatePipe test', () => {
    let orderByDate = new OrderByDate();
    let dates = new Array<Date>();
    dates.push(new Date('01/01/2017'));
    dates.push(new Date('02/01/2017'));
    dates.push(new Date('03/01/2017'));
    dates.push(new Date('04/01/2016'));

    it('Should return an error when values are null', () => {
        expect(() =>  orderByDate.transform(null) ).toThrowError(MESSAGE.ERROR_NULL);
    });

    it('Should return an array when values are not null', () => {
        let result = orderByDate.transform(dates);
        expect(result).not.toBeNull();
        expect(result.length === 4).toBeTruthy();

        for (let i = 0; i < result.length - 1; i++) {
            expect(result[i].getTime()).toBeGreaterThan(result[i + 1].getTime());
        }
    });
});
