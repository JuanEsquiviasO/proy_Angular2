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
var api_services_1 = require('../services/api.services');
var CoursesComponent = (function () {
    function CoursesComponent(ApiService) {
        this.ApiService = ApiService;
        this.title = 'Cursos disponibles';
    }
    CoursesComponent.prototype.getCourses = function () {
        var _this = this;
        this.ApiService.getCourses().then(function (courses) { return _this.courses = courses; });
    };
    CoursesComponent.prototype.ngOnInit = function () {
        this.getCourses();
    };
    CoursesComponent = __decorate([
        core_1.Component({
            selector: 'courses',
            template: "\n    <h2>{{title}}</h2>\n    <div class=\"courses_list\">\n      <coursebox\n        [course]=\"course_info\"\n        *ngFor = \"let course_info of courses\"\n      ></coursebox>\n    </div>\n    <cart></cart>\n  ",
            providers: [api_services_1.ApiService]
        }), 
        __metadata('design:paramtypes', [api_services_1.ApiService])
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.component.js.map