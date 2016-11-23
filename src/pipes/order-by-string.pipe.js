"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var utils_1 = require('../utils/utils');
var helper_pipe_1 = require('../utils/helper-pipe');
var MESSAGE = require('../utils/messages');
var OrderByString = (function () {
    function OrderByString() {
    }
    OrderByString.prototype.transform = function (values, filter) {
        if (utils_1.isNull(values)) {
            throw new Error(MESSAGE.ERROR_NULL);
        }
        if (utils_1.isValidOrderType(filter)) {
            throw new Error(MESSAGE.ERROR_FILTER);
        }
        return helper_pipe_1.OrderByStringHelper(values, filter === '-');
    };
    OrderByString = __decorate([
        core_1.Pipe({
            name: 'orderByString'
        }), 
        __metadata('design:paramtypes', [])
    ], OrderByString);
    return OrderByString;
}());
exports.OrderByString = OrderByString;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVzL29yZGVyLWJ5LXN0cmluZy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0MsZUFBZSxDQUFDLENBQUE7QUFDcEQsc0JBQXlDLGdCQUFnQixDQUFDLENBQUE7QUFDMUQsNEJBQW9DLHNCQUFzQixDQUFDLENBQUE7QUFDM0QsSUFBWSxPQUFPLFdBQU0sbUJBQW1CLENBQUMsQ0FBQTtBQUk3QztJQUFBO0lBTUEsQ0FBQztJQUxHLGlDQUFTLEdBQVQsVUFBVSxNQUFnQixFQUFFLE1BQWU7UUFDdkMsRUFBRSxDQUFDLENBQUMsY0FBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQUMsQ0FBQztRQUM1RCxFQUFFLENBQUMsQ0FBQyx3QkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQyxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUFDLENBQUM7UUFDeEUsTUFBTSxDQUFDLGlDQUFtQixDQUFDLE1BQU0sRUFBRSxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQVJMO1FBQUMsV0FBSSxDQUFDO1lBQ0YsSUFBSSxFQUFFLGVBQWU7U0FDeEIsQ0FBQzs7cUJBQUE7SUFPRixvQkFBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTlkscUJBQWEsZ0JBTXpCLENBQUEiLCJmaWxlIjoicGlwZXMvb3JkZXItYnktc3RyaW5nLnBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzTnVsbCwgaXNWYWxpZE9yZGVyVHlwZSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgT3JkZXJCeVN0cmluZ0hlbHBlciB9IGZyb20gJy4uL3V0aWxzL2hlbHBlci1waXBlJztcclxuaW1wb3J0ICogYXMgTUVTU0FHRSBmcm9tICcuLi91dGlscy9tZXNzYWdlcyc7XHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdvcmRlckJ5U3RyaW5nJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgT3JkZXJCeVN0cmluZyBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKHZhbHVlczogc3RyaW5nW10sIGZpbHRlcj86IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuICAgICAgICBpZiAoaXNOdWxsKHZhbHVlcykpIHsgdGhyb3cgbmV3IEVycm9yKE1FU1NBR0UuRVJST1JfTlVMTCk7IH1cclxuICAgICAgICBpZiAoaXNWYWxpZE9yZGVyVHlwZShmaWx0ZXIpKSB7IHRocm93IG5ldyBFcnJvcihNRVNTQUdFLkVSUk9SX0ZJTFRFUik7IH1cclxuICAgICAgICByZXR1cm4gT3JkZXJCeVN0cmluZ0hlbHBlcih2YWx1ZXMsIGZpbHRlciA9PT0gJy0nKTtcclxuICAgIH1cclxufVxyXG5cclxuIl19
