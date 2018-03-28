# ShoutReactNativeTS
This is the Shout base project for developing React Native apps in TypeScript for iOS and Android. This project is based off Ash Furrow's [fork of Microsoft's RNTS starter project](https://github.com/ashfurrow/TypeScript-React-Native-Starter).

## Running the solution
Once loaded, run `npm i` to get all dependencies installed, then run `react-native run-[ios|android]`.

## Testing
To test, run `npm test` in the root of the project.

## Emulation
Follow the React Native ["Building Projects with Native Code" instructions](https://facebook.github.io/react-native/docs/getting-started.html) to get emulation up and running on your OS.

## Regenerating icons
To regenerate the app icon, replace `icon.png` in the root with an updated `1024x1024` PNG file and run `app-icon generate`. This will only work on macOS and requires imagemagick (`brew install imagemagick`) and app-icon (`npm i -g app-icon`).