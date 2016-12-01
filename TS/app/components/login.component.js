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
var auth_service_1 = require('../services/auth.service');
var LoginComponent = (function () {
    function LoginComponent(auth) {
        this.auth = auth;
        this.user = { email: null, password: null };
    }
    LoginComponent.prototype.login = function () {
        if (!this.auth.login(this.user)) {
            this.error = 'Contraseña incorrecta';
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            template: "\n\t\t<p>La tienda es privada</p>\n\t\t<form (ngSubmit)=\"login()\" #loginForm=\"ngForm\">\n\n\t\t\t<div *ngIf=\"error\" class=\"error\">\n\t\t\t\t{{error}}\n\t\t\t</div>\n\n\t\t\t<label>Tu email:</label>\n\t\t\t<input type=\"text\"\n\t\t\t\trequired\n\t\t\t\tautocomplete=\"off\"\n\t\t\t\t[(ngModel)]=\"user.email\"\n\t\t\t\tplaceholder=\"Email\"\n\t\t\t\tname =\"email\"\n\t\t\t>\n\n\t\t\t<label>Contrase\u00F1a</label>\n\t\t\t<input\n\t\t\t\ttype=\"password\"\n\t\t\t\trequired\n\t\t\t\t[(ngModel)]=\"user.password\"\n\t\t\t\tplaceholder=\"Escribe tu contrase\u00F1a\"\n\t\t\t\tname=\"password\">\n\n\t\t\t\t<button type=\"submit\">Ingresar</button>\n\n\t\t</form>\n\t",
            providers: [auth_service_1.AuthService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof auth_service_1.AuthService !== 'undefined' && auth_service_1.AuthService) === 'function' && _a) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map