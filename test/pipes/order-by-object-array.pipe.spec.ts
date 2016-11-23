import { OrderByArrayObject } from '../../src/pipes/order-by-object-array.pipe';
import * as MESSAGE from '../../src/utils/messages';

describe('OrderByObjectArrayPipe test', () => {
    let orderByObjectArrayPipe = new OrderByArrayObject();
    let objects = [{ id: 1, name: 'John', dateOfBirth: new Date('07/02/1994') },
    { id: 2, name: 'James', dateOfBirth: new Date('11/11/1989') },
    { id: 3, name: 'Michael', dateOfBirth: new Date('09/12/1990') }];

    it('Should return an error when values are null', () => {
        expect(() =>
        orderByObjectArrayPipe.transform(null, null, null)).toThrowError(MESSAGE.ERROR_NULL);
    });

    it('Should return an array when values are not null', () => {
        let result = orderByObjectArrayPipe.transform(objects, 'id', 'descending');
        expect(result).not.toBeNull();
        expect(result.length === objects.length).toBeTruthy();
    });
});
