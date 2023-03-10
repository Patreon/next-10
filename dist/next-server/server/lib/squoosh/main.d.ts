/// <reference types="node" />
declare type RotateOperation = {
    type: 'rotate';
    numRotations: number;
};
declare type ResizeOperation = {
    type: 'resize';
    width: number;
};
export declare type Operation = RotateOperation | ResizeOperation;
export declare type Encoding = 'jpeg' | 'png' | 'webp';
export declare function processBuffer(buffer: Buffer, operations: Operation[], encoding: Encoding, quality: number): Promise<Buffer>;
export {};
