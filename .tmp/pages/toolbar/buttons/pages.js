var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
export var ButtonsPage = (function () {
    function ButtonsPage(platform) {
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
    }
    ButtonsPage.prototype.ionViewWillEnter = function () {
        console.log('enter');
        document.getElementById('md-tabs-icon-text').style.display = "block";
        document.getElementById('md-only').style.display = "none";
    };
    ButtonsPage.prototype.ionViewWillLeave = function () {
        document.getElementById('md-tabs-icon-text').style.display = "none";
        document.getElementById('md-only').style.display = "block";
    };
    ButtonsPage = __decorate([
        Component({
            templateUrl: 'template.html'
        }), 
        __metadata('design:paramtypes', [Platform])
    ], ButtonsPage);
    return ButtonsPage;
}());
