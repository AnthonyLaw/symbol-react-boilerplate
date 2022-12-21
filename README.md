# Symbol React Boilerplate

In the latest javascript sdk [Symbol-sdk v3](https://www.npmjs.com/package/symbol-sdk/v/3.0.0) is not compatible with React. To ensure developer having a smooth experience building Symbol in React. This boilerplate will save you some trouble and directly jump in and start.

The React project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with some of overwrite config to ensure using [Symbol-sdk v3](https://www.npmjs.com/package/symbol-sdk/v/3.0.0) without any issue. In addition, [ESLint rules](https://github.com/symbol/symbol/tree/dev/linters/javascript) from core team is added as well.

## Installation

1. Clone the project.

```
git clone https://github.com/AnthonyLaw/symbol-react-boilerplate my-new-project
```

2. Install the required dependencies.

```
cd my-new-project
npm install

sh init.sh # to update submodules
```

3. Start application.

```shell
npm start
```

4. Visit http://localhost:3000/#/ in your browser.

# test

```
npm run test
```

# lint

lint comment use for all file in [src](/nem/src/).
```
npm run lint
npm run lint:fix
```

# build

build react project
```
npm run build
```