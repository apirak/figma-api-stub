/// <reference types="plugin-typings" />
import { TConfig } from "./config";
declare type StyleBasics = {
    styles: Map<string, BaseStyle>;
    paintStyles: any[];
    effectStyles: any[];
    textStyles: any[];
    gridStyles: any[];
};
export declare const getBaseStyleStub: (config: TConfig) => {
    new (styleBasics: StyleBasics): {
        styleBasics: StyleBasics;
        id: string;
        type: StyleType;
        name: string;
        description: string;
        remote: boolean;
        key: string;
        documentationLinks: readonly DocumentationLink[];
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
        setPluginData(key: string, value: string): void;
        getPluginData(key: string): string;
        getPluginDataKeys(): string[];
        setSharedPluginData(namespace: string, key: string, value: string): void;
        getSharedPluginData(namespace: string, key: string): string;
        getSharedPluginDataKeys(namespace: string): string[];
        remove(): void;
        getPublishStatusAsync(): Promise<PublishStatus>;
    };
};
export declare const getPaintStyleStub: (config: TConfig) => {
    new (styleBasics: StyleBasics): {
        type: StyleType;
        paints: readonly Paint[];
        remove(): void;
        styleBasics: StyleBasics;
        id: string;
        name: string;
        description: string;
        remote: boolean;
        key: string;
        documentationLinks: readonly DocumentationLink[];
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
        setPluginData(key: string, value: string): void;
        getPluginData(key: string): string;
        getPluginDataKeys(): string[];
        setSharedPluginData(namespace: string, key: string, value: string): void;
        getSharedPluginData(namespace: string, key: string): string;
        getSharedPluginDataKeys(namespace: string): string[];
        getPublishStatusAsync(): Promise<PublishStatus>;
    };
};
export declare const getEffectStyleStub: (config: TConfig) => {
    new (styleBasics: StyleBasics): {
        type: StyleType;
        effects: readonly Effect[];
        remove(): void;
        styleBasics: StyleBasics;
        id: string;
        name: string;
        description: string;
        remote: boolean;
        key: string;
        documentationLinks: readonly DocumentationLink[];
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
        setPluginData(key: string, value: string): void;
        getPluginData(key: string): string;
        getPluginDataKeys(): string[];
        setSharedPluginData(namespace: string, key: string, value: string): void;
        getSharedPluginData(namespace: string, key: string): string;
        getSharedPluginDataKeys(namespace: string): string[];
        getPublishStatusAsync(): Promise<PublishStatus>;
    };
};
export declare const getTextStyleStub: (config: TConfig) => {
    new (styleBasics: StyleBasics): {
        type: StyleType;
        fontName: FontName;
        fontSize: number;
        letterSpacing: LetterSpacing;
        lineHeight: LineHeight;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: TextCase;
        textDecoration: TextDecoration;
        remove(): void;
        styleBasics: StyleBasics;
        id: string;
        name: string;
        description: string;
        remote: boolean;
        key: string;
        documentationLinks: readonly DocumentationLink[];
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
        setPluginData(key: string, value: string): void;
        getPluginData(key: string): string;
        getPluginDataKeys(): string[];
        setSharedPluginData(namespace: string, key: string, value: string): void;
        getSharedPluginData(namespace: string, key: string): string;
        getSharedPluginDataKeys(namespace: string): string[];
        getPublishStatusAsync(): Promise<PublishStatus>;
    };
};
export declare const getGridStyleStub: (config: TConfig) => {
    new (styleBasics: StyleBasics): {
        type: StyleType;
        layoutGrids: readonly LayoutGrid[];
        remove(): void;
        styleBasics: StyleBasics;
        id: string;
        name: string;
        description: string;
        remote: boolean;
        key: string;
        documentationLinks: readonly DocumentationLink[];
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
        setPluginData(key: string, value: string): void;
        getPluginData(key: string): string;
        getPluginDataKeys(): string[];
        setSharedPluginData(namespace: string, key: string, value: string): void;
        getSharedPluginData(namespace: string, key: string): string;
        getSharedPluginDataKeys(namespace: string): string[];
        getPublishStatusAsync(): Promise<PublishStatus>;
    };
};
export {};
