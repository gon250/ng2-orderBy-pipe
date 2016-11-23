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
var order_by_pipe_1 = require('./pipes/order-by.pipe');
var order_by_string_pipe_1 = require('./pipes/order-by-string.pipe');
var order_by_number_pipe_1 = require('./pipes/order-by-number.pipe');
var order_by_date_pipe_1 = require('./pipes/order-by-date.pipe');
var order_by_object_array_pipe_1 = require('./pipes/order-by-object-array.pipe');
var NgOrderByModule = (function () {
    function NgOrderByModule() {
    }
    NgOrderByModule = __decorate([
        core_1.NgModule({
            declarations: [
                order_by_string_pipe_1.OrderByString,
                order_by_number_pipe_1.OrderByNumber,
                order_by_date_pipe_1.OrderByDate,
                order_by_object_array_pipe_1.OrderByArrayObject,
                order_by_pipe_1.OrderBy
            ],
            exports: [
                order_by_string_pipe_1.OrderByString,
                order_by_number_pipe_1.OrderByNumber,
                order_by_date_pipe_1.OrderByDate,
                order_by_object_array_pipe_1.OrderByArrayObject,
                order_by_pipe_1.OrderBy
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], NgOrderByModule);
    return NgOrderByModule;
}());
exports.NgOrderByModule = NgOrderByModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsOEJBQXdCLHVCQUF1QixDQUFDLENBQUE7QUFDaEQscUNBQThCLDhCQUE4QixDQUFDLENBQUE7QUFDN0QscUNBQThCLDhCQUE4QixDQUFDLENBQUE7QUFDN0QsbUNBQTRCLDRCQUE0QixDQUFDLENBQUE7QUFDekQsMkNBQW1DLG9DQUFvQyxDQUFDLENBQUE7QUFrQnhFO0lBQUE7SUFBK0IsQ0FBQztJQWhCaEM7UUFBQyxlQUFRLENBQUM7WUFDTixZQUFZLEVBQUU7Z0JBQ1Ysb0NBQWE7Z0JBQ2Isb0NBQWE7Z0JBQ2IsZ0NBQVc7Z0JBQ1gsK0NBQWtCO2dCQUNsQix1QkFBTzthQUNWO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLG9DQUFhO2dCQUNiLG9DQUFhO2dCQUNiLGdDQUFXO2dCQUNYLCtDQUFrQjtnQkFDbEIsdUJBQU87YUFDVjtTQUNKLENBQUM7O3VCQUFBO0lBQzZCLHNCQUFDO0FBQUQsQ0FBL0IsQUFBZ0MsSUFBQTtBQUFuQix1QkFBZSxrQkFBSSxDQUFBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT3JkZXJCeSB9IGZyb20gJy4vcGlwZXMvb3JkZXItYnkucGlwZSc7XHJcbmltcG9ydCB7IE9yZGVyQnlTdHJpbmcgfSBmcm9tICcuL3BpcGVzL29yZGVyLWJ5LXN0cmluZy5waXBlJztcclxuaW1wb3J0IHsgT3JkZXJCeU51bWJlciB9IGZyb20gJy4vcGlwZXMvb3JkZXItYnktbnVtYmVyLnBpcGUnO1xyXG5pbXBvcnQgeyBPcmRlckJ5RGF0ZSB9IGZyb20gJy4vcGlwZXMvb3JkZXItYnktZGF0ZS5waXBlJztcclxuaW1wb3J0IHsgT3JkZXJCeUFycmF5T2JqZWN0IH0gZnJvbSAnLi9waXBlcy9vcmRlci1ieS1vYmplY3QtYXJyYXkucGlwZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgT3JkZXJCeVN0cmluZyxcclxuICAgICAgICBPcmRlckJ5TnVtYmVyLFxyXG4gICAgICAgIE9yZGVyQnlEYXRlLFxyXG4gICAgICAgIE9yZGVyQnlBcnJheU9iamVjdCxcclxuICAgICAgICBPcmRlckJ5XHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIE9yZGVyQnlTdHJpbmcsXHJcbiAgICAgICAgT3JkZXJCeU51bWJlcixcclxuICAgICAgICBPcmRlckJ5RGF0ZSxcclxuICAgICAgICBPcmRlckJ5QXJyYXlPYmplY3QsXHJcbiAgICAgICAgT3JkZXJCeVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdPcmRlckJ5TW9kdWxlIHsgfVxyXG4iXX0=
