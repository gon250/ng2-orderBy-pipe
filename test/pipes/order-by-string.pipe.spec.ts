import { OrderByString } from "../../src/pipes/order-by-string.pipe";
import * as MESSAGE from '../../src/utils/messages';

describe("OrderByString test", () => {
    let orderByString = new OrderByString();
    let strings = ["a", "b", "d", "q", "h"];

    it("Should return an error when values are null", () => {
        expect(() => orderByString.transform(null)).toThrowError(MESSAGE.ERROR_NULL);
    });

    it("Should return an array when values are not null", () => {
        let result = orderByString.transform(strings);
        expect(result).not.toBeNull();
        expect(result.length === strings.length).toBeTruthy();
    })
});