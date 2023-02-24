export interface CapMLPlugin {
    /**
   * Detect text in an image
   * @param options Options for text detection   
   */
  detectText(options: DetectTextOptions): Promise<TextDetection[]>;
}

export interface DetectTextOptions {
  filename: string;
  orientation?: ImageOrientation
}

export interface TextDetection {
  bottomLeft: [number, number]; // [x-coordinate, y-coordinate]
  bottomRight: [number, number]; // [x-coordinate, y-coordinate]
  topLeft: [number, number]; // [x-coordinate, y-coordinate]
  topRight: [number, number]; // [x-coordinate, y-coordinate]
  text: string;
}

export enum ImageOrientation {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
