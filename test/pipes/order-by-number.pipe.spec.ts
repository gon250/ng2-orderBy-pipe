// import { TestBed } from '@angular/core/testing';
import { OrderByNumber } from '../../src/pipes/order-by-number.pipe';
import * as MESSAGE from '../../src/utils/messages';

describe('OrderByNumberPipe test', () => {
    let orderByNumber = new OrderByNumber();
    let numbers = [1, 4, 2, 3, 19, 10, 5, 6];

    it('Should return an error when values are null', () => {
        expect(() => orderByNumber.transform(null)).toThrowError(MESSAGE.ERROR_NULL);
    });

    it('Should return an array when values are not null', () => {
        let result = orderByNumber.transform(numbers);
        expect(result).not.toBeNull();
        expect(result.length === numbers.length).toBeTruthy();
    });
});
