const deviceName = 'Ajays-Laptop';
let pwd = '~';

function exit() {
  return '[Process completed]';  
}

function echo(args) {
  return args.join('');
}

function cd(args) {
  pwd = args.join('');
}

function unknownCommand(command) {
  return 'bush: command not found: ' + command;
}

function read() {
  const currentDir = pwd.split('/').at(-1);
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
    case 'pwd':
      return pwd;
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