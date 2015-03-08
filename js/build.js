// Build Config
// https://github.com/requirejs/example-multipage/blob/master/tools/build.js
// https://github.com/jrburke/r.js/blob/master/build/example.build.js
({
  mainConfigFile : 'src/config.js',
  baseUrl: 'src',
  dir: 'build',
  optimize: 'uglify',
  wrapShim: true,
  skipDirOptimize: true,
  removeCombined: true,
  paths: {
    'jquery': 'empty:' // http://requirejs.org/docs/optimization.html#empty
  },
  modules: [
    {
      name: 'main'
    }
  ]
})