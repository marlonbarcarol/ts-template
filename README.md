This is a template for typescript projects.

## Usage:

```ts
import { template } from '@marlonbarcarol/ts-template';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis, dui sit amet suscipit sagittis, dolor nisl iaculis elit, vitae hendrerit arcu sapien vitae nunc.';

if (template.text === text) {
	console.info('Equal');
} else {
	console.info('Not equal');
}
```

### Debug

**VSCode example**
`F1` > `Debug: Toggle Auto Attach` > `Always` > inside vscode own terminal > `node --inspect ./node_modules/.bin/jest src/index.spec.ts`
