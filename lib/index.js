"use strict";
var uglify = require("uglify-js");
var jdistsUtil = require("jdists-util");
module.exports = (function (content, attrs, scope) {
    if (!content) {
        return content;
    }
    return uglify.minify(content, {
        output: {
            ascii_only: jdistsUtil.isYes(attrs.ascii)
        }
    }).code;
});
