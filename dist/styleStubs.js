"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBaseStyleStub = function (config) {
    return /** @class */ (function () {
        function BaseStyleStub(styleBasics) {
            this.styleBasics = styleBasics;
            this.remote = false;
        }
        BaseStyleStub.prototype.setPluginData = function (key, value) {
            if (!this.pluginData) {
                this.pluginData = {};
            }
            this.pluginData[key] = value;
        };
        BaseStyleStub.prototype.getPluginData = function (key) {
            if (config.simulateErrors && this.removed) {
                throw new Error("The style with id " + this.id + " does not exist");
            }
            if (!this.pluginData) {
                return;
            }
            return this.pluginData[key];
        };
        BaseStyleStub.prototype.getPluginDataKeys = function () {
            if (config.simulateErrors && this.removed) {
                throw new Error("The style with id " + this.id + " does not exist");
            }
            if (!this.pluginData) {
                return [];
            }
            return Object.keys(this.pluginData);
        };
        BaseStyleStub.prototype.setSharedPluginData = function (namespace, key, value) {
            if (!this.sharedPluginData) {
                this.sharedPluginData = {};
            }
            if (!this.sharedPluginData[namespace]) {
                this.sharedPluginData[namespace] = {};
            }
            this.sharedPluginData[namespace][key] = value;
        };
        BaseStyleStub.prototype.getSharedPluginData = function (namespace, key) {
            if (!this.sharedPluginData || !this.sharedPluginData[namespace]) {
                return;
            }
            return this.sharedPluginData[namespace][key];
        };
        BaseStyleStub.prototype.getSharedPluginDataKeys = function (namespace) {
            if (!this.sharedPluginData || !this.sharedPluginData[namespace]) {
                return;
            }
            return Object.keys(this.sharedPluginData[namespace]);
        };
        BaseStyleStub.prototype.remove = function () {
            this.removed = true;
            this.styleBasics.styles.delete(this.id);
        };
        BaseStyleStub.prototype.getPublishStatusAsync = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, "UNPUBLISHED"];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return BaseStyleStub;
    }());
};
exports.getPaintStyleStub = function (config) {
    var BaseStyleStub = exports.getBaseStyleStub(config);
    return /** @class */ (function (_super) {
        __extends(PaintStyleStub, _super);
        function PaintStyleStub(styleBasics) {
            var _this = _super.call(this, styleBasics) || this;
            // @ts-ignore
            _this.type = "PAINT";
            return _this;
        }
        PaintStyleStub.prototype.remove = function () {
            _super.prototype.remove.call(this);
            this.styleBasics.paintStyles.splice(this.styleBasics.paintStyles.indexOf(this), 1);
        };
        return PaintStyleStub;
    }(BaseStyleStub));
};
exports.getEffectStyleStub = function (config) {
    var BaseStyleStub = exports.getBaseStyleStub(config);
    return /** @class */ (function (_super) {
        __extends(EffectStyleStub, _super);
        function EffectStyleStub(styleBasics) {
            var _this = _super.call(this, styleBasics) || this;
            // @ts-ignore
            _this.type = "EFFECT";
            return _this;
        }
        EffectStyleStub.prototype.remove = function () {
            _super.prototype.remove.call(this);
            this.styleBasics.effectStyles.splice(this.styleBasics.effectStyles.indexOf(this), 1);
        };
        return EffectStyleStub;
    }(BaseStyleStub));
};
exports.getTextStyleStub = function (config) {
    var BaseStyleStub = exports.getBaseStyleStub(config);
    return /** @class */ (function (_super) {
        __extends(TextStyleStub, _super);
        function TextStyleStub(styleBasics) {
            var _this = _super.call(this, styleBasics) || this;
            // @ts-ignore
            _this.type = "TEXT";
            return _this;
        }
        TextStyleStub.prototype.remove = function () {
            _super.prototype.remove.call(this);
            this.styleBasics.textStyles.splice(this.styleBasics.textStyles.indexOf(this), 1);
        };
        return TextStyleStub;
    }(BaseStyleStub));
};
exports.getGridStyleStub = function (config) {
    var BaseStyleStub = exports.getBaseStyleStub(config);
    return /** @class */ (function (_super) {
        __extends(GridStyleStub, _super);
        function GridStyleStub(styleBasics) {
            var _this = _super.call(this, styleBasics) || this;
            // @ts-ignore
            _this.type = "GRID";
            return _this;
        }
        GridStyleStub.prototype.remove = function () {
            _super.prototype.remove.call(this);
            this.styleBasics.gridStyles.splice(this.styleBasics.gridStyles.indexOf(this), 1);
        };
        return GridStyleStub;
    }(BaseStyleStub));
};
//# sourceMappingURL=styleStubs.js.map