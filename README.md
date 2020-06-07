# @jlam55555-playground/npm-typescript
Example of an NPM package built with TypeScript (and consumable by TypeScript NPM modules).

This builds off of [@jlam55555/npm-hello-world][1]; a sample NPM package that consumes this is [@jlam55555/npm-typescript-consumer][2].

### Prerequisites
Make sure `git` and `npm` are installed. Also make sure that you have authenticated to an NPM registry (see [the earlier example][1] for a way to do this with Git's NPM package registry).

### Setting up NPM and Git
```shell script
$ mkdir npm-typescript
$ cd npm-typescript
$ npm init                      # generates package.json
```
Also set up Git and point to your remote repository.
```shell script
$ git init
$ git remote add origin git@github.com:jlam55555-playground/npm-typescript
```

### Setting up TypeScript
```shell script
$ npm i typescript --save-dev   # installs and saves in
                                # package.json under devDependencies
$ tsc --init                    # generates tsconfig.json
```
Note that TypeScript is installed as a devDependency so that it will not be installed when this package is consumed. `tsc --init` creates a `tsconfig.json` file with plenty of options. For this application, we'd like to make sure we have at least the following simple options:
```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "sourceMap": true,
    "outDir": "./dist"
  },
  "include": [
    "./src/**/*.ts"
  ]
}
```
- `target`: JavaScript language specification for transpiled TypeScript
- `module`: module loading type; `commonjs` or `node` are compatible with most Node packages and `require()`
- `sourceMap`: generate TypeScript definition files, which can be used for TypeScript linting

This will compile all of the source files in `src/` to `dist/`. Since the NPM module doesn't need the source TypeScript files, we can add `src` to `.npmignore`.

The last step is to make sure that the entrypoint is specified in `package.json`. E.g., if your main entry point is `src/main.ts`, then you should set:
```json
"main": "dist/main.js"
```
in `package.json`. Now the NPM package is set up, and you can publish it like in [the previous example][1].

### Setting up multiple (nested) entrypoints
In the case that you want to export multiple files from another project, e.g.:
```js
import { MainClass } from '@jlam55555-playground/npm-typescript';
import { Class1 } from '@jlam55555-playground/npm-typescript/class2';
import { Class2, method1 } from '@jlam55555-playground/npm-typescript/class3';
```
then each of the entrypoints should be in their own subdirectory, with a `package.json` specifying the entrypoint file. This should be pretty self-explanatory once you see the structure of it in this repo.

[1]: https://www.github.com/jlam55555-playground/npm-hello-world
[2]: https://www.github.com/jlam55555-playground/npm-typescript-consumer
