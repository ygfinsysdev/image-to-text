# Capacitor OCR Plugin

A plugin for Capacitor 4+ that performs image to text processing.

Apple's Vision Framework is used for iOS and MLKit's Vision Framework is used for Android. Web is not supported.

## Installation

TBA
```
npm install capacitor-ocr@github:dtarnawsky/capacitor-ocr
```

## Usage

There is one method `detectText` that takes a filename of an image and will return the text associated with it.

Add the following to your application:
```typescript
import { Ocr, TextDetections } from 'capacitor-ocr';

...

const data: TextDetections = await Ocr.detectText({ filename });
for (let detection of data.textDetections) {
    console.log(detection.text);
}
```

## Example

You can combine the use of the plugin `@capacitor/camera` to capture an image and then output text.

```
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Ocr, TextDetections } from 'capacitor-ocr';
```

and used like:

```typescript
const photo = await Camera.getPhoto({
   quality: 90,
   allowEditing: true,
   resultType: CameraResultType.Uri,
   source: CameraSource.Camera        
});

const data: TextDetections = await Ocr.detectText({ filename: photo.path });

for (let detection of data.textDetections) {
    console.log(detection.text);
}
```

A full sample application can be found [here](https://github.com/dtarnawsky/capacitor-ocr-example).

## iOS Usage
No additional setup is required to use this plugin in a iOS Capacitor project.

## Android Usage

Your project must include a `google-services.json` file stored in the Android project folder (usually `android/app`).

### Create Firebase Project and App

- Navigate to https://console.firebase.google.com/ and sign-in
- Click on `Add Project` and follow through the steps.
- Once the project is created, click on `android` icon to create an android app.
- Enter the package name - this should be the same as the package name of your app (You can find it in `android/app/AndroidManifest.xml`). 
- Click `Register App`
- Download `google-services.json`
- Save `google-services.json` in your project's `android/app` directory.

### Add Firebase SDK
The example project has this in place already, as do most starter Capacitor projects. Look in `build.gradle` and ensure `google-services.json` is loaded.

## API

<docgen-index>

* [`detectText(...)`](#detecttext)
* [Interfaces](#interfaces)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### detectText(...)

```typescript
detectText(options: DetectTextOptions) => Promise<TextDetections>
```

Detect text in an image

| Param         | Type                                                            | Description                |
| ------------- | --------------------------------------------------------------- | -------------------------- |
| **`options`** | <code><a href="#detecttextoptions">DetectTextOptions</a></code> | Options for text detection |

**Returns:** <code>Promise&lt;<a href="#textdetections">TextDetections</a>&gt;</code>

--------------------


### Interfaces


#### TextDetections

| Prop                 | Type                         |
| -------------------- | ---------------------------- |
| **`textDetections`** | <code>TextDetection[]</code> |


#### TextDetection

| Prop              | Type                          |
| ----------------- | ----------------------------- |
| **`bottomLeft`**  | <code>[number, number]</code> |
| **`bottomRight`** | <code>[number, number]</code> |
| **`topLeft`**     | <code>[number, number]</code> |
| **`topRight`**    | <code>[number, number]</code> |
| **`text`**        | <code>string</code>           |


#### DetectTextOptions

| Prop              | Type                                                          |
| ----------------- | ------------------------------------------------------------- |
| **`filename`**    | <code>string</code>                                           |
| **`orientation`** | <code><a href="#imageorientation">ImageOrientation</a></code> |


### Enums


#### ImageOrientation

| Members     | Value                |
| ----------- | -------------------- |
| **`Up`**    | <code>"UP"</code>    |
| **`Down`**  | <code>"DOWN"</code>  |
| **`Left`**  | <code>"LEFT"</code>  |
| **`Right`** | <code>"RIGHT"</code> |

</docgen-api>

## Compatibility

Images are expected to be in portrait mode only, i.e. with text facing up. It will try to process even otherwise, but note that it might result in gibberish.

| Feature                          | ios                         | android                     |
| -------------------------------- | --------------------------- | --------------------------- |
| ML Framework                     | CoreML Vision               | Firebase MLKit              |
| Text Detection with Still Images | Yes                         | Yes                         |
| Detects lines of text            | Yes                         | Yes                         |
| Bounding Coordinates for Text    | Yes                         | Yes                         |
| Image Orientation                | Yes (Up, Left, Right, Down) | Yes (Up, Left, Right, Down) |
| Skewed Text                      | Yes                         | Unreliable                  |
| Rotated Text (<~ 45deg)          | Yes                         | Yes (but with noise)        |
| On-Device                        | Yes                         | Yes                         |
| SDK/ios Version                  | ios 13.0 or newer           | Targets API level >= 16<br>Uses Gradle >= 4.1<br>com.android.tools.build:gradle >= v3.2.1<br>compileSdkVersion >= 28 |
| | | |


## License
Hippocratic License Version 2.0.

For more information, refer to LICENSE file
