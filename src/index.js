/* global __moduleName */
let fetch;
let translate;
let bundle;

if (typeof window !== 'undefined') {
  fetch = load => {
    return System.import('./sass-inject', { name: __moduleName })
      .then(inject => inject.default(load));
  };
} else {
  // setting format = 'defined' means we're managing our own output
  translate = load => {
    load.metadata.format = 'defined';
  };
  bundle = function bundler(loads, opts) {
    return System.import('./sass-builder', { name: __moduleName })
      .then(builder => builder.default.call(System, loads, opts));
  };
}

export { fetch, translate, bundle };
if (System.transpiler === false) {
    load.metadata.format = 'amd';
    return 'def' + 'ine(function() {\nreturn ' + JSON.stringify(load.source) + ';\n});';
  }

  load.metadata.format = 'esm';
  return 'export default ' + JSON.stringify(load.source) + ';';
