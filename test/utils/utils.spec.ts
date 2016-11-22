import {
    isUndefined,
    isNull,
    isNumber,
    isInteger,
    isString,
    isObject,
    isArray,
    isDate
} from "../../src/utils/utils";

describe("isUndefined test", () => {
    it("Should return true", () => expect(isUndefined(undefined)).toBeTruthy);
    it("Should return false", () => expect(isUndefined("test")).toBeFalsy);
});

describe("isNull test", () => {
    it("Should return true", () => expect(isNull(null)).toBeTruthy);
    it("Should return false", () => expect(isNull("test")).toBeFalsy);
});

describe("isNumber test", () => {
    it("Should return true", () => expect(isNumber(9)).toBeTruthy);
    it("Should return false", () => expect(isNumber("test")).toBeFalsy);
});

describe("isInteger test", () => {
    it("Should return true", () => expect(isInteger(9)).toBeTruthy);
    it("Should return false", () => expect(isInteger(9.5)).toBeFalsy);
});

describe("isString test", () => {
    it("Should return true", () => expect(isString("test")).toBeTruthy);
    it("Should return false", () => expect(isString(8)).toBeFalsy);
});

describe("isObject test", () => {
    it("Should return true", () => expect(isObject({id: 1})).toBeTruthy);
    it("Should return false", () => expect(isObject(8)).toBeFalsy);
});

describe("isArray test", () => {
    it("Should return true", () => expect(isArray([1, 2])).toBeTruthy);
    it("Should return false", () => expect(isArray(8)).toBeFalsy);
});

describe("isDate test", () => {
    it("Should return true", () => expect(isDate("01/01/2016")).toBeTruthy);
    it("Should return false", () => expect(isDate(8)).toBeFalsy);
});