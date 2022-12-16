"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var nanoid_1 = require("nanoid");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var styleStubs_1 = require("./styleStubs");
var applyMixins_1 = require("./applyMixins");
var componentStubs_1 = require("./componentStubs");
var config_1 = require("./config");
var fonts_1 = require("./fonts");
var mixins_1 = require("./mixins");
exports.createFigma = function (paramConfig) {
    var config = __assign({}, config_1.defaultConfig, paramConfig);
    var BaseNodeMixinStub = mixins_1.getBaseNodeMixinStub(config);
    var LayoutMixinStub = mixins_1.getLayoutMixinStub(config);
    var ChildrenMixinStub = mixins_1.getChildrenMixinStub(config);
    // @ts-ignore
    global.__html__ = "main.html";
    // @ts-ignore
    global.__uiFiles__ = {};
    applyMixins_1.applyMixins(componentStubs_1.RectangleNodeStub, [
        BaseNodeMixinStub,
        LayoutMixinStub,
        mixins_1.ExportMixinStub,
        mixins_1.GeometryMixinStub
    ]);
    applyMixins_1.applyMixins(componentStubs_1.TextNodeStub, [
        BaseNodeMixinStub,
        LayoutMixinStub,
        mixins_1.ExportMixinStub,
        mixins_1.GeometryMixinStub
    ]);
    applyMixins_1.applyMixins(componentStubs_1.ShapeWithTextNodeStub, [
        BaseNodeMixinStub,
        LayoutMixinStub,
        mixins_1.ExportMixinStub,
        mixins_1.GeometryMixinStub
    ]);
    applyMixins_1.applyMixins(componentStubs_1.StickyNodeStub, [
        BaseNodeMixinStub,
        LayoutMixinStub,
        mixins_1.ExportMixinStub,
        mixins_1.GeometryMixinStub
    ]);
    applyMixins_1.applyMixins(componentStubs_1.ConnectorNodeStub, [
        BaseNodeMixinStub,
        LayoutMixinStub,
        mixins_1.ExportMixinStub,
        mixins_1.GeometryMixinStub
    ]);
    applyMixins_1.applyMixins(componentStubs_1.DocumentNodeStub, [BaseNodeMixinStub, ChildrenMixinStub]);
    applyMixins_1.applyMixins(componentStubs_1.PageNodeStub, [
        BaseNodeMixinStub,
        ChildrenMixinStub,
        mixins_1.ExportMixinStub
    ]);
    applyMixins_1.applyMixins(componentStubs_1.FrameNodeStub, [
        BaseNodeMixinStub,
        ChildrenMixinStub,
        LayoutMixinStub,
        mixins_1.ExportMixinStub,
        mixins_1.GeometryMixinStub
    ]);
    applyMixins_1.applyMixins(componentStubs_1.GroupNodeStub, [
        BaseNodeMixinStub,
        ChildrenMixinStub,
        mixins_1.ExportMixinStub,
        LayoutMixinStub
    ]);
    applyMixins_1.applyMixins(componentStubs_1.BooleanOperationNodeStub, [
        BaseNodeMixinStub,
        ChildrenMixinStub,
        mixins_1.ExportMixinStub,
        LayoutMixinStub
    ]);
    applyMixins_1.applyMixins(componentStubs_1.ComponentNodeStub, [
        BaseNodeMixinStub,
        ChildrenMixinStub,
        mixins_1.ExportMixinStub,
        LayoutMixinStub,
        mixins_1.GeometryMixinStub
    ]);
    applyMixins_1.applyMixins(componentStubs_1.InstanceNodeStub, [
        BaseNodeMixinStub,
        mixins_1.ExportMixinStub,
        LayoutMixinStub,
        ChildrenMixinStub
    ]);
    var selectionChangeSubscribes = new Map();
    var currentPageChangeSubject = new rxjs_1.Subject();
    var currentPageChangeSubscribes = new Map();
    var majorId = 1;
    var minorId = 1;
    var allocateNodeId = function (node, shouldIncreaseMajor) {
        minorId += 1;
        if (!shouldIncreaseMajor) {
            node.id = majorId + ":" + minorId;
        }
        else {
            node.id = majorId + ":" + 1;
            majorId += 1;
        }
    };
    var allocateStyleId = function (style) {
        style.id = "S:" + nanoid_1.nanoid(40) + ",";
    };
    var getImageHash = function () {
        return nanoid_1.nanoid(40);
    };
    var UIAPIStub = /** @class */ (function () {
        function UIAPIStub() {
            var _this = this;
            this._listeners = new Set();
            this.on = function (type, cb) {
                if (type === "message" && cb) {
                    _this._listeners.add(cb);
                }
            };
            this.off = function (type, cb) {
                if (type === "message" && cb) {
                    _this._listeners.delete(cb);
                }
            };
            this.once = function (type, cb) {
                if (type === "message" && cb) {
                    var wrappedCb_1 = function (pluginMessage, props) {
                        cb(pluginMessage, props);
                        _this.off("message", wrappedCb_1);
                    };
                    _this.on("message", wrappedCb_1);
                }
            };
        }
        UIAPIStub.prototype.postMessage = function (pluginMessage, options) {
            var message = {
                data: { pluginMessage: pluginMessage, pluginId: "000000000000000000" },
                type: "message"
            };
            // @ts-ignore
            if (global && global.onmessage) {
                if (config.isWithoutTimeout) {
                    // @ts-ignore
                    global.onmessage(message);
                }
                else {
                    setTimeout(function () {
                        // @ts-ignore
                        global.onmessage(message);
                    }, 0);
                }
            }
        };
        return UIAPIStub;
    }());
    // --- styles
    var PaintStyleStub = styleStubs_1.getPaintStyleStub(config);
    var EffectStyleStub = styleStubs_1.getEffectStyleStub(config);
    var TextStyleStub = styleStubs_1.getTextStyleStub(config);
    var GridStyleStub = styleStubs_1.getGridStyleStub(config);
    var styleBasics = {
        styles: new Map(),
        paintStyles: [],
        effectStyles: [],
        textStyles: [],
        gridStyles: []
    };
    // @ts-ignore
    var PluginApiStub = /** @class */ (function () {
        function PluginApiStub() {
            this.skipInvisibleInstanceChildren = false;
            // @ts-ignore
            this.root = new componentStubs_1.DocumentNodeStub();
            // @ts-ignore
            this.root.id = "0:0";
            // @ts-ignore
            this._currentPage = new componentStubs_1.PageNodeStub();
            // @ts-ignore
            this._currentPage.id = "0:1";
            this.root.appendChild(this._currentPage);
            // @ts-ignore
            this.ui = new UIAPIStub();
        }
        Object.defineProperty(PluginApiStub.prototype, "currentPage", {
            get: function () {
                return this._currentPage;
            },
            set: function (value) {
                this._currentPage = value;
                currentPageChangeSubject.next();
            },
            enumerable: true,
            configurable: true
        });
        // @ts-ignore
        PluginApiStub.prototype.createPage = function () {
            var result = new componentStubs_1.PageNodeStub(config);
            allocateNodeId(result, true);
            this.root.appendChild(result);
            return result;
        };
        // @ts-ignore
        PluginApiStub.prototype.createFrame = function () {
            var result = new componentStubs_1.FrameNodeStub(config);
            allocateNodeId(result);
            this.currentPage.appendChild(result);
            return result;
        };
        // @ts-ignore
        PluginApiStub.prototype.createShapeWithText = function () {
            var result = new componentStubs_1.ShapeWithTextNodeStub(config);
            allocateNodeId(result);
            this.root.appendChild(result);
            return result;
        };
        // @ts-ignore
        PluginApiStub.prototype.createSticky = function () {
            var result = new componentStubs_1.StickyNodeStub(config);
            allocateNodeId(result);
            this.root.appendChild(result);
            return result;
        };
        // @ts-ignore
        PluginApiStub.prototype.createComponent = function () {
            var result = new componentStubs_1.ComponentNodeStub(config);
            allocateNodeId(result);
            this.currentPage.appendChild(result);
            return result;
        };
        // @ts-ignore
        PluginApiStub.prototype.createRectangle = function () {
            var result = new componentStubs_1.RectangleNodeStub(config);
            allocateNodeId(result);
            this.currentPage.appendChild(result);
            return result;
        };
        // @ts-ignore
        PluginApiStub.prototype.createText = function () {
            var result = new componentStubs_1.TextNodeStub(config);
            allocateNodeId(result);
            this.currentPage.appendChild(result);
            return result;
        };
        PluginApiStub.prototype.createConnector = function () {
            var result = new componentStubs_1.ConnectorNodeStub(config);
            allocateNodeId(result);
            this.currentPage.appendChild(result);
            return result;
        };
        PluginApiStub.prototype.getStyleById = function (id) {
            if (styleBasics.styles.has(id)) {
                return styleBasics.styles.get(id);
            }
            return null;
        };
        PluginApiStub.prototype.getLocalPaintStyles = function () {
            return styleBasics.paintStyles;
        };
        PluginApiStub.prototype.getLocalEffectStyles = function () {
            return styleBasics.effectStyles;
        };
        PluginApiStub.prototype.getLocalTextStyles = function () {
            return styleBasics.textStyles;
        };
        PluginApiStub.prototype.getLocalGridStyles = function () {
            return styleBasics.gridStyles;
        };
        // @ts-ignore
        PluginApiStub.prototype.createPaintStyle = function () {
            var style = new PaintStyleStub(styleBasics);
            allocateStyleId(style);
            styleBasics.styles.set(style.id, style);
            styleBasics.paintStyles.push(style);
            return style;
        };
        // @ts-ignore
        PluginApiStub.prototype.createEffectStyle = function () {
            var style = new EffectStyleStub(styleBasics);
            allocateStyleId(style);
            styleBasics.styles.set(style.id, style);
            styleBasics.effectStyles.push(style);
            return style;
        };
        // @ts-ignore
        PluginApiStub.prototype.createTextStyle = function () {
            var style = new TextStyleStub(styleBasics);
            allocateStyleId(style);
            styleBasics.styles.set(style.id, style);
            styleBasics.textStyles.push(style);
            return style;
        };
        // @ts-ignore
        PluginApiStub.prototype.createGridStyle = function () {
            var style = new GridStyleStub(styleBasics);
            allocateStyleId(style);
            styleBasics.styles.set(style.id, style);
            styleBasics.gridStyles.push(style);
            return style;
        };
        PluginApiStub.prototype.createImage = function (bytes) {
            var hash = getImageHash();
            return {
                hash: hash,
                getBytesAsync: function () { return Promise.resolve(bytes); }
            };
        };
        PluginApiStub.prototype.union = function (nodes, parent, index) {
            var booleanOperation = this.booleanOperate(nodes, parent, index);
            booleanOperation.booleanOperation = "UNION";
            return booleanOperation;
        };
        PluginApiStub.prototype.intersect = function (nodes, parent, index) {
            var booleanOperation = this.booleanOperate(nodes, parent, index);
            booleanOperation.booleanOperation = "INTERSECT";
            return booleanOperation;
        };
        PluginApiStub.prototype.subtract = function (nodes, parent, index) {
            var booleanOperation = this.booleanOperate(nodes, parent, index);
            booleanOperation.booleanOperation = "SUBTRACT";
            return booleanOperation;
        };
        PluginApiStub.prototype.exlude = function (nodes, parent, index) {
            var booleanOperation = this.booleanOperate(nodes, parent, index);
            booleanOperation.booleanOperation = "EXCLUDE";
            return booleanOperation;
        };
        PluginApiStub.prototype.booleanOperate = function (nodes, parent, index) {
            if (config.simulateErrors && (!nodes || nodes.length === 0)) {
                throw new Error("Error: First argument must be an array of at least one node");
            }
            var booleanOperation = new componentStubs_1.BooleanOperationNodeStub(config);
            allocateNodeId(booleanOperation);
            nodes.forEach(function (node) { return booleanOperation.appendChild(node); });
            if (index) {
                parent.insertChild(index, booleanOperation);
            }
            else {
                parent.appendChild(booleanOperation);
            }
            booleanOperation.parent = parent;
            return booleanOperation;
        };
        // @ts-ignore
        PluginApiStub.prototype.group = function (nodes, parent, index) {
            if (config.simulateErrors && (!nodes || nodes.length === 0)) {
                throw new Error("Error: First argument must be an array of at least one node");
            }
            var group = new componentStubs_1.GroupNodeStub(config);
            allocateNodeId(group);
            nodes.forEach(function (node) { return group.appendChild(node); });
            if (index) {
                parent.insertChild(index, group);
            }
            else {
                parent.appendChild(group);
            }
            group.parent = parent;
            return group;
        };
        // @ts-ignore
        PluginApiStub.prototype.loadFontAsync = function (fontName) {
            if (fonts_1.Fonts.isFontLoaded(fontName)) {
                return;
            }
            return new Promise(function (resolve) {
                fonts_1.Fonts.loadedFonts.push(fontName);
                resolve();
            });
        };
        PluginApiStub.prototype.listAvailableFontsAsync = function () {
            return Promise.resolve(fonts_1.Inter.concat(fonts_1.Roboto, fonts_1.Helvetica));
        };
        PluginApiStub.prototype.on = function (type, callback) {
            if (type === "selectionchange") {
                selectionChangeSubscribes.set(callback, componentStubs_1.selectionChangeSubject.subscribe(callback));
            }
            if (type === "currentpagechange") {
                currentPageChangeSubscribes.set(callback, currentPageChangeSubject.subscribe(callback));
            }
        };
        PluginApiStub.prototype.once = function (type, callback) {
            if (type === "selectionchange") {
                selectionChangeSubscribes.set(callback, componentStubs_1.selectionChangeSubject.pipe(operators_1.take(1)).subscribe(callback));
            }
            if (type === "currentpagechange") {
                currentPageChangeSubscribes.set(callback, currentPageChangeSubject.pipe(operators_1.take(1)).subscribe(callback));
            }
        };
        PluginApiStub.prototype.off = function (type, callback) {
            if (type === "selectionchange") {
                selectionChangeSubscribes.get(callback).unsubscribe();
            }
            if (type === "currentpagechange") {
                currentPageChangeSubscribes.get(callback).unsubscribe();
            }
        };
        PluginApiStub.prototype.getNodeById = function (id) {
            var _genNodeById = function (nodes, id) {
                for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
                    var node = nodes_1[_i];
                    if (node.id === id) {
                        return node;
                    }
                    var childMatch = node.children && _genNodeById(node.children, id);
                    if (childMatch) {
                        return childMatch;
                    }
                }
            };
            return _genNodeById([figma.root], id) || null;
        };
        PluginApiStub.prototype.notify = function () {
            return { cancel: function () { } };
        };
        PluginApiStub.prototype.showUI = function () { };
        return PluginApiStub;
    }());
    // @ts-ignore
    return new PluginApiStub();
};
exports.createParentPostMessage = function (figma, isWithoutTimeout) { return function (message, target) {
    if (figma.ui.onmessage) {
        var call = function () {
            // @ts-ignore
            figma.ui.onmessage(message.pluginMessage, { origin: null });
        };
        if (isWithoutTimeout) {
            call();
        }
        else {
            setTimeout(call, 0);
        }
    }
    else {
        var call = function () {
            // @ts-ignore
            figma.ui._listeners.forEach(function (cb) {
                cb(message.pluginMessage, { origin: null });
            });
        };
        if (isWithoutTimeout) {
            call();
        }
        else {
            setTimeout(call, 0);
        }
    }
}; };
//# sourceMappingURL=stubs.js.map