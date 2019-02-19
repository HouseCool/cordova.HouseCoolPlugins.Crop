/* global cordova */
var exec = require('cordova/exec');

exports.cropImage = function cropImage (success, fail, image, options) {
  options = options || {}
  options.quality = options.quality || 100
  options.targetWidth = options.targetWidth || -1
  options.targetHeight = options.targetHeight || -1
  exec(success, fail, 'CropPlugin', 'cropImage', [image, options])
}

