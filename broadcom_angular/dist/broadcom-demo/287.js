"use strict";
(self["webpackChunkbroadcom_demo"] = self["webpackChunkbroadcom_demo"] || []).push([[287],{

/***/ 1287:
/*!****************************************************!*\
  !*** ./src/app/pages/company/company.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompanyComponent: () => (/* binding */ CompanyComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



function CompanyComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8)(1, "div", 21)(2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const leader_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", leader_r3.initials, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](leader_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](leader_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](leader_r3.bio);
  }
}
function CompanyComponent_div_54_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r6);
  }
}
function CompanyComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25)(1, "div", 26)(2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CompanyComponent_div_54_li_9_Template, 2, 1, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const segment_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", segment_r4.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", segment_r4.icon, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](segment_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](segment_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", segment_r4.products);
  }
}
function CompanyComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30)(1, "div", 31)(2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const value_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r7.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r7.description);
  }
}
let CompanyComponent = /*#__PURE__*/(() => {
  class CompanyComponent {
    constructor() {
      this.leadership = [{
        name: 'Hock E. Tan',
        title: 'President and CEO',
        initials: 'HT',
        bio: 'Leading Broadcom\'s strategic vision and global operations since 2006, driving innovation in semiconductor and infrastructure software solutions.'
      }, {
        name: 'Kirsten Spears',
        title: 'Chief Financial Officer',
        initials: 'KS',
        bio: 'Overseeing financial strategy, investor relations, and corporate development to support Broadcom\'s continued growth and market leadership.'
      }, {
        name: 'Mark Brazeal',
        title: 'Chief Operating Officer',
        initials: 'MB',
        bio: 'Managing global operations, supply chain, and manufacturing to ensure efficient delivery of Broadcom\'s diverse product portfolio.'
      }];
      this.businessSegments = [{
        name: 'Semiconductor Solutions',
        description: 'Leading provider of analog and digital semiconductor solutions for wired and wireless communications, data center networking, and industrial applications.',
        icon: 'SEMI',
        color: 'var(--broadcom-red)',
        products: ['Broadband Access Chips', 'Wireless Connectivity Solutions', 'Data Center Networking ASICs', 'Storage Adapters & Controllers', 'Fiber Optic Components']
      }, {
        name: 'Infrastructure Software',
        description: 'Comprehensive software solutions for enterprise environments including mainframe, distributed systems, and security applications.',
        icon: 'SOFT',
        color: 'var(--broadcom-blue)',
        products: ['CA Enterprise Software', 'Mainframe Software Solutions', 'VMware Cloud Infrastructure', 'Symantec Security Products', 'API Management & Integration']
      }];
      this.values = [{
        title: 'Innovation',
        description: 'Continuously pushing the boundaries of technology to create solutions that transform industries.',
        icon: '💡'
      }, {
        title: 'Excellence',
        description: 'Delivering the highest quality products and services that exceed customer expectations.',
        icon: '⭐'
      }, {
        title: 'Integrity',
        description: 'Operating with honesty, transparency, and ethical business practices in all our interactions.',
        icon: '🤝'
      }, {
        title: 'Collaboration',
        description: 'Working together across teams, disciplines, and borders to achieve common goals.',
        icon: '🤝'
      }];
    }
    static {
      this.ɵfac = function CompanyComponent_Factory(t) {
        return new (t || CompanyComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CompanyComponent,
        selectors: [["app-company"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 62,
        vars: 3,
        consts: [[1, "hero", "py-5"], [1, "container"], [1, "text-center"], [1, "hero-subtitle"], [1, "company-overview", "py-5"], [1, "row"], [1, "col-8"], [1, "large-text"], [1, "col-4"], [1, "stats-card"], [1, "fact-item"], [1, "fact-number"], [1, "fact-label"], [1, "leadership", "py-5", 2, "background", "var(--broadcom-light-gray)"], [1, "text-center", "mb-5"], ["class", "col-4", 4, "ngFor", "ngForOf"], [1, "business-segments", "py-5"], ["class", "col-6", 4, "ngFor", "ngForOf"], [1, "values", "py-5", 2, "background", "var(--broadcom-black)", "color", "var(--broadcom-white)"], [2, "color", "var(--broadcom-white)"], ["class", "col-3", 4, "ngFor", "ngForOf"], [1, "leader-card"], [1, "leader-avatar"], [1, "leader-title"], [1, "leader-bio"], [1, "col-6"], [1, "segment-card"], [1, "segment-icon"], [1, "segment-products"], [4, "ngFor", "ngForOf"], [1, "col-3"], [1, "value-item", "text-center"], [1, "value-icon"]],
        template: function CompanyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About Broadcom Inc.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " A global technology leader that designs, develops and supplies semiconductor and infrastructure software solutions. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 4)(8, "div", 1)(9, "div", 5)(10, "div", 6)(11, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Our Mission");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " To connect everything through our innovative semiconductor and infrastructure software solutions, enabling our customers to advance the world's connectivity and accelerate digital transformation. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Founded in 1961, Broadcom Inc. has grown to become one of the world's leading semiconductor companies, providing solutions that power cloud data centers, telecom infrastructure, enterprise networks, and more. Our comprehensive portfolio spans from foundational infrastructure to cutting-edge technologies. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8)(18, "div", 9)(19, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Company Facts");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10)(22, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "$35.8B");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Annual Revenue");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10)(27, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "20,000+");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Employees Worldwide");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10)(32, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "220+");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Countries Served");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10)(37, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "1961");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Founded");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "section", 13)(42, "div", 1)(43, "div", 14)(44, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Leadership Team");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, CompanyComponent_div_47_Template, 10, 4, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "section", 16)(49, "div", 1)(50, "div", 14)(51, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Business Segments");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, CompanyComponent_div_54_Template, 10, 6, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "section", 18)(56, "div", 1)(57, "div", 14)(58, "h2", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Our Values");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, CompanyComponent_div_61_Template, 8, 3, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.leadership);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.businessSegments);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.values);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
        styles: ["@charset \"UTF-8\";\n.hero[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--broadcom-black) 0%, var(--broadcom-dark-gray) 100%);\n  color: var(--broadcom-white);\n}\n\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--broadcom-white);\n  font-size: 3rem;\n  margin-bottom: 1.5rem;\n}\n\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  max-width: 800px;\n  margin: 0 auto;\n  opacity: 0.9;\n}\n\n.large-text[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  line-height: 1.6;\n  color: var(--broadcom-dark-gray);\n  margin-bottom: 2rem;\n}\n\n.stats-card[_ngcontent-%COMP%] {\n  background: var(--broadcom-light-gray);\n  padding: 2rem;\n  border-radius: 8px;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.stats-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  color: var(--broadcom-black);\n}\n\n.fact-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 0;\n  border-bottom: 1px solid var(--broadcom-gray);\n}\n\n.fact-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.fact-number[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--broadcom-red);\n}\n\n.fact-label[_ngcontent-%COMP%] {\n  color: var(--broadcom-dark-gray);\n  font-weight: 500;\n}\n\n.leader-card[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n\n.leader-avatar[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: var(--broadcom-red);\n  color: var(--broadcom-white);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: bold;\n  margin: 0 auto 1rem;\n}\n\n.leader-title[_ngcontent-%COMP%] {\n  color: var(--broadcom-red);\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n\n.leader-bio[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--broadcom-dark-gray);\n  line-height: 1.5;\n}\n\n.segment-card[_ngcontent-%COMP%] {\n  background: var(--broadcom-white);\n  padding: 2rem;\n  border-radius: 8px;\n  margin-bottom: 2rem;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  height: 100%;\n}\n\n.segment-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: bold;\n  font-size: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.segment-products[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 1.5rem 0 0 0;\n  padding: 0;\n}\n\n.segment-products[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n  color: var(--broadcom-dark-gray);\n  position: relative;\n  padding-left: 1.5rem;\n}\n\n.segment-products[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: \"\u25B8\";\n  position: absolute;\n  left: 0;\n  color: var(--broadcom-red);\n  font-weight: bold;\n}\n\n.value-item[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.value-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n\n.values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--broadcom-gray);\n}\n\n@media (max-width: 768px) {\n  .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .stats-card[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n  }\n  .leader-avatar[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n    font-size: 1.5rem;\n  }\n  .value-icon[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uL2Jyb2FkY29tX2FuZ3VsYXIlMjAyL3NyYy9hcHAvcGFnZXMvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDWjtFQUNFLDZGQUFBO0VBQ0EsNEJBQUE7QURDTjs7QUNFSTtFQUNFLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FEQ047O0FDRUk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QURDTjs7QUNFSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FEQ047O0FDRUk7RUFDRSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7QURDTjs7QUNFSTtFQUNFLG1CQUFBO0VBQ0EsNEJBQUE7QURDTjs7QUNFSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDZDQUFBO0FEQ047O0FDRUk7RUFDRSxtQkFBQTtBRENOOztBQ0VJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FEQ047O0FDRUk7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0FEQ047O0FDRUk7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FEQ047O0FDRUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QURDTjs7QUNFSTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBRENOOztBQ0VJO0VBQ0Usa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FEQ047O0FDRUk7RUFDRSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0FEQ047O0FDRUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FEQ047O0FDRUk7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBRENOOztBQ0VJO0VBQ0UsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QURDTjs7QUNFSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FEQ047O0FDRUk7RUFDRSxtQkFBQTtBRENOOztBQ0VJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FEQ047O0FDRUk7RUFDRSwyQkFBQTtBRENOOztBQ0VJO0VBQ0U7SUFDRSxpQkFBQTtFRENOO0VDRUk7SUFDRSxnQkFBQTtFREFOO0VDR0k7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VERE47RUNJSTtJQUNFLGlCQUFBO0VERk47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5oZXJvIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tYnJvYWRjb20tYmxhY2spIDAlLCB2YXIoLS1icm9hZGNvbS1kYXJrLWdyYXkpIDEwMCUpO1xuICBjb2xvcjogdmFyKC0tYnJvYWRjb20td2hpdGUpO1xufVxuXG4uaGVybyBoMSB7XG4gIGNvbG9yOiB2YXIoLS1icm9hZGNvbS13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG4uaGVyby1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLmxhcmdlLXRleHQge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIGNvbG9yOiB2YXIoLS1icm9hZGNvbS1kYXJrLWdyYXkpO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uc3RhdHMtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJyb2FkY29tLWxpZ2h0LWdyYXkpO1xuICBwYWRkaW5nOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cbi5zdGF0cy1jYXJkIGgzIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgY29sb3I6IHZhcigtLWJyb2FkY29tLWJsYWNrKTtcbn1cblxuLmZhY3QtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbSAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYnJvYWRjb20tZ3JheSk7XG59XG5cbi5mYWN0LWl0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5mYWN0LW51bWJlciB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tYnJvYWRjb20tcmVkKTtcbn1cblxuLmZhY3QtbGFiZWwge1xuICBjb2xvcjogdmFyKC0tYnJvYWRjb20tZGFyay1ncmF5KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmxlYWRlci1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4ubGVhZGVyLWF2YXRhciB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1icm9hZGNvbS1yZWQpO1xuICBjb2xvcjogdmFyKC0tYnJvYWRjb20td2hpdGUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwIGF1dG8gMXJlbTtcbn1cblxuLmxlYWRlci10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1icm9hZGNvbS1yZWQpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4ubGVhZGVyLWJpbyB7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgY29sb3I6IHZhcigtLWJyb2FkY29tLWRhcmstZ3JheSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5zZWdtZW50LWNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1icm9hZGNvbS13aGl0ZSk7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNlZ21lbnQtaWNvbiB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG4uc2VnbWVudC1wcm9kdWN0cyB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMS41cmVtIDAgMCAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc2VnbWVudC1wcm9kdWN0cyBsaSB7XG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xuICBjb2xvcjogdmFyKC0tYnJvYWRjb20tZGFyay1ncmF5KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbn1cblxuLnNlZ21lbnQtcHJvZHVjdHMgbGk6YmVmb3JlIHtcbiAgY29udGVudDogXCLDosKWwrhcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBjb2xvcjogdmFyKC0tYnJvYWRjb20tcmVkKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi52YWx1ZS1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLnZhbHVlLWljb24ge1xuICBmb250LXNpemU6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi52YWx1ZXMgcCB7XG4gIGNvbG9yOiB2YXIoLS1icm9hZGNvbS1ncmF5KTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZXJvIGgxIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICAuc3RhdHMtY2FyZCB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgfVxuICAubGVhZGVyLWF2YXRhciB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC52YWx1ZS1pY29uIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxufSIsIlxuICAgIC5oZXJvIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWJyb2FkY29tLWJsYWNrKSAwJSwgdmFyKC0tYnJvYWRjb20tZGFyay1ncmF5KSAxMDAlKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1icm9hZGNvbS13aGl0ZSk7XG4gICAgfVxuXG4gICAgLmhlcm8gaDEge1xuICAgICAgY29sb3I6IHZhcigtLWJyb2FkY29tLXdoaXRlKTtcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICB9XG5cbiAgICAuaGVyby1zdWJ0aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBvcGFjaXR5OiAwLjk7XG4gICAgfVxuXG4gICAgLmxhcmdlLXRleHQge1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgIGNvbG9yOiB2YXIoLS1icm9hZGNvbS1kYXJrLWdyYXkpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB9XG5cbiAgICAuc3RhdHMtY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1icm9hZGNvbS1saWdodC1ncmF5KTtcbiAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIH1cblxuICAgIC5zdGF0cy1jYXJkIGgzIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICBjb2xvcjogdmFyKC0tYnJvYWRjb20tYmxhY2spO1xuICAgIH1cblxuICAgIC5mYWN0LWl0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxcmVtIDA7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYnJvYWRjb20tZ3JheSk7XG4gICAgfVxuXG4gICAgLmZhY3QtaXRlbTpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgfVxuXG4gICAgLmZhY3QtbnVtYmVyIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1icm9hZGNvbS1yZWQpO1xuICAgIH1cblxuICAgIC5mYWN0LWxhYmVsIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1icm9hZGNvbS1kYXJrLWdyYXkpO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICAubGVhZGVyLWNhcmQge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB9XG5cbiAgICAubGVhZGVyLWF2YXRhciB7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYnJvYWRjb20tcmVkKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1icm9hZGNvbS13aGl0ZSk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBtYXJnaW46IDAgYXV0byAxcmVtO1xuICAgIH1cblxuICAgIC5sZWFkZXItdGl0bGUge1xuICAgICAgY29sb3I6IHZhcigtLWJyb2FkY29tLXJlZCk7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG5cbiAgICAubGVhZGVyLWJpbyB7XG4gICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICBjb2xvcjogdmFyKC0tYnJvYWRjb20tZGFyay1ncmF5KTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgfVxuXG4gICAgLnNlZ21lbnQtY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1icm9hZGNvbS13aGl0ZSk7XG4gICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC5zZWdtZW50LWljb24ge1xuICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgfVxuXG4gICAgLnNlZ21lbnQtcHJvZHVjdHMge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIG1hcmdpbjogMS41cmVtIDAgMCAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICAuc2VnbWVudC1wcm9kdWN0cyBsaSB7XG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1icm9hZGNvbS1kYXJrLWdyYXkpO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gICAgfVxuXG4gICAgLnNlZ21lbnQtcHJvZHVjdHMgbGk6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICfDosKWwrgnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1icm9hZGNvbS1yZWQpO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLnZhbHVlLWl0ZW0ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB9XG5cbiAgICAudmFsdWUtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cblxuICAgIC52YWx1ZXMgcCB7XG4gICAgICBjb2xvcjogdmFyKC0tYnJvYWRjb20tZ3JheSk7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAuaGVybyBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgfVxuXG4gICAgICAuc3RhdHMtY2FyZCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICB9XG5cbiAgICAgIC5sZWFkZXItYXZhdGFyIHtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB9XG5cbiAgICAgIC52YWx1ZS1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICB9XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return CompanyComponent;
})();

/***/ })

}]);
//# sourceMappingURL=287.js.map