This repository runs a simple test case of module cycles in ES6 through various transpilers.

If a transpiler correctly support cycles, the output code should run without erroring.

To build output:

```
node build.js
```

To run the demos:

```
node esperanto-output/importer.js
node transpiler-output/importer.js
node 6to5-output/importer.js
```
