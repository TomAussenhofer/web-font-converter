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

# Example Usage after creation in .css / .sass / .scss
```css
@font-face {
  font-family: 'My Font';
  src: url('../assets/fonts/MyFont/MyFont-Regular.ttf') format('truetype');
  src: local('My Font'),
       local('MyFont-Regular'),
       url(../assets/fonts/MyFont/MyFont-Regular.woff2) format('woff2'),
       url(../assets/fonts/MyFont/MyFont-Regular.woff) format('woff'),
       url(../assets/fonts/MyFont/MyFont-Regular.ttf) format('truetype');
  font-weight: normal;
  font-style: normal;
}
```

# Credits
The dependant npm packages for conversion were created by Vitaly Puzrin.
This wrapper was written by myself, Tom Außenhofer.