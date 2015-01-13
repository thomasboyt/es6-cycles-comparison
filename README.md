[![Build Status](https://travis-ci.org/thomasboyt/es6-cycles-comparison.svg?branch=master)](https://travis-ci.org/thomasboyt/es6-cycles-comparison)

This repository runs a simple test case of module cycles in ES6 through various transpilers. If
you're just curious about which are failing and which are passing, click the travis badge above.

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
