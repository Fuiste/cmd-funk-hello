# Command Funk Hello World

This is a small command line tool built with [cmd-funk](https://github.com/Fuiste/cmd-funk).

## Installation

While you _could_ install this globally, its probably more helpful to just clone it and play around...

```bash
# If you haven't yet, install yarn
npm install -g yarn

# Clone the repo
git clone https://github.com/Fuiste/cmd-funk-hello.git
cd cmd-funk-hello
```

## Implementation

This is the full hello world CLI:

```javascript
import {
  SimpleCommandMap,
  Marshallers,
  SimpleCommand,
  Logger,
  handleCommand,
} from "cmd-funk";

const sayHello = (cmd: SimpleCommand) => {
  Logger.debug(`Running command ${cmd.cmd}`);
  return "Hello World";
};

const BaseCommandMap: SimpleCommandMap = {
  hello: cmd => Marshallers.str(sayHello(cmd)),
  help: () =>
    Marshallers.help({
      hello: "Says hello",
    }),
};

Logger.greet("Howdy");
handleCommand(BaseCommandMap);
```

Try running the following commands from inside the repo folder:

```bash
yarn start hello
yarn start help
yarn start hello --silent
yarn start hello --outFile testFile
cat testFile
```

## What's going on here?

This is a very general overview, see the [main repo](https://github.com/Fuiste/cmd-funk) for more info.

### Command Maps

These are mappings from commands to their implementation. They _must_ include a `help` key, which provides some info about the operation of the command line.

### The `handleCommand` call

This is the most basic function of `cmd-funk`. It takes only a command map and an optional custom context, then parses and runs the command for you, calling a default output handler.

### The `Logger`

This is a logger provided by `cmd-funk`. It automatically silences itself when necessary, and uses a unified color scheme and format
