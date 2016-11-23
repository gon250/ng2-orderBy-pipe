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
var OrderByDate = (function () {
    function OrderByDate() {
    }
    OrderByDate.prototype.transform = function (values, filter) {
        if (utils_1.isNull(values)) {
            throw new Error(MESSAGE.ERROR_NULL);
        }
        if (utils_1.isValidOrderType(filter)) {
            throw new Error(MESSAGE.ERROR_FILTER);
        }
        return helper_pipe_1.OrderByDateHelper(values, filter === '-');
    };
    OrderByDate = __decorate([
        core_1.Pipe({
            name: 'orderByDate'
        }), 
        __metadata('design:paramtypes', [])
    ], OrderByDate);
    return OrderByDate;
}());
exports.OrderByDate = OrderByDate;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVzL29yZGVyLWJ5LWRhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW9DLGVBQWUsQ0FBQyxDQUFBO0FBQ3BELHNCQUF5QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQzFELDRCQUFrQyxzQkFBc0IsQ0FBQyxDQUFBO0FBQ3pELElBQVksT0FBTyxXQUFNLG1CQUFtQixDQUFDLENBQUE7QUFJN0M7SUFBQTtJQU1BLENBQUM7SUFMRywrQkFBUyxHQUFULFVBQVUsTUFBYSxFQUFFLE1BQWU7UUFDcEMsRUFBRSxDQUFDLENBQUMsY0FBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQUMsQ0FBQztRQUM1RCxFQUFFLENBQUMsQ0FBQyx3QkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQyxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUFDLENBQUM7UUFDeEUsTUFBTSxDQUFDLCtCQUFpQixDQUFDLE1BQU0sRUFBRSxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQVJMO1FBQUMsV0FBSSxDQUFDO1lBQ0YsSUFBSSxFQUFFLGFBQWE7U0FDdEIsQ0FBQzs7bUJBQUE7SUFPRixrQkFBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTlksbUJBQVcsY0FNdkIsQ0FBQSIsImZpbGUiOiJwaXBlcy9vcmRlci1ieS1kYXRlLnBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzTnVsbCwgaXNWYWxpZE9yZGVyVHlwZSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgT3JkZXJCeURhdGVIZWxwZXIgfSBmcm9tICcuLi91dGlscy9oZWxwZXItcGlwZSc7XHJcbmltcG9ydCAqIGFzIE1FU1NBR0UgZnJvbSAnLi4vdXRpbHMvbWVzc2FnZXMnO1xyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnb3JkZXJCeURhdGUnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPcmRlckJ5RGF0ZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKHZhbHVlczogYW55W10sIGZpbHRlcj86IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgaWYgKGlzTnVsbCh2YWx1ZXMpKSB7IHRocm93IG5ldyBFcnJvcihNRVNTQUdFLkVSUk9SX05VTEwpOyB9XHJcbiAgICAgICAgaWYgKGlzVmFsaWRPcmRlclR5cGUoZmlsdGVyKSkgeyB0aHJvdyBuZXcgRXJyb3IoTUVTU0FHRS5FUlJPUl9GSUxURVIpOyB9XHJcbiAgICAgICAgcmV0dXJuIE9yZGVyQnlEYXRlSGVscGVyKHZhbHVlcywgZmlsdGVyID09PSAnLScpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
