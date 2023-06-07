"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_Product_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Product/Edit.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Product/Edit.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Edit',
  data: function data() {
    return {
      title: null,
      slug: null,
      price: null,
      is_active: true,
      preview_description: null,
      detail_description: null,
      hit: false,
      category_id: null,
      allCategories: [],
      errors: {
        title: '',
        slug: '',
        price: '',
        preview_description: '',
        detail_description: '',
        category_id: ''
      }
    };
  },
  mounted: function mounted() {
    this.getCategories();
    this.getProduct();
  },
  methods: {
    getCategories: function getCategories() {
      var _this = this;
      axios.get('/api/category').then(function (res) {
        _this.allCategories = res.data.data;
      });
    },
    getProduct: function getProduct() {
      var _this2 = this;
      axios.get("/api/product/".concat(this.$route.params.id)).then(function (res) {
        console.log(res.data.data);
        _this2.title = res.data.data.title;
        _this2.slug = res.data.data.slug;
        _this2.price = res.data.data.price;
        _this2.is_active = res.data.data.is_active;
        _this2.preview_description = res.data.data.preview_description;
        _this2.detail_description = res.data.data.detail_description;
        _this2.hit = res.data.data.hit;
        _this2.category_id = res.data.data.category.id;
      });
    },
    updateProduct: function updateProduct() {
      axios.patch("/api/product/".concat(this.$route.params.id), {
        title: this.title,
        slug: this.slug,
        price: this.price,
        is_active: this.is_active,
        preview_description: this.preview_description,
        detail_description: this.detail_description,
        hit: this.hit,
        category_id: this.category_id
      }).then(function (res) {
        _router__WEBPACK_IMPORTED_MODULE_0__["default"].push({
          name: 'admin.product.view'
        });
      });
    },
    back: function back() {
      _router__WEBPACK_IMPORTED_MODULE_0__["default"].push({
        name: 'admin.product.view'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Product/Edit.vue?vue&type=style&index=0&id=f3465296&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Product/Edit.vue?vue&type=style&index=0&id=f3465296&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.custom-flex[data-v-f3465296]{\r\n    display: flex;\r\n    width: 100%;\n}\n.cusrom-button[data-v-f3465296]{\r\n    margin-left: 20px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Product/Edit.vue?vue&type=style&index=0&id=f3465296&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Product/Edit.vue?vue&type=style&index=0&id=f3465296&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_f3465296_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=f3465296&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Product/Edit.vue?vue&type=style&index=0&id=f3465296&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_f3465296_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_f3465296_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/admin/Product/Edit.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/admin/Product/Edit.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_f3465296_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=f3465296&scoped=true& */ "./resources/js/components/admin/Product/Edit.vue?vue&type=template&id=f3465296&scoped=true&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/Product/Edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _Edit_vue_vue_type_style_index_0_id_f3465296_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit.vue?vue&type=style&index=0&id=f3465296&scoped=true&lang=css& */ "./resources/js/components/admin/Product/Edit.vue?vue&type=style&index=0&id=f3465296&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_f3465296_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_f3465296_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "f3465296",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Product/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Product/Edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/admin/Product/Edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Product/Edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/Product/Edit.vue?vue&type=style&index=0&id=f3465296&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/admin/Product/Edit.vue?vue&type=style&index=0&id=f3465296&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_f3465296_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=f3465296&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Product/Edit.vue?vue&type=style&index=0&id=f3465296&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/admin/Product/Edit.vue?vue&type=template&id=f3465296&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/admin/Product/Edit.vue?vue&type=template&id=f3465296&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_f3465296_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_f3465296_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_f3465296_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=f3465296&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Product/Edit.vue?vue&type=template&id=f3465296&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Product/Edit.vue?vue&type=template&id=f3465296&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Product/Edit.vue?vue&type=template&id=f3465296&scoped=true& ***!
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
  return _c("div", { staticClass: "w-50 ml-3 mb-3" }, [
    _c("div", { staticClass: "form-group" }, [
      _c("label", [_vm._v("Введите название товара")]),
      _vm._v(" "),
      _c("div", { staticClass: "text-danger" }, [
        _vm._v(_vm._s(_vm.errors.title[0])),
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.title,
            expression: "title",
          },
        ],
        staticClass: "form-control",
        attrs: { type: "text", placeholder: "Название" },
        domProps: { value: _vm.title },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.title = $event.target.value
          },
        },
      }),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", [_vm._v("Введите символьный код товара(slug)")]),
      _vm._v(" "),
      _c("div", { staticClass: "text-danger" }, [
        _vm._v(_vm._s(_vm.errors.slug[0])),
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.slug,
            expression: "slug",
          },
        ],
        staticClass: "form-control",
        attrs: { type: "text", placeholder: "Символьный код" },
        domProps: { value: _vm.slug },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.slug = $event.target.value
          },
        },
      }),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", [_vm._v("Введите цену товара")]),
      _vm._v(" "),
      _c("div", { staticClass: "text-danger" }, [
        _vm._v(_vm._s(_vm.errors.price[0])),
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.price,
            expression: "price",
          },
        ],
        staticClass: "form-control",
        attrs: { type: "text", placeholder: "цена" },
        domProps: { value: _vm.price },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.price = $event.target.value
          },
        },
      }),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", [_vm._v("Краткое описание товара")]),
      _vm._v(" "),
      _c("div", { staticClass: "text-danger" }, [
        _vm._v(_vm._s(_vm.errors.preview_description[0])),
      ]),
      _vm._v(" "),
      _c("textarea", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.preview_description,
            expression: "preview_description",
          },
        ],
        staticClass: "no-resize h-25 form-control",
        attrs: { id: "exampleFormControlTextarea1", rows: "3" },
        domProps: { value: _vm.preview_description },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.preview_description = $event.target.value
          },
        },
      }),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", [_vm._v("Детальное описание товара")]),
      _vm._v(" "),
      _c("div", { staticClass: "text-danger" }, [
        _vm._v(_vm._s(_vm.errors.detail_description[0])),
      ]),
      _vm._v(" "),
      _c("textarea", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.detail_description,
            expression: "detail_description",
          },
        ],
        staticClass: "no-resize form-control",
        attrs: { id: "exampleFormControlTextarea1", rows: "3" },
        domProps: { value: _vm.detail_description },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.detail_description = $event.target.value
          },
        },
      }),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", [_vm._v("Выберите категорию товара")]),
      _vm._v(" "),
      _c("div", { staticClass: "text-danger" }, [
        _vm._v(_vm._s(_vm.errors.category_id[0])),
      ]),
      _vm._v(" "),
      _c(
        "select",
        {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.category_id,
              expression: "category_id",
            },
          ],
          staticClass: "form-control form-control-sm",
          on: {
            change: function ($event) {
              var $$selectedVal = Array.prototype.filter
                .call($event.target.options, function (o) {
                  return o.selected
                })
                .map(function (o) {
                  var val = "_value" in o ? o._value : o.value
                  return val
                })
              _vm.category_id = $event.target.multiple
                ? $$selectedVal
                : $$selectedVal[0]
            },
          },
        },
        _vm._l(_vm.allCategories, function (item) {
          return _c("option", { domProps: { value: item.id } }, [
            _vm._v(_vm._s(item.title)),
          ])
        }),
        0
      ),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group form-check ml-1" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.is_active,
            expression: "is_active",
          },
        ],
        staticClass: "form-check-input",
        attrs: { type: "checkbox" },
        domProps: {
          checked: Array.isArray(_vm.is_active)
            ? _vm._i(_vm.is_active, null) > -1
            : _vm.is_active,
        },
        on: {
          change: function ($event) {
            var $$a = _vm.is_active,
              $$el = $event.target,
              $$c = $$el.checked ? true : false
            if (Array.isArray($$a)) {
              var $$v = null,
                $$i = _vm._i($$a, $$v)
              if ($$el.checked) {
                $$i < 0 && (_vm.is_active = $$a.concat([$$v]))
              } else {
                $$i > -1 &&
                  (_vm.is_active = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
              }
            } else {
              _vm.is_active = $$c
            }
          },
        },
      }),
      _vm._v(" "),
      _c("label", { staticClass: "form-check-label" }, [
        _vm._v("Товар активен"),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group form-check ml-1" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.hit,
            expression: "hit",
          },
        ],
        staticClass: "form-check-input",
        attrs: { type: "checkbox" },
        domProps: {
          checked: Array.isArray(_vm.hit)
            ? _vm._i(_vm.hit, null) > -1
            : _vm.hit,
        },
        on: {
          change: function ($event) {
            var $$a = _vm.hit,
              $$el = $event.target,
              $$c = $$el.checked ? true : false
            if (Array.isArray($$a)) {
              var $$v = null,
                $$i = _vm._i($$a, $$v)
              if ($$el.checked) {
                $$i < 0 && (_vm.hit = $$a.concat([$$v]))
              } else {
                $$i > -1 &&
                  (_vm.hit = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
              }
            } else {
              _vm.hit = $$c
            }
          },
        },
      }),
      _vm._v(" "),
      _c("label", { staticClass: "form-check-label" }, [
        _vm._v("Товар является хитом продаж"),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "custom-flex" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-success",
          attrs: { type: "submit" },
          on: {
            click: function ($event) {
              $event.preventDefault()
              return _vm.updateProduct.apply(null, arguments)
            },
          },
        },
        [_vm._v("Редактировать")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-danger cusrom-button",
          attrs: { type: "submit" },
          on: {
            click: function ($event) {
              $event.preventDefault()
              return _vm.updateProduct.apply(null, arguments)
            },
          },
        },
        [_vm._v("Отменить")]
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);