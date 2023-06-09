"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_Product_View_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Product/View.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Product/View.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../router */ "./resources/js/router.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'View',
  data: function data() {
    return {
      products: [],
      categories: [],
      selectedCategory: 'отсортировать по категории'
    };
  },
  mounted: function mounted() {
    this.getAllProducts();
    this.getAllCategories();
  },
  methods: {
    getAllProducts: function getAllProducts() {
      var _this = this;
      axios.get('/api/product').then(function (res) {
        _this.products = res.data.products;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    showUpdatePage: function showUpdatePage(id) {
      _router__WEBPACK_IMPORTED_MODULE_0__["default"].push({
        name: 'admin.product.edit',
        params: {
          id: id
        }
      });
    },
    deleteProduct: function deleteProduct(id) {
      var _this2 = this;
      axios["delete"]("/api/product/".concat(id)).then(function (res) {
        _this2.getAllProducts();
      })["catch"](function (error) {
        console.log(error.response.data.errors);
      });
    },
    getAllCategories: function getAllCategories() {
      var _this3 = this;
      axios.get('/api/category').then(function (res) {
        _this3.categories = res.data.data;
      });
    },
    selectCategory: function selectCategory(title, slug) {
      if (title == 'Отменить') {
        this.getAllProducts();
        this.selectedCategory = 'отсортировать по категории';
      } else {
        this.getAllProductsByCategory(slug);
        this.selectedCategory = title;
      }
    },
    getAllProductsByCategory: function getAllProductsByCategory(slug) {
      var _this4 = this;
      axios.get("/api/product?category=".concat(slug)).then(function (res) {
        _this4.products = res.data.products;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/admin/Product/View.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/admin/Product/View.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _View_vue_vue_type_template_id_6e26ddd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=6e26ddd0&scoped=true& */ "./resources/js/components/admin/Product/View.vue?vue&type=template&id=6e26ddd0&scoped=true&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/Product/View.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_6e26ddd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _View_vue_vue_type_template_id_6e26ddd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6e26ddd0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Product/View.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Product/View.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/admin/Product/View.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Product/View.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/Product/View.vue?vue&type=template&id=6e26ddd0&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/admin/Product/View.vue?vue&type=template&id=6e26ddd0&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_6e26ddd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_6e26ddd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_6e26ddd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./View.vue?vue&type=template&id=6e26ddd0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Product/View.vue?vue&type=template&id=6e26ddd0&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Product/View.vue?vue&type=template&id=6e26ddd0&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Product/View.vue?vue&type=template&id=6e26ddd0&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "dropdown" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary dropdown-toggle",
          attrs: {
            type: "button",
            id: "dropdownMenuButton",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false",
          },
        },
        [
          _vm._v(
            "\n            " + _vm._s(this.selectedCategory) + "\n        "
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "dropdown-menu",
          attrs: { "aria-labelledby": "dropdownMenuButton" },
        },
        [
          _vm._l(_vm.categories, function (category) {
            return _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "#" },
                on: {
                  click: function ($event) {
                    $event.preventDefault()
                    return _vm.selectCategory(category.title, category.slug)
                  },
                },
              },
              [_vm._v(_vm._s(category.title))]
            )
          }),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item",
              attrs: { href: "#" },
              on: {
                click: function ($event) {
                  $event.preventDefault()
                  return _vm.selectCategory("Отменить", "")
                },
              },
            },
            [_vm._v("Отменить")]
          ),
        ],
        2
      ),
    ]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("table", { staticClass: "table" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.products, function (product) {
          return _c("tr", [
            _c("th", { attrs: { scope: "row" } }, [_vm._v(_vm._s(product.id))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(product.title))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(product.slug))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(product.price))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(product.is_active ? "Да" : "Нет"))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(product.hit ? "Да" : "Нет"))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(product.category.name))]),
            _vm._v(" "),
            _c("td", [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.showUpdatePage(product.id)
                    },
                  },
                },
                [_vm._v("Изменить")]
              ),
            ]),
            _vm._v(" "),
            _c("td", [
              _c(
                "button",
                {
                  staticClass: "btn btn-danger",
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.deleteProduct(product.id)
                    },
                  },
                },
                [_vm._v("Удалить")]
              ),
            ]),
          ])
        }),
        0
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Название")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Символьный код")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Цена")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Активность")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Хит продаж")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Категория товара")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Редакитрование")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Удаление")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);