var capacitorCapML = (function (exports, core) {
    'use strict';

    exports.ImageOrientation = void 0;
    (function (ImageOrientation) {
        ImageOrientation["Up"] = "UP";
        ImageOrientation["Down"] = "DOWN";
        ImageOrientation["Left"] = "LEFT";
        ImageOrientation["Right"] = "RIGHT";
    })(exports.ImageOrientation || (exports.ImageOrientation = {}));

    const CapML = core.registerPlugin('CapML', {});
    // export * from './web';

    exports.CapML = CapML;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
