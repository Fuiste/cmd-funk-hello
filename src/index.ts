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
