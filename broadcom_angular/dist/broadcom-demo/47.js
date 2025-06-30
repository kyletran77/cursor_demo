"use strict";
(self["webpackChunkbroadcom_demo"] = self["webpackChunkbroadcom_demo"] || []).push([[47],{

/***/ 5047:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);




function HomeComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "div", 31)(3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Learn More \u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const solution_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", solution_r2.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", solution_r2.icon, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](solution_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](solution_r2.description);
  }
}
function HomeComponent_div_76_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const feature_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", feature_r5, " ");
  }
}
function HomeComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "div", 34)(2, "div", 35)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_div_76_span_10_Template, 2, 1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r3.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", product_r3.features);
  }
}
let HomeComponent = /*#__PURE__*/(() => {
  class HomeComponent {
    constructor() {
      this.solutions = [{
        title: 'Enterprise Software',
        description: 'Comprehensive distributed software solutions for modern enterprises including DevOps, automation, and management tools.',
        icon: 'ES',
        color: 'var(--broadcom-red)'
      }, {
        title: 'Mainframe Software',
        description: 'Complete mainframe solutions including automation, management, DevOps, and security for mission-critical systems.',
        icon: 'MF',
        color: 'var(--broadcom-blue)'
      }, {
        title: 'Security Solutions',
        description: 'Integrated cyber defense solutions providing comprehensive threat protection and compliance for enterprises.',
        icon: 'SEC',
        color: '#28a745'
      }];
      this.featuredProducts = [{
        name: 'CA Workload Automation DE',
        category: 'Automation',
        description: 'Comprehensive workload automation solution for managing complex business processes across distributed environments.',
        features: ['Cross-platform Support', 'Event-driven Scheduling', 'REST API', 'Scalable Architecture']
      }, {
        name: 'VMware vSphere',
        category: 'Virtualization',
        description: 'Industry-leading virtualization platform that transforms data centers into simplified cloud computing infrastructures.',
        features: ['High Availability', 'Resource Management', 'Security', 'Performance Optimization']
      }, {
        name: 'Symantec Endpoint Security',
        category: 'Security',
        description: 'Advanced threat protection that combines multiple layers of protection to secure endpoints against sophisticated attacks.',
        features: ['Machine Learning', 'Behavioral Analysis', 'Cloud Management', 'Zero-day Protection']
      }, {
        name: 'CA API Gateway',
        category: 'API Management',
        description: 'Secure, manage, and monitor APIs across your enterprise with comprehensive gateway capabilities.',
        features: ['API Security', 'Rate Limiting', 'Analytics', 'Developer Portal']
      }];
    }
    static {
      this.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 89,
        vars: 2,
        consts: [[1, "hero"], [1, "container"], [1, "row"], [1, "col-6"], [1, "hero-content", "fade-in-up"], [1, "hero-subtitle"], [1, "hero-buttons"], ["routerLink", "/solutions", 1, "btn", "btn-primary"], ["href", "#", 1, "btn", "btn-secondary"], [1, "hero-image"], [1, "hero-graphic"], [1, "floating-card", "card-1"], [1, "floating-card", "card-2"], [1, "floating-card", "card-3"], [1, "stats", "py-5"], [1, "col-3", "text-center"], [1, "stat-item"], [1, "stat-number"], [1, "solutions-preview", "py-5"], [1, "text-center", "mb-5"], [1, "section-subtitle"], ["class", "col-4", 4, "ngFor", "ngForOf"], [1, "featured-products", "py-5", 2, "background", "var(--broadcom-light-gray)"], ["class", "col-6", 4, "ngFor", "ngForOf"], [1, "cta", "py-5"], [1, "cta-content", "text-center"], [1, "cta-buttons"], ["href", "#", 1, "btn", "btn-primary"], ["href", "#", 1, "btn", "btn-outline"], [1, "col-4"], [1, "solution-card", "card"], [1, "solution-icon"], [1, "icon-circle"], ["href", "#", 1, "learn-more"], [1, "product-card"], [1, "product-header"], [1, "product-category"], [1, "product-features"], ["class", "feature-tag", 4, "ngFor", "ngForOf"], [1, "feature-tag"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Powering Enterprise Innovation");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Leading provider of enterprise software solutions for mainframe, distributed, and cloud infrastructure environments. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Explore Solutions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Watch Demo");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3)(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Enterprise Software");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "CA Technologies");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12)(23, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "VMware Solutions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cloud Infrastructure");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13)(28, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Security Solutions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Symantec Protection");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section", 14)(33, "div", 1)(34, "div", 2)(35, "div", 15)(36, "div", 16)(37, "h2", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "$8.9B");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Annual Revenue");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15)(42, "div", 16)(43, "h2", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "20,000+");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Global Employees");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15)(48, "div", 16)(49, "h2", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "220+");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Countries Served");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 15)(54, "div", 16)(55, "h2", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "95%");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Fortune 100 Trust Us");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "section", 18)(60, "div", 1)(61, "div", 19)(62, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Enterprise Solutions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Comprehensive software solutions to accelerate digital transformation ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, HomeComponent_div_67_Template, 11, 5, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "section", 22)(69, "div", 1)(70, "div", 19)(71, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Featured Products");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Industry-leading software products trusted by enterprises worldwide ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, HomeComponent_div_76_Template, 11, 4, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "section", 24)(78, "div", 1)(79, "div", 25)(80, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Ready to Transform Your Enterprise?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Join thousands of organizations that trust Broadcom for their critical infrastructure needs.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 26)(85, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Get Started");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Contact Sales");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.solutions);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.featuredProducts);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
        styles: [".hero[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--broadcom-light-gray) 0%, var(--broadcom-white) 100%);\n  padding: 6rem 0;\n  min-height: 80vh;\n  display: flex;\n  align-items: center;\n}\n\n.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  margin-bottom: 1.5rem;\n  color: var(--broadcom-black);\n}\n\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: var(--broadcom-dark-gray);\n  margin-bottom: 2rem;\n  line-height: 1.6;\n}\n\n.hero-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n\n.hero-image[_ngcontent-%COMP%] {\n  position: relative;\n  height: 500px;\n}\n\n.hero-graphic[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.floating-card[_ngcontent-%COMP%] {\n  position: absolute;\n  background: var(--broadcom-white);\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n  animation: _ngcontent-%COMP%_float 3s ease-in-out infinite;\n}\n\n.card-1[_ngcontent-%COMP%] {\n  top: 10%;\n  left: 10%;\n  animation-delay: 0s;\n}\n\n.card-2[_ngcontent-%COMP%] {\n  top: 40%;\n  right: 10%;\n  animation-delay: 1s;\n}\n\n.card-3[_ngcontent-%COMP%] {\n  bottom: 10%;\n  left: 20%;\n  animation-delay: 2s;\n}\n\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-20px);\n  }\n}\n.stats[_ngcontent-%COMP%] {\n  background: var(--broadcom-black);\n  color: var(--broadcom-white);\n}\n\n.stat-number[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 700;\n  color: var(--broadcom-red);\n  margin-bottom: 0.5rem;\n}\n\n.stat-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--broadcom-gray);\n}\n\n.solution-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2.5rem 1.5rem;\n  height: 100%;\n}\n\n.solution-icon[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n\n.icon-circle[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  font-size: 2rem;\n  color: white;\n  font-weight: bold;\n}\n\n.learn-more[_ngcontent-%COMP%] {\n  color: var(--broadcom-red);\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.learn-more[_ngcontent-%COMP%]:hover {\n  color: var(--broadcom-blue);\n}\n\n.product-card[_ngcontent-%COMP%] {\n  background: var(--broadcom-white);\n  padding: 2rem;\n  border-radius: 8px;\n  margin-bottom: 2rem;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.product-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n\n.product-category[_ngcontent-%COMP%] {\n  background: var(--broadcom-red);\n  color: var(--broadcom-white);\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n\n.product-features[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.feature-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: var(--broadcom-gray);\n  color: var(--broadcom-dark-gray);\n  padding: 0.25rem 0.75rem;\n  border-radius: 15px;\n  font-size: 0.875rem;\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.cta[_ngcontent-%COMP%] {\n  background: var(--broadcom-red);\n  color: var(--broadcom-white);\n}\n\n.cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--broadcom-white);\n  margin-bottom: 1rem;\n}\n\n.cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-bottom: 2rem;\n  opacity: 0.9;\n}\n\n.cta-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.cta[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%] {\n  border-color: var(--broadcom-white);\n  color: var(--broadcom-white);\n}\n\n.cta[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%]:hover {\n  background: var(--broadcom-white);\n  color: var(--broadcom-red);\n}\n\n.section-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: var(--broadcom-dark-gray);\n  max-width: 600px;\n  margin: 0 auto;\n}\n\n@media (max-width: 768px) {\n  .hero[_ngcontent-%COMP%] {\n    padding: 4rem 0;\n    text-align: center;\n  }\n  .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .hero-image[_ngcontent-%COMP%] {\n    margin-top: 3rem;\n    height: 300px;\n  }\n  .stat-number[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .floating-card[_ngcontent-%COMP%] {\n    position: relative;\n    margin: 1rem 0;\n    top: auto !important;\n    left: auto !important;\n    right: auto !important;\n    bottom: auto !important;\n  }\n  .hero-graphic[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8uLy4uL2Jyb2FkY29tX2FuZ3VsYXIlMjAyL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLDhGQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQU47O0FER0k7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUNBTjs7QURHSTtFQUNFLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQU47O0FER0k7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNBTjs7QURHSTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQ0FOOztBREdJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FOOztBREdJO0VBQ0Usa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0Esd0NBQUE7QUNBTjs7QURHSTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNBTjs7QURHSTtFQUNFLFFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNBTjs7QURHSTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNBTjs7QURHSTtFQUNFO0lBQ0UsMEJBQUE7RUNBTjtFREVJO0lBQ0UsNEJBQUE7RUNBTjtBQUNGO0FER0k7RUFDRSxpQ0FBQTtFQUNBLDRCQUFBO0FDRE47O0FESUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0FDRE47O0FESUk7RUFDRSxlQUFBO0VBQ0EsMkJBQUE7QUNETjs7QURJSTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDRE47O0FESUk7RUFDRSxxQkFBQTtBQ0ROOztBRElJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNETjs7QURJSTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0ROOztBRElJO0VBQ0UsMkJBQUE7QUNETjs7QURJSTtFQUNFLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtBQ0ROOztBRElJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0ROOztBRElJO0VBQ0UsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDRE47O0FESUk7RUFDRSxnQkFBQTtBQ0ROOztBRElJO0VBQ0UscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQ0ROOztBRElJO0VBQ0UsK0JBQUE7RUFDQSw0QkFBQTtBQ0ROOztBRElJO0VBQ0UsNEJBQUE7RUFDQSxtQkFBQTtBQ0ROOztBRElJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNETjs7QURJSTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDRE47O0FESUk7RUFDRSxtQ0FBQTtFQUNBLDRCQUFBO0FDRE47O0FESUk7RUFDRSxpQ0FBQTtFQUNBLDBCQUFBO0FDRE47O0FESUk7RUFDRSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDRE47O0FESUk7RUFDRTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtFQ0ROO0VESUk7SUFDRSxpQkFBQTtFQ0ZOO0VES0k7SUFDRSxnQkFBQTtJQUNBLGFBQUE7RUNITjtFRE1JO0lBQ0UsZUFBQTtFQ0pOO0VET0k7SUFDRSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxvQkFBQTtJQUNBLHFCQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtFQ0xOO0VEUUk7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxTQUFBO0VDTk47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5oZXJvIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWJyb2FkY29tLWxpZ2h0LWdyYXkpIDAlLCB2YXIoLS1icm9hZGNvbS13aGl0ZSkgMTAwJSk7XG4gICAgICBwYWRkaW5nOiA2cmVtIDA7XG4gICAgICBtaW4taGVpZ2h0OiA4MHZoO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmhlcm8tY29udGVudCBoMSB7XG4gICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS1icm9hZGNvbS1ibGFjayk7XG4gICAgfVxuXG4gICAgLmhlcm8tc3VidGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLWJyb2FkY29tLWRhcmstZ3JheSk7XG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICB9XG5cbiAgICAuaGVyby1idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDFyZW07XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuXG4gICAgLmhlcm8taW1hZ2Uge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICB9XG5cbiAgICAuaGVyby1ncmFwaGljIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC5mbG9hdGluZy1jYXJkIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJyb2FkY29tLXdoaXRlKTtcbiAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICBhbmltYXRpb246IGZsb2F0IDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgIH1cblxuICAgIC5jYXJkLTEge1xuICAgICAgdG9wOiAxMCU7XG4gICAgICBsZWZ0OiAxMCU7XG4gICAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xuICAgIH1cblxuICAgIC5jYXJkLTIge1xuICAgICAgdG9wOiA0MCU7XG4gICAgICByaWdodDogMTAlO1xuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICB9XG5cbiAgICAuY2FyZC0zIHtcbiAgICAgIGJvdHRvbTogMTAlO1xuICAgICAgbGVmdDogMjAlO1xuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIGZsb2F0IHtcbiAgICAgIDAlLCAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICB9XG4gICAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zdGF0cyB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1icm9hZGNvbS1ibGFjayk7XG4gICAgICBjb2xvcjogdmFyKC0tYnJvYWRjb20td2hpdGUpO1xuICAgIH1cblxuICAgIC5zdGF0LW51bWJlciB7XG4gICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6IHZhcigtLWJyb2FkY29tLXJlZCk7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgfVxuXG4gICAgLnN0YXQtaXRlbSBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS1icm9hZGNvbS1ncmF5KTtcbiAgICB9XG5cbiAgICAuc29sdXRpb24tY2FyZCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAyLjVyZW0gMS41cmVtO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC5zb2x1dGlvbi1pY29uIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICB9XG5cbiAgICAuaWNvbi1jaXJjbGUge1xuICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAubGVhcm4tbW9yZSB7XG4gICAgICBjb2xvcjogdmFyKC0tYnJvYWRjb20tcmVkKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuXG4gICAgLmxlYXJuLW1vcmU6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLWJyb2FkY29tLWJsdWUpO1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWNhcmQge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYnJvYWRjb20td2hpdGUpO1xuICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWNhdGVnb3J5IHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJyb2FkY29tLXJlZCk7XG4gICAgICBjb2xvcjogdmFyKC0tYnJvYWRjb20td2hpdGUpO1xuICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWZlYXR1cmVzIHtcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgfVxuXG4gICAgLmZlYXR1cmUtdGFnIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJyb2FkY29tLWdyYXkpO1xuICAgICAgY29sb3I6IHZhcigtLWJyb2FkY29tLWRhcmstZ3JheSk7XG4gICAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIH1cblxuICAgIC5jdGEge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYnJvYWRjb20tcmVkKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1icm9hZGNvbS13aGl0ZSk7XG4gICAgfVxuXG4gICAgLmN0YSBoMiB7XG4gICAgICBjb2xvcjogdmFyKC0tYnJvYWRjb20td2hpdGUpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG5cbiAgICAuY3RhIHAge1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICB9XG5cbiAgICAuY3RhLWJ1dHRvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMXJlbTtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cblxuICAgIC5jdGEgLmJ0bi1vdXRsaW5lIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnJvYWRjb20td2hpdGUpO1xuICAgICAgY29sb3I6IHZhcigtLWJyb2FkY29tLXdoaXRlKTtcbiAgICB9XG5cbiAgICAuY3RhIC5idG4tb3V0bGluZTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1icm9hZGNvbS13aGl0ZSk7XG4gICAgICBjb2xvcjogdmFyKC0tYnJvYWRjb20tcmVkKTtcbiAgICB9XG5cbiAgICAuc2VjdGlvbi1zdWJ0aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLWJyb2FkY29tLWRhcmstZ3JheSk7XG4gICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAuaGVybyB7XG4gICAgICAgIHBhZGRpbmc6IDRyZW0gMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuaGVyby1jb250ZW50IGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICB9XG5cbiAgICAgIC5oZXJvLWltYWdlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgIH1cblxuICAgICAgLnN0YXQtbnVtYmVyIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgfVxuXG4gICAgICAuZmxvYXRpbmctY2FyZCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgICAgIHRvcDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIHJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuaGVyby1ncmFwaGljIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiAxcmVtO1xuICAgICAgfVxuICAgIH1cbiAgIiwiLmhlcm8ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1icm9hZGNvbS1saWdodC1ncmF5KSAwJSwgdmFyKC0tYnJvYWRjb20td2hpdGUpIDEwMCUpO1xuICBwYWRkaW5nOiA2cmVtIDA7XG4gIG1pbi1oZWlnaHQ6IDgwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZXJvLWNvbnRlbnQgaDEge1xuICBmb250LXNpemU6IDMuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICBjb2xvcjogdmFyKC0tYnJvYWRjb20tYmxhY2spO1xufVxuXG4uaGVyby1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgY29sb3I6IHZhcigtLWJyb2FkY29tLWRhcmstZ3JheSk7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5oZXJvLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmhlcm8taW1hZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbi5oZXJvLWdyYXBoaWMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5mbG9hdGluZy1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1icm9hZGNvbS13aGl0ZSk7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBhbmltYXRpb246IGZsb2F0IDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG4uY2FyZC0xIHtcbiAgdG9wOiAxMCU7XG4gIGxlZnQ6IDEwJTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbn1cblxuLmNhcmQtMiB7XG4gIHRvcDogNDAlO1xuICByaWdodDogMTAlO1xuICBhbmltYXRpb24tZGVsYXk6IDFzO1xufVxuXG4uY2FyZC0zIHtcbiAgYm90dG9tOiAxMCU7XG4gIGxlZnQ6IDIwJTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcbn1cblxuQGtleWZyYW1lcyBmbG9hdCB7XG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gIH1cbn1cbi5zdGF0cyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJyb2FkY29tLWJsYWNrKTtcbiAgY29sb3I6IHZhcigtLWJyb2FkY29tLXdoaXRlKTtcbn1cblxuLnN0YXQtbnVtYmVyIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tYnJvYWRjb20tcmVkKTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4uc3RhdC1pdGVtIHAge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB2YXIoLS1icm9hZGNvbS1ncmF5KTtcbn1cblxuLnNvbHV0aW9uLWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIuNXJlbSAxLjVyZW07XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNvbHV0aW9uLWljb24ge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5pY29uLWNpcmNsZSB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sZWFybi1tb3JlIHtcbiAgY29sb3I6IHZhcigtLWJyb2FkY29tLXJlZCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmxlYXJuLW1vcmU6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tYnJvYWRjb20tYmx1ZSk7XG59XG5cbi5wcm9kdWN0LWNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1icm9hZGNvbS13aGl0ZSk7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5wcm9kdWN0LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnByb2R1Y3QtY2F0ZWdvcnkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1icm9hZGNvbS1yZWQpO1xuICBjb2xvcjogdmFyKC0tYnJvYWRjb20td2hpdGUpO1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5wcm9kdWN0LWZlYXR1cmVzIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmZlYXR1cmUtdGFnIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1icm9hZGNvbS1ncmF5KTtcbiAgY29sb3I6IHZhcigtLWJyb2FkY29tLWRhcmstZ3JheSk7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuLmN0YSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJyb2FkY29tLXJlZCk7XG4gIGNvbG9yOiB2YXIoLS1icm9hZGNvbS13aGl0ZSk7XG59XG5cbi5jdGEgaDIge1xuICBjb2xvcjogdmFyKC0tYnJvYWRjb20td2hpdGUpO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uY3RhIHAge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLmN0YS1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY3RhIC5idG4tb3V0bGluZSB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnJvYWRjb20td2hpdGUpO1xuICBjb2xvcjogdmFyKC0tYnJvYWRjb20td2hpdGUpO1xufVxuXG4uY3RhIC5idG4tb3V0bGluZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJyb2FkY29tLXdoaXRlKTtcbiAgY29sb3I6IHZhcigtLWJyb2FkY29tLXJlZCk7XG59XG5cbi5zZWN0aW9uLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgY29sb3I6IHZhcigtLWJyb2FkY29tLWRhcmstZ3JheSk7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhlcm8ge1xuICAgIHBhZGRpbmc6IDRyZW0gMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmhlcm8tY29udGVudCBoMSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgLmhlcm8taW1hZ2Uge1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfVxuICAuc3RhdC1udW1iZXIge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuICAuZmxvYXRpbmctY2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMXJlbSAwO1xuICAgIHRvcDogYXV0byAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICByaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIGJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5oZXJvLWdyYXBoaWMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return HomeComponent;
})();

/***/ })

}]);
//# sourceMappingURL=47.js.map