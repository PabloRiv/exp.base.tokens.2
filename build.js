// const StyleDictionary = require('style-dictionary');
// const config = require('./config.json');

import StyleDictionary from 'style-dictionary';
import config from './config.json';



// Register custom px to rem transform
StyleDictionary.registerTransform({
  name: 'size/pxToRem',
  type: 'value',
  matcher: function (prop) {
    // Check if the value ends in 'px'
    return prop.value && prop.value.endsWith('px');
  },
  transformer: function (prop) {
    // Convert px to rem using a base size of 16
    const baseFontSize = 16;
    const pxValue = parseFloat(prop.value);
    return `${pxValue / baseFontSize}rem`;
  }
});

// Extend the Style Dictionary with the loaded JSON config
StyleDictionary.extend(config).buildAllPlatforms();
