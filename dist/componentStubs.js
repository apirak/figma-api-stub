"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fonts_1 = require("./fonts");
var nanoid_1 = require("nanoid");
var rxjs_1 = require("rxjs");
exports.selectionChangeSubject = new rxjs_1.Subject();
var RectangleNodeStub = /** @class */ (function () {
    function RectangleNodeStub(config) {
        this.config = config;
        this.type = "RECTANGLE";
    }
    return RectangleNodeStub;
}());
exports.RectangleNodeStub = RectangleNodeStub;
var defaultFont = { family: "Inter", style: "Regular" };
var TextNodeStub = /** @class */ (function () {
    function TextNodeStub(config) {
        this.config = config;
        this.type = "TEXT";
    }
    Object.defineProperty(TextNodeStub.prototype, "fontName", {
        get: function () {
            return this._fontName || defaultFont;
        },
        set: function (fontName) {
            if (this.config.simulateErrors && !fontName) {
                throw new Error("Error: fontName is undefined");
            }
            this._fontName = fontName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextNodeStub.prototype, "characters", {
        get: function () {
            return this._characters || "";
        },
        set: function (characters) {
            if (this.config.simulateErrors && !fonts_1.Fonts.isFontLoaded(this.fontName)) {
                throw new Error("Error: font is not loaded " + this.fontName.family + " " + this.fontName.style);
            }
            this._characters = characters;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextNodeStub.prototype, "textAutoResize", {
        get: function () {
            return this._textAutoResize;
        },
        set: function (value) {
            if (this.config.simulateErrors && !fonts_1.Fonts.isFontLoaded(this.fontName)) {
                throw new Error("Error: font is not loaded " + this.fontName.family + " " + this.fontName.style);
            }
            this._textAutoResize = value;
        },
        enumerable: true,
        configurable: true
    });
    TextNodeStub.prototype.getRangeFontName = function (start, end) {
        if (this.config.simulateErrors && start < 0) {
            throw new Error("Error: Expected \"start\" to have value >=0");
        }
        if (this.config.simulateErrors && end < 0) {
            throw new Error("Error: Expected \"end\" to have value >=0");
        }
        if (this.config.simulateErrors && end > this._characters.length) {
            throw new Error("Error: Range outside of available characters. 'start' must be less than node.characters.length and 'end' must be less than or equal to node.characters.length");
        }
        if (this.config.simulateErrors && end === start) {
            throw new Error("Error: Empty range selected. 'end' must be greater than 'start'");
        }
        return this._fontName || defaultFont;
    };
    TextNodeStub.prototype.deleteCharacters = function (start, end) {
        if (this.config.simulateErrors && !fonts_1.Fonts.isFontLoaded(this.fontName)) {
            throw new Error("Error: font is not loaded " + this.fontName.family + " " + this.fontName.style);
        }
        if (this.config.simulateErrors && start < 0) {
            throw new Error("Error: Expected \"start\" to have value >=0");
        }
        if (this.config.simulateErrors && end < 0) {
            throw new Error("Error: Expected \"end\" to have value >=0");
        }
        if (this.config.simulateErrors && end > this._characters.length) {
            throw new Error("Error: Cannot delete characters at index greater than the length of the text");
        }
        this._characters =
            this._characters.slice(start, end) +
                (end === this._characters.length ? "" : this._characters.slice(end + 1));
    };
    TextNodeStub.prototype.insertCharacters = function (start, characters, _useStyle) {
        if (_useStyle === void 0) { _useStyle = "BEFORE"; }
        if (this.config.simulateErrors && !fonts_1.Fonts.isFontLoaded(this.fontName)) {
            throw new Error("Error: font is not loaded " + this.fontName.family + " " + this.fontName.style);
        }
        if (this.config.simulateErrors && start < 0) {
            throw new Error("Error: Expected \"start\" to have value >=0");
        }
        if (this.config.simulateErrors && start > this._characters.length) {
            throw new Error("Error: Cannot insert characters at index greater than the length of the text");
        }
        this._characters = [
            this._characters.slice(0, start),
            characters,
            this._characters.slice(start)
        ].join("");
    };
    return TextNodeStub;
}());
exports.TextNodeStub = TextNodeStub;
var TextSublayerNode = /** @class */ (function () {
    function TextSublayerNode(config) {
        this.config = config;
    }
    Object.defineProperty(TextSublayerNode.prototype, "fontName", {
        get: function () {
            return this._fontName || defaultFont;
        },
        set: function (fontName) {
            if (this.config.simulateErrors && !fontName) {
                throw new Error("Error: fontName is undefined");
            }
            this._fontName = fontName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextSublayerNode.prototype, "characters", {
        get: function () {
            return this._characters || "";
        },
        set: function (characters) {
            if (this.config.simulateErrors && !fonts_1.Fonts.isFontLoaded(this.fontName)) {
                throw new Error("Error: font is not loaded " + this.fontName.family + " " + this.fontName.style);
            }
            this._characters = characters;
        },
        enumerable: true,
        configurable: true
    });
    TextSublayerNode.prototype.insertCharacters = function (start, characters, _useStyle) {
        if (_useStyle === void 0) { _useStyle = "BEFORE"; }
        if (this.config.simulateErrors && !fonts_1.Fonts.isFontLoaded(this._fontName)) {
            throw new Error("Error: font is not loaded " + this._fontName.family + " " + this._fontName.style);
        }
        if (this.config.simulateErrors && start < 0) {
            throw new Error("Error: Expected \"start\" to have value >=0");
        }
        if (this.config.simulateErrors && start > this._characters.length) {
            throw new Error("Error: Cannot insert characters at index greater than the length of the text");
        }
        this._characters = [
            this._characters.slice(0, start),
            characters,
            this._characters.slice(start)
        ].join("");
    };
    TextSublayerNode.prototype.deleteCharacters = function (start, end) {
        if (this.config.simulateErrors && !fonts_1.Fonts.isFontLoaded(this._fontName)) {
            throw new Error("Error: font is not loaded " + this._fontName.family + " " + this._fontName.style);
        }
        if (this.config.simulateErrors && start < 0) {
            throw new Error("Error: Expected \"start\" to have value >=0");
        }
        if (this.config.simulateErrors && end < 0) {
            throw new Error("Error: Expected \"end\" to have value >=0");
        }
        if (this.config.simulateErrors && end > this._characters.length) {
            throw new Error("Error: Cannot delete characters at index greater than the length of the text");
        }
        this._characters =
            this._characters.slice(start, end) +
                (end === this._characters.length ? "" : this._characters.slice(end + 1));
    };
    TextSublayerNode.prototype.getRangeFontName = function (start, end) {
        if (this.config.simulateErrors && start < 0) {
            throw new Error("Error: Expected \"start\" to have value >=0");
        }
        if (this.config.simulateErrors && end < 0) {
            throw new Error("Error: Expected \"end\" to have value >=0");
        }
        if (this.config.simulateErrors && end > this._characters.length) {
            throw new Error("Error: Range outside of available characters. 'start' must be less than node.characters.length and 'end' must be less than or equal to node.characters.length");
        }
        if (this.config.simulateErrors && end === start) {
            throw new Error("Error: Empty range selected. 'end' must be greater than 'start'");
        }
        return this._fontName || defaultFont;
    };
    return TextSublayerNode;
}());
exports.TextSublayerNode = TextSublayerNode;
var ShapeWithTextNodeStub = /** @class */ (function () {
    function ShapeWithTextNodeStub(config) {
        this.config = config;
        this.type = "SHAPE_WITH_TEXT";
        this._cornerRadius = 50;
        this.shapeType = "ELLIPSE";
        this.rotation = 0;
        this._text = new TextSublayerNode(this.config);
    }
    Object.defineProperty(ShapeWithTextNodeStub.prototype, "text", {
        get: function () {
            return this._text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShapeWithTextNodeStub.prototype, "cornerRadius", {
        get: function () {
            return this._cornerRadius;
        },
        enumerable: true,
        configurable: true
    });
    return ShapeWithTextNodeStub;
}());
exports.ShapeWithTextNodeStub = ShapeWithTextNodeStub;
var StickyNodeStub = /** @class */ (function () {
    function StickyNodeStub(config) {
        this.config = config;
        this.type = "STICKY";
        this.authorVisible = true;
        this.authorName = "";
        this._text = new TextSublayerNode(this.config);
    }
    Object.defineProperty(StickyNodeStub.prototype, "text", {
        get: function () {
            return this._text;
        },
        enumerable: true,
        configurable: true
    });
    return StickyNodeStub;
}());
exports.StickyNodeStub = StickyNodeStub;
var ConnectorNodeStub = /** @class */ (function () {
    function ConnectorNodeStub(config) {
        this.config = config;
        this.type = "CONNECTOR";
        this._text = new TextSublayerNode(config);
    }
    Object.defineProperty(ConnectorNodeStub.prototype, "cornerRadius", {
        get: function () {
            return this._cornerRadius;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectorNodeStub.prototype, "textBackground", {
        get: function () {
            return this._textBackground;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectorNodeStub.prototype, "text", {
        get: function () {
            return this._text;
        },
        enumerable: true,
        configurable: true
    });
    return ConnectorNodeStub;
}());
exports.ConnectorNodeStub = ConnectorNodeStub;
var DocumentNodeStub = /** @class */ (function () {
    function DocumentNodeStub(config) {
        this.config = config;
        this.type = "DOCUMENT";
        this.children = [];
    }
    return DocumentNodeStub;
}());
exports.DocumentNodeStub = DocumentNodeStub;
var PageNodeStub = /** @class */ (function () {
    function PageNodeStub(config) {
        this.config = config;
        this.type = "PAGE";
        this.children = [];
    }
    Object.defineProperty(PageNodeStub.prototype, "selection", {
        get: function () {
            return this._selection || [];
        },
        set: function (value) {
            this._selection = value;
            exports.selectionChangeSubject.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageNodeStub.prototype, "backgrounds", {
        get: function () {
            return (this._backgrounds || [
                {
                    type: "SOLID",
                    visible: true,
                    opacity: 1,
                    blendMode: "NORMAL",
                    color: {
                        r: 0.9607843160629272,
                        g: 0.9607843160629272,
                        b: 0.9607843160629272
                    }
                }
            ]);
        },
        set: function (value) {
            if (this.config.simulateErrors &&
                (value.length !== 1 || value[0].type !== "SOLID")) {
                throw new Error("Error: in set_backgrounds: Page backgrounds must be a single solid paint");
            }
            this._backgrounds = value;
        },
        enumerable: true,
        configurable: true
    });
    return PageNodeStub;
}());
exports.PageNodeStub = PageNodeStub;
var FrameNodeStub = /** @class */ (function () {
    function FrameNodeStub(config) {
        this.config = config;
        this.type = "FRAME";
        this.children = [];
    }
    return FrameNodeStub;
}());
exports.FrameNodeStub = FrameNodeStub;
var GroupNodeStub = /** @class */ (function () {
    function GroupNodeStub(config) {
        this.config = config;
        this.type = "GROUP";
    }
    Object.defineProperty(GroupNodeStub.prototype, "constraints", {
        set: function (value) {
            if (this.config.simulateErrors) {
                throw new Error("Error: Cannot add property constraints, object is not extensible");
            }
        },
        enumerable: true,
        configurable: true
    });
    return GroupNodeStub;
}());
exports.GroupNodeStub = GroupNodeStub;
var BooleanOperationNodeStub = /** @class */ (function () {
    function BooleanOperationNodeStub(config) {
        this.config = config;
        this.type = "BOOLEAN_OPERATION";
        this.expand = false;
    }
    return BooleanOperationNodeStub;
}());
exports.BooleanOperationNodeStub = BooleanOperationNodeStub;
function cloneChildren(node) {
    var clone = new node.constructor();
    for (var key in node) {
        if (typeof node[key] === "function") {
            clone[key] = node[key].bind(clone);
        }
        else {
            clone[key] = node[key];
        }
    }
    clone._orig = node;
    clone.pluginData = {};
    clone.sharedPluginData = {};
    if ("children" in node) {
        clone.children = node.children.map(function (child) { return cloneChildren(child); });
        clone.children.forEach(function (child) {
            child.parent = clone;
        });
    }
    return clone;
}
var ComponentNodeStub = /** @class */ (function () {
    function ComponentNodeStub(config) {
        this.config = config;
        this.type = "COMPONENT";
        this.key = nanoid_1.nanoid(40);
        this.children = [];
    }
    ComponentNodeStub.prototype.createInstance = function () {
        var _this = this;
        var instance = new InstanceNodeStub(this.config);
        instance.children = this.children.map(function (child) { return cloneChildren(child); });
        instance.children.forEach(function (child) {
            child.parent = _this;
        });
        // instance.pluginData = {};
        instance._orig = this;
        instance.mainComponent = this;
        return instance;
    };
    return ComponentNodeStub;
}());
exports.ComponentNodeStub = ComponentNodeStub;
var InstanceNodeStub = /** @class */ (function () {
    function InstanceNodeStub(config) {
        this.config = config;
        this.type = "INSTANCE";
    }
    InstanceNodeStub.prototype.detachInstance = function () {
        this.type = "FRAME";
    };
    return InstanceNodeStub;
}());
exports.InstanceNodeStub = InstanceNodeStub;
//# sourceMappingURL=componentStubs.js.map