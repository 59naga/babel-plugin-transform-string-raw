// dependencies
import template from 'babel-template';

// private
const defineName = '_stringRaw';
// quote from https://github.com/59naga/string-raw
const _stringRaw = `
(function () {
  for (var _len = arguments.length, substitutions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    substitutions[_key - 1] = arguments[_key];
  }
  var callSite = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var template = Array.from(callSite.raw);
  return template.map(function (chunk, i) {
    if (callSite.raw.length <= i) {
      return chunk;
    }
    return substitutions[i - 1] ? substitutions[i - 1] + chunk : chunk;
  }).join('');
});
`;

/**
* @module babel-plugin-transform-string-raw
* @returns {babelPlugin} unknown
*/
export default () => ({
  visitor: {
    CallExpression(path) {
      if (path.get('callee').matchesPattern('String.raw')) {
        path.replaceWith(template(`${defineName}($0)`)(path.node.arguments));
      }
    },
    Program: {
      exit(path) {
        for (const node of path.node.body) {
          const declaration = (node.declarations || [])[0] || {};
          const name = declaration.id && declaration.id.name;
          if (name === defineName) {
            return;
          }
        }

        const topNodes = [];
        topNodes.push(template(`var ${defineName} = String.raw || ${_stringRaw}`)());
        path.unshiftContainer('body', topNodes);
      },
    },
  },
});
