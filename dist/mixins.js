"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInsideInstance = function (node) {
    if (!node.parent) {
        return;
    }
    return node.parent.type === "INSTANCE" || exports.isInsideInstance(node.parent);
};
exports.getChildrenMixinStub = function (config) {
    return /** @class */ (function () {
        function ChildrenMixinStub() {
        }
        ChildrenMixinStub.prototype.appendChild = function (item) {
            if (!this.children) {
                this.children = [];
            }
            if (item.parent) {
                item.parent.children = item.parent.children.filter(function (child) { return child !== item; });
            }
            if (config.simulateErrors && !item) {
                throw new Error("Error: empty child");
            }
            if (config.simulateErrors &&
                // @ts-ignore
                this.type === "DOCUMENT" &&
                item.type !== "PAGE") {
                throw new Error("Error: The root node cannot have children of type other than PAGE");
            }
            item.parent = this;
            this.children.push(item);
        };
        ChildrenMixinStub.prototype.insertChild = function (index, child) {
            if (!this.children) {
                this.children = [];
            }
            if (config.simulateErrors && !child) {
                throw new Error("Error: empty child");
            }
            // @ts-ignore
            if (config.simulateErrors && child.parent === this) {
                throw new Error("Error: Node already inside parent");
            }
            if (config.simulateErrors &&
                // @ts-ignore
                this.type === "DOCUMENT" &&
                child.type !== "PAGE") {
                throw new Error("Error: The root node cannot have children of type other than PAGE");
            }
            if (child.parent) {
                child.parent.children = child.parent.children.filter(function (_child) { return child !== _child; });
            }
            // @ts-ignore
            child.parent = this;
            this.children.splice(index, 0, child);
        };
        ChildrenMixinStub.prototype.findAllWithCriteria = function (criteria) {
            var typeLookup = new Set(criteria.types);
            return this.findAll(function () { return true; }).filter(function (child) {
                return typeLookup.has(child.type);
            });
        };
        ChildrenMixinStub.prototype.findAll = function (callback) {
            if (!this.children) {
                return [];
            }
            var matchingChildren = [];
            this.children.forEach(function (child) {
                if (callback(child)) {
                    matchingChildren.push(child);
                }
                if ("findAll" in child) {
                    matchingChildren.push.apply(matchingChildren, child.findAll(callback));
                }
            });
            return matchingChildren;
        };
        ChildrenMixinStub.prototype.findOne = function (callback) {
            var matches = this.findAll(callback);
            if (matches.length > 0) {
                return matches[0];
            }
            return null;
        };
        ChildrenMixinStub.prototype.findChild = function (callback) {
            if (!this.children) {
                return null;
            }
            return this.children.find(callback);
        };
        ChildrenMixinStub.prototype.findChildren = function (callback) {
            if (!this.children) {
                return null;
            }
            return this.children.filter(callback);
        };
        return ChildrenMixinStub;
    }());
};
exports.getBaseNodeMixinStub = function (config) {
    return /** @class */ (function () {
        function BaseNodeMixinStub() {
            // instance nodes that are cloned from components will have `_orig` set to
            // the value of the original node. This is used internally for inheriting
            // things like plugin data and relaunch data
            this._orig = null;
        }
        BaseNodeMixinStub.prototype.setPluginData = function (key, value) {
            if (!this.pluginData) {
                this.pluginData = {};
            }
            if (value === "") {
                delete this.pluginData[key];
            }
            else {
                this.pluginData[key] = value;
            }
        };
        BaseNodeMixinStub.prototype.getPluginData = function (key) {
            if (config.simulateErrors && this.removed) {
                throw new Error("The node with id " + this.id + " does not exist");
            }
            // first, try to retrieve the key from local plugin data
            if (this.pluginData && this.pluginData[key]) {
                return this.pluginData[key];
            }
            // if we don't find the key in local plugin data, try and retrieve it from
            // the original node it was cloned from, if it exists if
            if (this._orig) {
                return this._orig.getPluginData(key);
            }
            // otherwise, return nothing
            return;
        };
        BaseNodeMixinStub.prototype.getPluginDataKeys = function () {
            if (config.simulateErrors && this.removed) {
                throw new Error("The node with id " + this.id + " does not exist");
            }
            // get all local and inherited keys
            var localKeys = this.pluginData ? Object.keys(this.pluginData) : [];
            var inheritedKeys = this._orig ? this._orig.getPluginDataKeys() : [];
            // combine them into one list and de-dupe any copies
            var combinedKeys = Array.from(new Set(localKeys.concat(inheritedKeys)));
            return combinedKeys;
        };
        BaseNodeMixinStub.prototype.setSharedPluginData = function (namespace, key, value) {
            if (!this.sharedPluginData) {
                this.sharedPluginData = {};
            }
            if (!this.sharedPluginData[namespace]) {
                this.sharedPluginData[namespace] = {};
            }
            if (value === "") {
                delete this.sharedPluginData[namespace][key];
                // if (Object.keys(this.sharedPluginData[namespace]).length === 0) {
                //   delete this.sharedPluginData[namespace];
                // }
            }
            else {
                this.sharedPluginData[namespace][key] = value;
            }
        };
        BaseNodeMixinStub.prototype.getSharedPluginData = function (namespace, key) {
            // first, try to retrieve the key from local plugin data
            if (this.sharedPluginData &&
                this.sharedPluginData[namespace] &&
                this.sharedPluginData[namespace][key]) {
                return this.sharedPluginData[namespace][key];
            }
            // if we don't find the key in local plugin data, try and retrieve it from
            // the original node it was cloned from, if it exists if
            if (this._orig) {
                return this._orig.getSharedPluginData(namespace, key);
            }
            // otherwise, return nothing
            return;
        };
        BaseNodeMixinStub.prototype.getSharedPluginDataKeys = function (namespace) {
            // get all local and inherited keys
            var localKeys = this.sharedPluginData && this.sharedPluginData[namespace]
                ? Object.keys(this.sharedPluginData[namespace])
                : [];
            var inheritedKeys = this._orig
                ? this._orig.getSharedPluginDataKeys(namespace)
                : [];
            // combine them into one list and de-dupe any copies
            var combinedKeys = Array.from(new Set(localKeys.concat(inheritedKeys)));
            return combinedKeys;
        };
        BaseNodeMixinStub.prototype.setRelaunchData = function (data) {
            this.relaunchData = data;
        };
        BaseNodeMixinStub.prototype.getRelaunchData = function () {
            return this.relaunchData || {};
        };
        BaseNodeMixinStub.prototype.remove = function () {
            var _this = this;
            this.removed = true;
            if (config.simulateErrors && exports.isInsideInstance(this)) {
                throw new Error("Error: can't remove item");
            }
            if (this.parent) {
                // @ts-ignore
                this.parent.children = this.parent.children.filter(function (child) { return child !== _this; });
            }
        };
        return BaseNodeMixinStub;
    }());
};
exports.getLayoutMixinStub = function (config) {
    return /** @class */ (function () {
        function LayoutMixinStub() {
        }
        LayoutMixinStub.prototype.rescale = function (scale) {
            if (config.simulateErrors && scale < 0.01) {
                throw new Error('Error: in rescale: Expected "scale" to have value >= 0.01');
            }
            this.width = this.width * scale;
            this.height = this.height * scale;
        };
        LayoutMixinStub.prototype.resize = function (width, height) {
            if (config.simulateErrors && exports.isInsideInstance(this)) {
                throw new Error("Error: can't change layout inside item");
            }
            if (config.simulateErrors && width < 0.01) {
                throw new Error('Error: in resize: Expected "width" to have value >= 0.01');
            }
            if (config.simulateErrors && height < 0.01) {
                throw new Error('Error: in resize: Expected "height" to have value >= 0.01');
            }
            this.width = width;
            this.height = height;
        };
        LayoutMixinStub.prototype.resizeWithoutConstraints = function (width, height) {
            this.width = width;
            this.height = height;
        };
        return LayoutMixinStub;
    }());
};
var ExportMixinStub = /** @class */ (function () {
    function ExportMixinStub() {
    }
    ExportMixinStub.prototype.exportAsync = function (settings) {
        // "exportAsync" is not implemented in stubs
        return Promise.resolve(new Uint8Array());
    };
    return ExportMixinStub;
}());
exports.ExportMixinStub = ExportMixinStub;
var GeometryMixinStub = /** @class */ (function () {
    function GeometryMixinStub() {
    }
    Object.defineProperty(GeometryMixinStub.prototype, "fills", {
        get: function () {
            return this._fills || [];
        },
        set: function (theFills) {
            this._fills = theFills;
        },
        enumerable: true,
        configurable: true
    });
    GeometryMixinStub.prototype.outlineStroke = function () {
        return null;
    };
    return GeometryMixinStub;
}());
exports.GeometryMixinStub = GeometryMixinStub;
//# sourceMappingURL=mixins.js.map