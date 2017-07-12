"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable: member-ordering */
var core_1 = require("@angular/core");
var hero_1 = require("../shared/hero");
var HeroFormTemplate1Component = (function () {
    function HeroFormTemplate1Component() {
        this.powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];
        this.hero = new hero_1.Hero(18, 'Dr. WhatIsHisWayTooLongName', this.powers[0], 'Dr. What');
        this.submitted = false;
        // Reset the form with a new hero AND restore 'pristine' class state
        // by toggling 'active' flag which causes the form
        // to be removed/re-added in a tick via NgIf
        // TODO: Workaround until NgForm has a reset method (#6822)
        this.active = true;
    }
    HeroFormTemplate1Component.prototype.onSubmit = function () {
        this.submitted = true;
    };
    HeroFormTemplate1Component.prototype.addHero = function () {
        var _this = this;
        this.hero = new hero_1.Hero(42, '', '');
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    return HeroFormTemplate1Component;
}());
HeroFormTemplate1Component = __decorate([
    core_1.Component({
        selector: 'hero-form-template1',
        templateUrl: './hero-form-template1.component.html'
    })
], HeroFormTemplate1Component);
exports.HeroFormTemplate1Component = HeroFormTemplate1Component;
//# sourceMappingURL=hero-form-template1.component.js.map