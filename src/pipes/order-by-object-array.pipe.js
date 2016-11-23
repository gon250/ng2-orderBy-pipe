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
var OrderByArrayObject = (function () {
    function OrderByArrayObject() {
    }
    OrderByArrayObject.prototype.transform = function (values, orderType, filter) {
        if (utils_1.isNull(values)) {
            throw new Error(MESSAGE.ERROR_NULL);
        }
        if (utils_1.isValidOrderType(filter)) {
            throw new Error(MESSAGE.ERROR_FILTER);
        }
        return helper_pipe_1.OrderByArrayHelper(values, orderType, filter === '-');
    };
    OrderByArrayObject = __decorate([
        core_1.Pipe({
            name: 'OrderByArrayObject'
        }), 
        __metadata('design:paramtypes', [])
    ], OrderByArrayObject);
    return OrderByArrayObject;
}());
exports.OrderByArrayObject = OrderByArrayObject;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVzL29yZGVyLWJ5LW9iamVjdC1hcnJheS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0MsZUFBZSxDQUFDLENBQUE7QUFDcEQsc0JBQXlDLGdCQUFnQixDQUFDLENBQUE7QUFDMUQsNEJBQW1DLHNCQUFzQixDQUFDLENBQUE7QUFDMUQsSUFBWSxPQUFPLFdBQU0sbUJBQW1CLENBQUMsQ0FBQTtBQUk3QztJQUFBO0lBTUEsQ0FBQztJQUxHLHNDQUFTLEdBQVQsVUFBVSxNQUFhLEVBQUUsU0FBaUIsRUFBRSxNQUFlO1FBQ3ZELEVBQUUsQ0FBQyxDQUFDLGNBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQyxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUFDLENBQUM7UUFDNUQsRUFBRSxDQUFDLENBQUMsd0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFBQyxDQUFDO1FBQ3hFLE1BQU0sQ0FBQyxnQ0FBa0IsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBUkw7UUFBQyxXQUFJLENBQUM7WUFDRixJQUFJLEVBQUUsb0JBQW9CO1NBQzdCLENBQUM7OzBCQUFBO0lBT0YseUJBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQU5ZLDBCQUFrQixxQkFNOUIsQ0FBQSIsImZpbGUiOiJwaXBlcy9vcmRlci1ieS1vYmplY3QtYXJyYXkucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNOdWxsLCBpc1ZhbGlkT3JkZXJUeXBlIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBPcmRlckJ5QXJyYXlIZWxwZXIgfSBmcm9tICcuLi91dGlscy9oZWxwZXItcGlwZSc7XHJcbmltcG9ydCAqIGFzIE1FU1NBR0UgZnJvbSAnLi4vdXRpbHMvbWVzc2FnZXMnO1xyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnT3JkZXJCeUFycmF5T2JqZWN0J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgT3JkZXJCeUFycmF5T2JqZWN0IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0odmFsdWVzOiBhbnlbXSwgb3JkZXJUeXBlOiBzdHJpbmcsIGZpbHRlcj86IHN0cmluZyk6IGFueVtdIHtcclxuICAgICAgICBpZiAoaXNOdWxsKHZhbHVlcykpIHsgdGhyb3cgbmV3IEVycm9yKE1FU1NBR0UuRVJST1JfTlVMTCk7IH1cclxuICAgICAgICBpZiAoaXNWYWxpZE9yZGVyVHlwZShmaWx0ZXIpKSB7IHRocm93IG5ldyBFcnJvcihNRVNTQUdFLkVSUk9SX0ZJTFRFUik7IH1cclxuICAgICAgICByZXR1cm4gT3JkZXJCeUFycmF5SGVscGVyKHZhbHVlcywgb3JkZXJUeXBlLCBmaWx0ZXIgPT09ICctJyk7XHJcbiAgICB9XHJcbn1cclxuIl19
