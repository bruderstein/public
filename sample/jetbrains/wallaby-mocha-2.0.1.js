var babel = require('babel');

module.exports = function (wallaby) {
    return {
        "files": [
            "style/calculator.css",
            {"pattern": "lib/jquery.js", "instrument": false},
            "src/*.js",
            "test/lib/chai.js",
            "test/helper/template.js"
        ],
        "tests": [
            "test/*MochaSpec.js"
        ],
        env: {
            type: 'node',
            runner: 'node'
        },
        debug: true,
        preprocessors: {
            'src/**/*.js': function (file) { return babel.transform(file.content, {sourceMap: true }) },
            'src/**/*.jsx': function (file) { return  babel.transform(file.content, {sourceMap: true }) }
        }
    };
};