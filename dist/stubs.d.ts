/// <reference types="plugin-typings" />
import { TConfig } from "./config";
export declare const createFigma: (paramConfig: TConfig) => PluginAPI;
export declare const createParentPostMessage: (figma: PluginAPI, isWithoutTimeout?: boolean) => (message: {
    pluginMessage: any;
}, target: string) => void;
