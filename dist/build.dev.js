"use strict";

// build.js
require('esbuild').build({
  entryPoints: ['index.tsx'],
  bundle: true,
  outfile: 'docs/bundle.js',
  loader: {
    '.tsx': 'tsx',
    '.ts': 'ts'
  },
  define: {
    'process.env.NODE_ENV': '"development"'
  }
})["catch"](function () {
  return process.exit(1);
});