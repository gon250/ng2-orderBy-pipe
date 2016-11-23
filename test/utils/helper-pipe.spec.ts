import {
    OrderByArrayHelper,
    OrderByDateHelper,
    OrderByNumberHelper,
    OrderByStringHelper
} from '../../src/utils/helper-pipe';

const DESCENDING = 'descending';

describe('OrderByDateHelper Test', () => {
    let dates = [new Date('01/01/2017'), new Date('01/01/2016'), new Date('12/31/2016')];
    let stringAsDates = ['01/01/2017', '09/12/2004', '11/11/2009'];

    it('Should return empty', () => {
        let result = OrderByDateHelper([]);
        expect(result).not.toBeNull();
        expect(result.length).toBe(0);
    });

    it('Should be order descending', () => {
        let result = OrderByDateHelper(dates, DESCENDING);

        expect(result).not.toBeNull();
        expect(result[0].getTime()).toBeLessThan(result[1].getTime());
        expect(result[1].getTime()).toBeLessThan(result[2].getTime());
    });

    it('Should be order ascending', () => {
        let result = OrderByDateHelper(dates);

        expect(result).not.toBeNull();
        expect(result[0].getTime()).toBeGreaterThan(result[1].getTime());
        expect(result[1].getTime()).toBeGreaterThan(result[2].getTime());
    });

    it('Should be order descending with dates as string values', () => {
        let result = OrderByDateHelper(stringAsDates, DESCENDING);

        expect(result).not.toBeNull();
        expect(new Date(result[0]).getTime()).toBeLessThan(new Date(result[1]).getTime());
        expect(new Date(result[1]).getTime()).toBeLessThan(new Date(result[2]).getTime());
    });

    it('Should be order ascending with dates as string values', () => {
        let result = OrderByDateHelper(stringAsDates);

        expect(result).not.toBeNull();
        expect(new Date(result[0]).getTime()).toBeGreaterThan(new Date(result[1]).getTime());
        expect(new Date(result[1]).getTime()).toBeGreaterThan(new Date(result[2]).getTime());
    });

});

describe('OrderByNumber Test', () => {
    let numbers = [1, 4, 2, 5, 6, 12, 1];
    it('Should return empty', () => {
        let result = OrderByNumberHelper([]);
        expect(result).not.toBeNull();
        expect(result.length).toBe(0);
    });

    it('Should be order descending', () => {
        let result = OrderByNumberHelper(numbers, DESCENDING);

        expect(result).not.toBeNull();
        for (let i = 0; i < result.length - 1; i++) {
            expect(result[i]).toBeGreaterThanOrEqual(result[i + 1]);
        }
    });

    it('Should be order ascending', () => {
        let result = OrderByNumberHelper(numbers);

        expect(result).not.toBeNull();
        for (let i = 0; i < result.length - 1; i++) {
            expect(result[i]).toBeLessThanOrEqual(result[i + 1]);
        }
    });
});

describe('OrderByString Test', () => {
    let strings = ['A', 'C', 'J', 'W', 'T', 'I'];
    it('Should return empty', () => {
        let result = OrderByStringHelper([]);
        expect(result).not.toBeNull();
        expect(result.length).toBe(0);
    });

    it('Should be order descending', () => {
        let result = OrderByStringHelper(strings, DESCENDING);

        expect(result).not.toBeNull();
        for (let i = 0; i < result.length - 1; i++) {
            expect(result[i] > result[i + 1]).toBeTruthy();
        }
    });

    it('Should be order ascending', () => {
        let result = OrderByStringHelper(strings);

        expect(result).not.toBeNull();
        for (let i = 0; i < result.length - 1; i++) {
            expect(result[i] < result[i + 1]).toBeTruthy();
        }
    });
});

describe('OrderByArray Test', () => {
    let objects = [{ id: 1, name: 'John', dateOfBirth: new Date('07/02/1994') },
    { id: 2, name: 'James', dateOfBirth: new Date('11/11/1989') },
    { id: 3, name: 'Michael', dateOfBirth: new Date('09/12/1990') }];

    let compare = function (data, prop, descending) {
        for (let i = 0; i < data.length - 1; i++) {
            let actual = data[i];
            let next = data[i + 1];
            if (descending) {
                expect(actual[prop] > next[prop]).toBeTruthy();
            } else {
                expect(actual[prop] < next[prop]).toBeTruthy();
            }
        }
    };

    it('Should return empty', () => {
        let result = OrderByArrayHelper([], '', false);
        expect(result).not.toBeNull();
        expect(result.length).toBe(0);
    });

    it('Should be order descending by number', () => {
        let result = OrderByArrayHelper(objects, 'id', true);

        expect(result).not.toBeNull();
        compare(result, 'id', true);
    });

    it('Should be order ascending by number', () => {
        let result = OrderByArrayHelper(objects, 'id', false);

        expect(result).not.toBeNull();
        compare(result, 'id', false);
    });

    it('Should be order descending by string', () => {
        let result = OrderByArrayHelper(objects, 'name', true);

        expect(result).not.toBeNull();
        compare(result, 'name', true);
    });

    it('Should be order ascending by string', () => {
        let result = OrderByArrayHelper(objects, 'name', false);

        expect(result).not.toBeNull();
        compare(result, 'name', false);
    });

    it('Should be order descending by date', () => {
        let result = OrderByArrayHelper(objects, 'dateOfBirth', true);

        expect(result).not.toBeNull();
        compare(result, 'dateOfBirth', true);
    });

    it('Should be order ascending by date', () => {
        let result = OrderByArrayHelper(objects, 'dateOfBirth', false);

        expect(result).not.toBeNull();
        compare(result, 'dateOfBirth', false);
    });
});
