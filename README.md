# test-es6-const

I would like create 'app' which have definition of one constant defined by:

```js
const foo = 1;
```

and try to overwrite them by this code:

```js
foo = 2;
```

Result will be predictable - an error.

## Error definition

Browsers:

 - Google Chrome: `Uncaught TypeError: Assignment to constant variable.`
 - Opera: `Uncaught TypeError: Assignment to constant variable.`
 - Safari: `SyntaxError: Unexpected keyword 'const'. Const declarations are not supported in strict mode.`
 - Mozilla Firefox: `SyntaxError: invalid assignment to const foo`

Babel.js:

```
/usr/local/lib/node_modules/babel/lib/babel/util.js:55
      throw err;
            ^
SyntaxError: app/scripts/main.js: Line 5: "foo" is read-only
  3 | const foo = 1;
  4 |
> 5 | foo = 2; // throws: Uncaught TypeError: Assignment to constant variable.
    | ^
  6 |
  7 |
    at File.errorWithNode (/usr/local/lib/node_modules/babel/node_modules/babel-core/lib/transformation/file/index.js:488:13)
    at NodePath.errorWithNode (/usr/local/lib/node_modules/babel/node_modules/babel-core/lib/traversal/path/index.js:151:26)
    at NodePath.Scope (/usr/local/lib/node_modules/babel/node_modules/babel-core/lib/transformation/transformers/es6/constants.js:48:25)
    at NodePath.<anonymous> (/usr/local/lib/node_modules/babel/node_modules/babel-core/lib/traversal/visitors.js:221:17)
    at NodePath.call (/usr/local/lib/node_modules/babel/node_modules/babel-core/lib/traversal/path/context.js:56:28)
    at NodePath.visit (/usr/local/lib/node_modules/babel/node_modules/babel-core/lib/traversal/path/context.js:89:8)
    at TraversalContext.visitSingle (/usr/local/lib/node_modules/babel/node_modules/babel-core/lib/traversal/context.js:131:12)
    at TraversalContext.visit (/usr/local/lib/node_modules/babel/node_modules/babel-core/lib/traversal/context.js:147:19)
    at Function.traverse.node (/usr/local/lib/node_modules/babel/node_modules/babel-core/lib/traversal/index.js:76:17)
    at Object.traverse [as default] (/usr/local/lib/node_modules/babel/node_modules/babel-core/lib/traversal/index.js:55:14)
```
