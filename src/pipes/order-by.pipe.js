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
var helper_pipe_1 = require('../utils/helper-pipe');
var utils_1 = require('../utils/utils');
var OrderBy = (function () {
    function OrderBy() {
    }
    /********************************************************************
        // Order simple list ascending
         *ngFor="let user of usersList | orderBy
    
         // Order simple list descending
         *ngFor="let user of usersList | orderBy:'-'
    
         // Order complex list by userId descending
        *ngFor="let user of usersList | orderBy:'-userId'
    
        // Order complex list by userId descending and memberId asc
        *ngFor="let user of usersList | orderBy:['-userId','memberId']
        
    ********************************************************************/
    OrderBy.prototype.transform = function (values, args) {
        if (args === void 0) { args = ['']; }
        var result;
        // Single propery to sort.
        if (!utils_1.isArray(args) || (utils_1.isArray(args) && args.length === 1)) {
            var propertyToCheck = !utils_1.isArray(args) ? args.toString() : args[0];
            var desc = utils_1.isDescending(propertyToCheck);
            // Basic array
            if (!propertyToCheck || propertyToCheck === '-' || propertyToCheck === '') {
                // Should we use the simple pipes?
                result = !desc ? values.sort() : values.sort().reverse();
            }
            else {
                // complex array sorting by property    
                var property = !desc
                    ? propertyToCheck
                    : propertyToCheck.substr(1);
                result = helper_pipe_1.OrderByArrayHelper(values, property, desc);
            }
        }
        else {
            // complex array sorting by multiple properties
            result = helper_pipe_1.OrderByMultiplePropertiesHelper(values, args);
        }
        return result;
    };
    OrderBy = __decorate([
        core_1.Pipe({
            name: 'orderBy'
        }), 
        __metadata('design:paramtypes', [])
    ], OrderBy);
    return OrderBy;
}());
exports.OrderBy = OrderBy;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVzL29yZGVyLWJ5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvQyxlQUFlLENBQUMsQ0FBQTtBQUNwRCw0QkFBb0Usc0JBQXNCLENBQUMsQ0FBQTtBQUMzRixzQkFBc0MsZ0JBQWdCLENBQUMsQ0FBQTtBQUl2RDtJQUFBO0lBNENBLENBQUM7SUEzQ0c7Ozs7Ozs7Ozs7Ozs7eUVBYXFFO0lBQ3JFLDJCQUFTLEdBQVQsVUFBVSxNQUFhLEVBQUUsSUFBcUI7UUFBckIsb0JBQXFCLEdBQXJCLFFBQWtCLEVBQUUsQ0FBQztRQUUxQyxJQUFJLE1BQWEsQ0FBQztRQUVsQiwwQkFBMEI7UUFDMUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFPLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFekQsSUFBSSxlQUFlLEdBQVcsQ0FBQyxlQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RSxJQUFJLElBQUksR0FBWSxvQkFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ2xELGNBQWM7WUFDZCxFQUFFLENBQUMsQ0FBQyxDQUFDLGVBQWUsSUFBSSxlQUFlLEtBQUssR0FBRyxJQUFJLGVBQWUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4RSxrQ0FBa0M7Z0JBQ2xDLE1BQU0sR0FBRyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzdELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSix3Q0FBd0M7Z0JBQ3hDLElBQUksUUFBUSxHQUFXLENBQUMsSUFBSTtzQkFDdEIsZUFBZTtzQkFDZixlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVoQyxNQUFNLEdBQUcsZ0NBQWtCLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN4RCxDQUFDO1FBQ0wsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osK0NBQStDO1lBQy9DLE1BQU0sR0FBRyw2Q0FBK0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0QsQ0FBQztRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQTVDTDtRQUFDLFdBQUksQ0FBQztZQUNGLElBQUksRUFBRSxTQUFTO1NBQ2xCLENBQUM7O2VBQUE7SUE2Q0YsY0FBQztBQUFELENBNUNBLEFBNENDLElBQUE7QUE1Q1ksZUFBTyxVQTRDbkIsQ0FBQSIsImZpbGUiOiJwaXBlcy9vcmRlci1ieS5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPcmRlckJ5QXJyYXlIZWxwZXIsIE9yZGVyQnlNdWx0aXBsZVByb3BlcnRpZXNIZWxwZXIgfSBmcm9tICcuLi91dGlscy9oZWxwZXItcGlwZSc7XHJcbmltcG9ydCB7IGlzRGVzY2VuZGluZywgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ29yZGVyQnknXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPcmRlckJ5IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAgICAvLyBPcmRlciBzaW1wbGUgbGlzdCBhc2NlbmRpbmdcclxuICAgICAgICAgKm5nRm9yPVwibGV0IHVzZXIgb2YgdXNlcnNMaXN0IHwgb3JkZXJCeSAgIFxyXG4gICAgXHJcbiAgICAgICAgIC8vIE9yZGVyIHNpbXBsZSBsaXN0IGRlc2NlbmRpbmdcclxuICAgICAgICAgKm5nRm9yPVwibGV0IHVzZXIgb2YgdXNlcnNMaXN0IHwgb3JkZXJCeTonLSdcclxuICAgIFxyXG4gICAgICAgICAvLyBPcmRlciBjb21wbGV4IGxpc3QgYnkgdXNlcklkIGRlc2NlbmRpbmdcclxuICAgICAgICAqbmdGb3I9XCJsZXQgdXNlciBvZiB1c2Vyc0xpc3QgfCBvcmRlckJ5OictdXNlcklkJ1xyXG4gICAgXHJcbiAgICAgICAgLy8gT3JkZXIgY29tcGxleCBsaXN0IGJ5IHVzZXJJZCBkZXNjZW5kaW5nIGFuZCBtZW1iZXJJZCBhc2NcclxuICAgICAgICAqbmdGb3I9XCJsZXQgdXNlciBvZiB1c2Vyc0xpc3QgfCBvcmRlckJ5OlsnLXVzZXJJZCcsJ21lbWJlcklkJ10gXHJcbiAgICAgICAgXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIHRyYW5zZm9ybSh2YWx1ZXM6IGFueVtdLCBhcmdzOiBzdHJpbmdbXSA9IFsnJ10pOiBhbnlbXSB7IC8vIERlZmF1bHQgc29ydCBhc2NlbmRpbmdcclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55W107XHJcblxyXG4gICAgICAgIC8vIFNpbmdsZSBwcm9wZXJ5IHRvIHNvcnQuXHJcbiAgICAgICAgaWYgKCFpc0FycmF5KGFyZ3MpIHx8IChpc0FycmF5KGFyZ3MpICYmIGFyZ3MubGVuZ3RoID09PSAxKSkge1xyXG5cclxuICAgICAgICAgICAgbGV0IHByb3BlcnR5VG9DaGVjazogc3RyaW5nID0gIWlzQXJyYXkoYXJncykgPyBhcmdzLnRvU3RyaW5nKCkgOiBhcmdzWzBdO1xyXG4gICAgICAgICAgICBsZXQgZGVzYzogYm9vbGVhbiA9IGlzRGVzY2VuZGluZyhwcm9wZXJ0eVRvQ2hlY2spO1xyXG4gICAgICAgICAgICAvLyBCYXNpYyBhcnJheVxyXG4gICAgICAgICAgICBpZiAoIXByb3BlcnR5VG9DaGVjayB8fCBwcm9wZXJ0eVRvQ2hlY2sgPT09ICctJyB8fCBwcm9wZXJ0eVRvQ2hlY2sgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTaG91bGQgd2UgdXNlIHRoZSBzaW1wbGUgcGlwZXM/XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAhZGVzYyA/IHZhbHVlcy5zb3J0KCkgOiB2YWx1ZXMuc29ydCgpLnJldmVyc2UoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbXBsZXggYXJyYXkgc29ydGluZyBieSBwcm9wZXJ0eSAgICBcclxuICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eTogc3RyaW5nID0gIWRlc2NcclxuICAgICAgICAgICAgICAgICAgICA/IHByb3BlcnR5VG9DaGVja1xyXG4gICAgICAgICAgICAgICAgICAgIDogcHJvcGVydHlUb0NoZWNrLnN1YnN0cigxKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBPcmRlckJ5QXJyYXlIZWxwZXIodmFsdWVzLCBwcm9wZXJ0eSwgZGVzYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjb21wbGV4IGFycmF5IHNvcnRpbmcgYnkgbXVsdGlwbGUgcHJvcGVydGllc1xyXG4gICAgICAgICAgICByZXN1bHQgPSBPcmRlckJ5TXVsdGlwbGVQcm9wZXJ0aWVzSGVscGVyKHZhbHVlcywgYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=
