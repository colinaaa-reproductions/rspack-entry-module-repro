(() => { // webpackBootstrap
"use strict";
var __webpack_modules__ = ({
"917": (function (module, __unused_webpack___webpack_exports__, __webpack_require__) {

;// CONCATENATED MODULE: ./src/isBuffer.js
/* module decorator */ module = __webpack_require__.hmd(module);
// Copy from 'lodash-es@4.17.21/isBuffer.js'
//
/** Detect free variable `exports`. */ var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */ var isBuffer_Buffer = moduleExports ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeIsBuffer = isBuffer_Buffer ? isBuffer_Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */ var isBuffer_isBuffer = nativeIsBuffer || stubFalse;
/* harmony default export */ var isBuffer_ = (isBuffer_isBuffer);

;// CONCATENATED MODULE: ./src/index.js

console.log(isBuffer_);
}),

});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
id: moduleId,
loaded: false,
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Flag the module as loaded
module.loaded = true;
// Return the exports of the module
return module.exports;

}

/************************************************************************/
// webpack/runtime/harmony_module_decorator
(() => {
__webpack_require__.hmd = function (module) {
    module = Object.create(module);
    if (!module.children) module.children = [];
    Object.defineProperty(module, 'exports', {
        enumerable: true,
        set: function () {
            throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
        }
    });
    return module;
};
})();
/************************************************************************/
// startup
// Load entry module and return exports
// This entry module used 'module' so it can't be inlined
var __webpack_exports__ = __webpack_require__("917");
})()
;