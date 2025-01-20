import yargs from "yargs";

yargs
  .usage("pky <command> [args]")
  .version("1.3.0")
  .command(["install", "i"], "Install the dependencies", (argvs) =>
    console.log(argvs),
  ).argv;

// console.log(yargs.argv);
