"use strict";
(self["webpackChunkbroadcom_demo"] = self["webpackChunkbroadcom_demo"] || []).push([[425],{

/***/ 9425:
/*!******************************************************!*\
  !*** ./src/app/pages/products/products.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsComponent: () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



function ProductsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", category_r2.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r2.icon, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", category_r2.productCount, " Products");
  }
}
function ProductsComponent_div_17_li_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const feature_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feature_r6);
  }
}
function ProductsComponent_div_17_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const benefit_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", benefit_r7, " ");
  }
}
function ProductsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 18)(10, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Key Features:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProductsComponent_div_17_li_13_Template, 2, 1, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 20)(15, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Benefits:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProductsComponent_div_17_span_18_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", product_r3.categoryColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r3.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", product_r3.features);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", product_r3.benefits);
  }
}
let ProductsComponent = /*#__PURE__*/(() => {
  class ProductsComponent {
    constructor() {
      this.productCategories = [{
        name: 'Enterprise Software',
        description: 'Comprehensive distributed software solutions for modern enterprises.',
        icon: 'ES',
        color: 'var(--broadcom-red)',
        productCount: 25
      }, {
        name: 'Mainframe Software',
        description: 'Mission-critical mainframe solutions for automation and management.',
        icon: 'MF',
        color: 'var(--broadcom-blue)',
        productCount: 18
      }, {
        name: 'Security Solutions',
        description: 'Advanced cybersecurity and threat protection technologies.',
        icon: 'SEC',
        color: '#28a745',
        productCount: 12
      }];
      this.featuredProducts = [{
        name: 'CA Workload Automation DE',
        category: 'Automation',
        categoryColor: 'var(--broadcom-red)',
        description: 'Comprehensive workload automation solution for managing complex business processes across distributed environments with advanced scheduling and monitoring capabilities.',
        features: ['Cross-platform job scheduling', 'Event-driven automation', 'REST API integration', 'Real-time monitoring', 'Scalable architecture'],
        benefits: ['Reduced Downtime', 'Improved Efficiency', 'Cost Savings', 'Compliance']
      }, {
        name: 'VMware vSphere',
        category: 'Virtualization',
        categoryColor: '#607078',
        description: 'Industry-leading virtualization platform that transforms data centers into simplified cloud computing infrastructures with advanced resource management.',
        features: ['High availability clustering', 'Live migration (vMotion)', 'Resource pooling', 'Security hardening', 'Performance optimization'],
        benefits: ['Hardware Efficiency', 'Flexibility', 'Disaster Recovery', 'Security']
      }, {
        name: 'Symantec Endpoint Security',
        category: 'Security',
        categoryColor: '#28a745',
        description: 'Advanced threat protection that combines multiple layers of protection to secure endpoints against sophisticated attacks and zero-day threats.',
        features: ['Machine learning detection', 'Behavioral analysis', 'Cloud-based management', 'Incident response', 'Threat intelligence'],
        benefits: ['Threat Prevention', 'Compliance', 'Centralized Management', 'Fast Response']
      }, {
        name: 'CA API Gateway',
        category: 'API Management',
        categoryColor: 'var(--broadcom-blue)',
        description: 'Secure, manage, and monitor APIs across your enterprise with comprehensive gateway capabilities and developer-friendly tools.',
        features: ['API security policies', 'Rate limiting & throttling', 'Analytics & monitoring', 'Developer portal', 'Protocol transformation'],
        benefits: ['API Security', 'Developer Productivity', 'Operational Visibility', 'Scalability']
      }];
    }
    static {
      this.ɵfac = function ProductsComponent_Factory(t) {
        return new (t || ProductsComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductsComponent,
        selectors: [["app-products"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 18,
        vars: 2,
        consts: [[1, "hero", "py-5"], [1, "container"], [1, "text-center"], [1, "hero-subtitle"], [1, "product-categories", "py-5"], [1, "row"], ["class", "col-4", 4, "ngFor", "ngForOf"], [1, "featured-products", "py-5", 2, "background", "var(--broadcom-light-gray)"], [1, "text-center", "mb-5"], ["class", "col-6", 4, "ngFor", "ngForOf"], [1, "col-4"], [1, "category-card", "card"], [1, "category-icon"], [1, "product-count"], [1, "col-6"], [1, "product-card"], [1, "product-header"], [1, "product-category"], [1, "product-features"], [4, "ngFor", "ngForOf"], [1, "product-benefits"], [1, "benefit-tags"], ["class", "benefit-tag", 4, "ngFor", "ngForOf"], [1, "benefit-tag"]],
        template: function ProductsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Products & Technologies");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Industry-leading software products that power the world's most critical enterprise environments. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 4)(8, "div", 1)(9, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductsComponent_div_10_Template, 10, 6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 7)(12, "div", 1)(13, "div", 8)(14, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Featured Products");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProductsComponent_div_17_Template, 19, 7, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productCategories);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.featuredProducts);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
        styles: ["@charset \"UTF-8\";\n.hero[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--broadcom-blue) 0%, #007091 100%);\n  color: var(--broadcom-white);\n}\n\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--broadcom-white);\n  font-size: 3rem;\n  margin-bottom: 1.5rem;\n}\n\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  max-width: 700px;\n  margin: 0 auto;\n  opacity: 0.9;\n}\n\n.category-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2.5rem 1.5rem;\n  height: 100%;\n  transition: transform 0.3s ease;\n}\n\n.category-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n\n.category-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1.5rem;\n  color: white;\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.product-count[_ngcontent-%COMP%] {\n  color: var(--broadcom-blue);\n  font-weight: 600;\n  margin-top: 1rem;\n}\n\n.product-card[_ngcontent-%COMP%] {\n  background: var(--broadcom-white);\n  padding: 2rem;\n  border-radius: 8px;\n  margin-bottom: 2rem;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  height: 100%;\n}\n\n.product-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n}\n\n.product-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  flex: 1;\n}\n\n.product-category[_ngcontent-%COMP%] {\n  color: var(--broadcom-white);\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  white-space: nowrap;\n  margin-left: 1rem;\n}\n\n.product-features[_ngcontent-%COMP%], .product-benefits[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.product-features[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .product-benefits[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n  color: var(--broadcom-dark-gray);\n  font-weight: 600;\n}\n\n.product-features[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.product-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.25rem 0;\n  position: relative;\n  padding-left: 1.5rem;\n}\n\n.product-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: \"\u2022\";\n  position: absolute;\n  left: 0;\n  color: var(--broadcom-red);\n  font-weight: bold;\n}\n\n.benefit-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n\n.benefit-tag[_ngcontent-%COMP%] {\n  background: var(--broadcom-gray);\n  color: var(--broadcom-dark-gray);\n  padding: 0.25rem 0.75rem;\n  border-radius: 15px;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n\n@media (max-width: 768px) {\n  .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .product-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .product-category[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uL2Jyb2FkY29tX2FuZ3VsYXIlMjAyL3NyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy4vc3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ1o7RUFDRSwwRUFBQTtFQUNBLDRCQUFBO0FEQ047O0FDRUk7RUFDRSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBRENOOztBQ0VJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FEQ047O0FDRUk7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0FEQ047O0FDRUk7RUFDRSwyQkFBQTtBRENOOztBQ0VJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FEQ047O0FDRUk7RUFDRSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QURDTjs7QUNFSTtFQUNFLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7QURDTjs7QUNFSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QURDTjs7QUNFSTtFQUNFLFNBQUE7RUFDQSxPQUFBO0FEQ047O0FDRUk7RUFDRSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRENOOztBQ0VJOztFQUVFLGtCQUFBO0FEQ047O0FDRUk7O0VBRUUsc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FEQ047O0FDRUk7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FEQ047O0FDRUk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QURDTjs7QUNFSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FEQ047O0FDRUk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QURDTjs7QUNFSTtFQUNFLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRENOOztBQ0VJO0VBQ0U7SUFDRSxpQkFBQTtFRENOO0VDRUk7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0VEQU47RUNHSTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtFREROO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uaGVybyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWJyb2FkY29tLWJsdWUpIDAlLCAjMDA3MDkxIDEwMCUpO1xuICBjb2xvcjogdmFyKC0tYnJvYWRjb20td2hpdGUpO1xufVxuXG4uaGVybyBoMSB7XG4gIGNvbG9yOiB2YXIoLS1icm9hZGNvbS13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG4uaGVyby1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLmNhdGVnb3J5LWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIuNXJlbSAxLjVyZW07XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cblxuLmNhdGVnb3J5LWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG59XG5cbi5jYXRlZ29yeS1pY29uIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG8gMS41cmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcm9kdWN0LWNvdW50IHtcbiAgY29sb3I6IHZhcigtLWJyb2FkY29tLWJsdWUpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4ucHJvZHVjdC1jYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYnJvYWRjb20td2hpdGUpO1xuICBwYWRkaW5nOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wcm9kdWN0LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5wcm9kdWN0LWhlYWRlciBoNCB7XG4gIG1hcmdpbjogMDtcbiAgZmxleDogMTtcbn1cblxuLnByb2R1Y3QtY2F0ZWdvcnkge1xuICBjb2xvcjogdmFyKC0tYnJvYWRjb20td2hpdGUpO1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ucHJvZHVjdC1mZWF0dXJlcyxcbi5wcm9kdWN0LWJlbmVmaXRzIHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuXG4ucHJvZHVjdC1mZWF0dXJlcyBoNixcbi5wcm9kdWN0LWJlbmVmaXRzIGg2IHtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgY29sb3I6IHZhcigtLWJyb2FkY29tLWRhcmstZ3JheSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5wcm9kdWN0LWZlYXR1cmVzIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucHJvZHVjdC1mZWF0dXJlcyBsaSB7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbn1cblxuLnByb2R1Y3QtZmVhdHVyZXMgbGk6YmVmb3JlIHtcbiAgY29udGVudDogXCLDosKAwqJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBjb2xvcjogdmFyKC0tYnJvYWRjb20tcmVkKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5iZW5lZml0LXRhZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC41cmVtO1xufVxuXG4uYmVuZWZpdC10YWcge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1icm9hZGNvbS1ncmF5KTtcbiAgY29sb3I6IHZhcigtLWJyb2FkY29tLWRhcmstZ3JheSk7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZXJvIGgxIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICAucHJvZHVjdC1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIH1cbiAgLnByb2R1Y3QtY2F0ZWdvcnkge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgfVxufSIsIlxuICAgIC5oZXJvIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWJyb2FkY29tLWJsdWUpIDAlLCAjMDA3MDkxIDEwMCUpO1xuICAgICAgY29sb3I6IHZhcigtLWJyb2FkY29tLXdoaXRlKTtcbiAgICB9XG5cbiAgICAuaGVybyBoMSB7XG4gICAgICBjb2xvcjogdmFyKC0tYnJvYWRjb20td2hpdGUpO1xuICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIH1cblxuICAgIC5oZXJvLXN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICB9XG5cbiAgICAuY2F0ZWdvcnktY2FyZCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAyLjVyZW0gMS41cmVtO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgICB9XG5cbiAgICAuY2F0ZWdvcnktY2FyZDpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgfVxuXG4gICAgLmNhdGVnb3J5LWljb24ge1xuICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWFyZ2luOiAwIGF1dG8gMS41cmVtO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtY291bnQge1xuICAgICAgY29sb3I6IHZhcigtLWJyb2FkY29tLWJsdWUpO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1icm9hZGNvbS13aGl0ZSk7XG4gICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWhlYWRlciBoNCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmbGV4OiAxO1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWNhdGVnb3J5IHtcbiAgICAgIGNvbG9yOiB2YXIoLS1icm9hZGNvbS13aGl0ZSk7XG4gICAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtZmVhdHVyZXMsXG4gICAgLnByb2R1Y3QtYmVuZWZpdHMge1xuICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWZlYXR1cmVzIGg2LFxuICAgIC5wcm9kdWN0LWJlbmVmaXRzIGg2IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gICAgICBjb2xvcjogdmFyKC0tYnJvYWRjb20tZGFyay1ncmF5KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtZmVhdHVyZXMgdWwge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtZmVhdHVyZXMgbGkge1xuICAgICAgcGFkZGluZzogMC4yNXJlbSAwO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtZmVhdHVyZXMgbGk6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICfDosKAwqInO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1icm9hZGNvbS1yZWQpO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmJlbmVmaXQtdGFncyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgZ2FwOiAwLjVyZW07XG4gICAgfVxuXG4gICAgLmJlbmVmaXQtdGFnIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJyb2FkY29tLWdyYXkpO1xuICAgICAgY29sb3I6IHZhcigtLWJyb2FkY29tLWRhcmstZ3JheSk7XG4gICAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAuaGVybyBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgfVxuXG4gICAgICAucHJvZHVjdC1oZWFkZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIH1cblxuICAgICAgLnByb2R1Y3QtY2F0ZWdvcnkge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgICAgfVxuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return ProductsComponent;
})();

/***/ })

}]);
//# sourceMappingURL=425.js.map