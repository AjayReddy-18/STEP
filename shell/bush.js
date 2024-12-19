const deviceName = 'Ajays-Laptop';
let currentDir = '~';

function exit() {
  return '[Process completed]';  
}

function echo(args) {
  return args.join('');
}

function cd(args) {
  currentDir = args.join('');
}

function unknownCommand(command) {
  return 'unknown command ' + command;
}

function read() {
  return prompt(deviceName + ' ' + currentDir + ' %');
}

function evaluate(prompt) {
  const [command, ...args] = prompt;

  switch (command) {
    case 'exit':
      return exit();
    case 'echo':
      return echo(args);
    case 'cd':
      return cd(args);
    default:
      return unknownCommand(command);
  }
}

function print(result) {
  if (result !== undefined) {
    console.log(result);
  }
}

function loop() {
  const prompt = read();
  const result = evaluate(prompt.split(' '));
  print(result);
  return prompt !== 'exit';
}

function repl() {
  while (loop());
}

repl();