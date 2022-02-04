# ts-template

This is a template for typescript projects.

## Package usage

```ts
// THIS WHOLE BLOCK IS JUST A PLACEHOLDER
// -- START:PLACEHOLDER

import { template } from '@/index';

const text =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis, dui sit amet suscipit sagittis, dolor nisl iaculis elit, vitae hendrerit arcu sapien vitae nunc.';

if (template.text === text) {
	console.info('Equal');
} else {
	console.info('Not equal');
}
// -- END:PLACEHOLDER
```

## Development

### Installation

Please make sure to have installed the project husky hooks as well as its dependencies by running the command below

```zsh
 make install
```

### Project commands

```zsh
 make install # installs husky hooks and npm dependencies.
 make run # runs the application from src/index.ts
 make test # runs testing on .spec.ts files
 make test.watch # runs testing watcher on .spec.ts files
 make code.fix # runs prettier, eslint and type check files
 make clean # cleans the project of cache and build files
 make changelog.preview # dry-runs the CHANGELOG.md generation as well as the package.json version bumping
 make changelog # generates the CHANGELOG.md and bumps package.json versioning
 make npm.publish.preview # dry-runs the gonna be published npm package built
 make npm.publish # publishes on npm the package built

 # A reminder that you may as well combo Makefile commands
 make clean code.fix run test
```

### Debug

**VSCode example**
`F1` > `Debug: Toggle Auto Attach` > `Always` > inside vscode own terminal > `node --inspect ./node_modules/.bin/jest src/index.spec.ts`
