'use strict';

var fs = require('fs');
var ___compiler_svelte_js = require('../compiler/svelte.js');

require.extensions[ '.html' ] = function ( module, filename ) {
	const { code } = ___compiler_svelte_js.compile( fs.readFileSync( filename, 'utf-8' ), {
		filename,
		generate: 'ssr'
	});
	return module._compile( code, filename );
};
//# sourceMappingURL=register.js.map
