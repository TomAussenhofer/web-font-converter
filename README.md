# Purpose

This software creates fonts for the web based on a .ttf font file.
Currently this program supports creating several font types at once (.woff, .woff2, .eot). It is a wrapper software which uses npm packages.

# Installation
```javascript
npm install --save-dev https://github.com/Pinguinmann/web-font-converter.git
```

# Commands
Syntax:
```javascript
web-font-converter srcFilePath.ttf optionalDestinationFilePathWithoutFileAssociation
```
<br>

For example

```javascript
web-font-converter ./assets/fonts/MyFont.ttf
```
<br>

or

```javascript
web-font-converter ./assets/fonts/MyFont.ttf ./assets/fonts/MyNewFontName
```

# Credits
The dependant npm packages for conversion are created by Vitaly Puzrin.
This wrapper was written by myself, Tom Außenhofer.