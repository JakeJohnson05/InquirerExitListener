# InquirerExitListener

Adds listeners for exit events. *Most commonly needed for inquirer prompts.*

Listens for `ctrl + c` and `escape` to add necessary new lines in output for next prompt.

## Install

```console
$ npm install JakeJohnson05/InquirerExitListener
```

## Usage

```js
require('inquirer-exit-listener');

// Now listening for close events
```

or call the exit function directly


```js
const exitFunction = require('inquirer-exit-listener');

// Now listening for close events

// Call exitFunction() to programmatically end process
exitFunction();
// OR
exitFunction(1);
```

## Windows

If you're on Windows, do yourself a favor and use [Windows Terminal](https://github.com/microsoft/terminal) instead of `cmd.exe`.
