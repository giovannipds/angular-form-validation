"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var shared_module_1 = require("../shared/shared.module");
var hero_form_template1_component_1 = require("./hero-form-template1.component");
var hero_form_template2_component_1 = require("./hero-form-template2.component");
var HeroFormTemplateModule = (function () {
    function HeroFormTemplateModule() {
    }
    return HeroFormTemplateModule;
}());
HeroFormTemplateModule = __decorate([
    core_1.NgModule({
        imports: [shared_module_1.SharedModule, forms_1.FormsModule],
        declarations: [hero_form_template1_component_1.HeroFormTemplate1Component, hero_form_template2_component_1.HeroFormTemplate2Component],
        exports: [hero_form_template1_component_1.HeroFormTemplate1Component, hero_form_template2_component_1.HeroFormTemplate2Component]
    })
], HeroFormTemplateModule);
exports.HeroFormTemplateModule = HeroFormTemplateModule;
//# sourceMappingURL=hero-form-template.module.js.map