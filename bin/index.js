"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cmd_funk_1 = require("cmd-funk");
var sayHello = function (cmd) {
    cmd_funk_1.Logger.debug("Running command " + cmd.cmd);
    return "Hello World";
};
var BaseCommandMap = {
    hello: function (cmd) { return cmd_funk_1.Marshallers.str(sayHello(cmd)); },
    help: function () {
        return cmd_funk_1.Marshallers.help({
            hello: "Says hello",
        });
    },
};
cmd_funk_1.Logger.greet("Howdy");
cmd_funk_1.handleCommand(BaseCommandMap);
//# sourceMappingURL=index.js.map