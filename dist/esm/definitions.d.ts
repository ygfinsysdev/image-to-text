export interface CapMLPlugin {
    /**
   * Detect text in an image
   * @param options Options for text detection
   */
    detectText(options: detectTextOptions): Promise<TextDetection[]>;
}
export interface detectTextOptions {
    filename: string;
    orientation?: ImageOrientation;
}
export interface TextDetection {
    bottomLeft: [number, number];
    bottomRight: [number, number];
    topLeft: [number, number];
    topRight: [number, number];
    text: string;
}
export declare enum ImageOrientation {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}
