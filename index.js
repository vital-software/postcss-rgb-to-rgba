const postcss = require('postcss');

module.exports = postcss.plugin('postcss-rgb-to-rgba', function() {
    /**
    * CSS rule handler
    *
    * @param  {object} declaration CSS declaration
    * @param  {object} result PostCSS Result object
    */
    const convertRGBtoRGBA = (declaration) => {
        let input = declaration.value;

        const newValue = input.replace(/rgba\(rgb\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})\),\s?(\d)?(\.\d)?\)/, 'rgba($1, $2, $3, $4$5)');

        declaration.replaceWith({ prop: declaration.prop, value: newValue });
    };

    // Return PostCSS function
    return function(css, result) {
        css.walkDecls(function(declaration) {
            // Only process rgba declaration values
            if (typeof declaration.value === 'undefined' || declaration.value.indexOf('rgba') === -1) {
                return;
            }

            convertRGBtoRGBA(declaration, result);
        });
    };
});
