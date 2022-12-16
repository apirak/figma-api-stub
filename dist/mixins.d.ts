/// <reference types="plugin-typings" />
import { TConfig } from "./config";
export declare const isInsideInstance: (node: any) => any;
export declare const getChildrenMixinStub: (config: TConfig) => {
    new (): {
        children: any[];
        appendChild(item: any): void;
        insertChild(index: number, child: any): void;
        findAllWithCriteria<T extends ("RECTANGLE" | "TEXT" | "SHAPE_WITH_TEXT" | "ELLIPSE" | "STICKY" | "CONNECTOR" | "DOCUMENT" | "PAGE" | "FRAME" | "GROUP" | "BOOLEAN_OPERATION" | "COMPONENT" | "INSTANCE" | "SLICE" | "COMPONENT_SET" | "VECTOR" | "STAR" | "LINE" | "POLYGON" | "CODE_BLOCK" | "STAMP" | "WIDGET" | "EMBED" | "LINK_UNFURL" | "MEDIA")[]>(criteria: {
            types: T;
        }): any[];
        findAll(callback: any): any[];
        findOne(callback: any): any;
        findChild(callback: any): any;
        findChildren(callback: any): any[];
    };
};
export declare const getBaseNodeMixinStub: (config: TConfig) => {
    new (): {
        id: string;
        parent: (SliceNode & ChildrenMixin) | (FrameNode & ChildrenMixin) | (GroupNode & ChildrenMixin) | (ComponentSetNode & ChildrenMixin) | (ComponentNode & ChildrenMixin) | (InstanceNode & ChildrenMixin) | (BooleanOperationNode & ChildrenMixin) | (VectorNode & ChildrenMixin) | (StarNode & ChildrenMixin) | (LineNode & ChildrenMixin) | (EllipseNode & ChildrenMixin) | (PolygonNode & ChildrenMixin) | (RectangleNode & ChildrenMixin) | (TextNode & ChildrenMixin) | (StickyNode & ChildrenMixin) | (ConnectorNode & ChildrenMixin) | (ShapeWithTextNode & ChildrenMixin) | (CodeBlockNode & ChildrenMixin) | (StampNode & ChildrenMixin) | (WidgetNode & ChildrenMixin) | (EmbedNode & ChildrenMixin) | (LinkUnfurlNode & ChildrenMixin) | (MediaNode & ChildrenMixin) | (DocumentNode & ChildrenMixin) | (PageNode & ChildrenMixin);
        name: string;
        removed: boolean;
        relaunchData: {
            [command: string]: string;
        };
        pluginData: {
            [key: string]: string;
        };
        sharedPluginData: {
            [namespace: string]: {
                [key: string]: string;
            };
        };
        _orig: BaseNodeMixin;
        setPluginData(key: string, value: string): void;
        getPluginData(key: string): string;
        getPluginDataKeys(): string[];
        setSharedPluginData(namespace: string, key: string, value: string): void;
        getSharedPluginData(namespace: string, key: string): string;
        getSharedPluginDataKeys(namespace: string): string[];
        setRelaunchData(data: {
            [command: string]: string;
        }): void;
        getRelaunchData(): {
            [command: string]: string;
        };
        remove(): void;
    };
};
export declare const getLayoutMixinStub: (config: TConfig) => {
    new (): {
        layoutGrow: number;
        rescale(scale: number): void;
        absoluteTransform: [[number, number, number], [number, number, number]];
        relativeTransform: [[number, number, number], [number, number, number]];
        x: number;
        y: number;
        rotation: number;
        width: number;
        height: number;
        constrainProportions: boolean;
        layoutAlign: "CENTER" | "MIN" | "MAX" | "STRETCH" | "INHERIT";
        absoluteRenderBounds: Rect;
        resize(width: any, height: any): void;
        resizeWithoutConstraints(width: any, height: any): void;
    };
};
export declare class ExportMixinStub implements ExportMixin {
    exportSettings: ReadonlyArray<ExportSettings>;
    exportAsync(settings?: ExportSettings): Promise<Uint8Array>;
}
export declare class GeometryMixinStub implements GeometryMixin {
    private _fills;
    fills: PluginAPI["mixed"] | readonly Paint[];
    strokes: ReadonlyArray<Paint>;
    strokeWeight: number;
    strokeMiterLimit: number;
    strokeAlign: "CENTER" | "INSIDE" | "OUTSIDE";
    strokeCap: StrokeCap | PluginAPI["mixed"];
    strokeJoin: StrokeJoin | PluginAPI["mixed"];
    dashPattern: ReadonlyArray<number>;
    fillStyleId: string | PluginAPI["mixed"];
    strokeStyleId: string;
    strokeGeometry: VectorPaths;
    fillGeometry: VectorPaths;
    outlineStroke(): any;
}
