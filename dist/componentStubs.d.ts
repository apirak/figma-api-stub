/// <reference types="plugin-typings" />
import { TConfig } from "./config";
import { Subject } from "rxjs";
export declare const selectionChangeSubject: Subject<unknown>;
export declare class RectangleNodeStub {
    private config;
    constructor(config: TConfig);
    type: string;
}
export declare class TextNodeStub {
    private config;
    constructor(config: TConfig);
    type: string;
    private _fontName;
    private _characters;
    private _textAutoResize;
    fontName: FontName;
    characters: string;
    textAutoResize: string;
    getRangeFontName(start: number, end: number): FontName | PluginAPI["mixed"];
    deleteCharacters(start: number, end: number): void;
    insertCharacters(start: number, characters: string, _useStyle?: "BEFORE" | "AFTER"): void;
}
export declare class TextSublayerNode {
    private config;
    readonly hasMissingFont: any;
    paragraphIndent: number;
    paragraphSpacing: number;
    fontSize: number | PluginAPI["mixed"];
    textCase: TextCase | PluginAPI["mixed"];
    textDecoration: TextDecoration | PluginAPI["mixed"];
    letterSpacing: LetterSpacing | PluginAPI["mixed"];
    hyperlink: HyperlinkTarget | null | PluginAPI["mixed"];
    private _fontName;
    private _characters;
    fontName: FontName;
    characters: string;
    constructor(config: TConfig);
    insertCharacters(start: number, characters: string, _useStyle?: "BEFORE" | "AFTER"): void;
    deleteCharacters(start: number, end: number): void;
    getRangeFontName(start: number, end: number): FontName | PluginAPI["mixed"];
}
export declare class ShapeWithTextNodeStub {
    private config;
    type: string;
    private _text;
    private _cornerRadius;
    shapeType: "SQUARE" | "ELLIPSE" | "ROUNDED_RECTANGLE" | "DIAMOND" | "TRIANGLE_UP" | "TRIANGLE_DOWN" | "PARALLELOGRAM_RIGHT" | "PARALLELOGRAM_LEFT" | "ENG_DATABASE" | "ENG_QUEUE" | "ENG_FILE" | "ENG_FOLDER";
    rotation: number;
    constructor(config: TConfig);
    readonly text: TextSublayerNode;
    readonly cornerRadius: number;
}
export declare class StickyNodeStub {
    private config;
    type: string;
    private _text;
    authorVisible: boolean;
    authorName: string;
    constructor(config: TConfig);
    readonly text: TextSublayerNode;
}
export declare class ConnectorNodeStub {
    private config;
    type: string;
    private _text;
    private _textBackground;
    private _cornerRadius;
    connectorLineType: "ELBOWED" | "STRAIGHT";
    connectorStart: any;
    connectorEnd: any;
    connectorStartStrokeCap: any;
    connectorEndStrokeCap: any;
    constructor(config: TConfig);
    readonly cornerRadius: any;
    readonly textBackground: any;
    readonly text: TextSublayerNode;
}
export declare class DocumentNodeStub {
    private config;
    type: string;
    children: any[];
    constructor(config: TConfig);
}
export declare class PageNodeStub {
    private config;
    type: string;
    children: any[];
    _selection: Array<SceneNode>;
    _backgrounds: Array<Paint>;
    constructor(config: TConfig);
    selection: SceneNode[];
    backgrounds: Paint[];
}
export declare class FrameNodeStub {
    private config;
    type: string;
    children: any[];
    constructor(config: TConfig);
}
export declare class GroupNodeStub {
    private config;
    constructor(config: TConfig);
    type: string;
    constraints: any;
}
export declare class BooleanOperationNodeStub {
    private config;
    constructor(config: TConfig);
    type: string;
    booleanOperation: "UNION" | "INTERSECT" | "SUBTRACT" | "EXCLUDE";
    expand: boolean;
}
export declare class ComponentNodeStub {
    private config;
    constructor(config: TConfig);
    type: string;
    key: string;
    children: any[];
    createInstance(): InstanceNodeStub;
}
export declare class InstanceNodeStub {
    private config;
    constructor(config: TConfig);
    type: string;
    children: any;
    mainComponent: null | ComponentNodeStub;
    _orig: ComponentNodeStub | null;
    detachInstance(): void;
}
