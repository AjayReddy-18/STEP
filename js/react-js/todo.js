const { createElement, Component } = React;
const { createRoot } = ReactDOM;

class TaskItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const checkbox = createElement('input', {
      type: 'checkbox',
      checked: this.props.done,
      onChange: () => this.props.onToggle(this.props.taskId),
    });

    const label = createElement('label', null, `${this.props.task}`);

    return createElement('div', null, checkbox, label);
  }
}

class Tasks extends Component {
  constructor(props) {
    super(props);
  }

  createTask(i, task) {
    return createElement(TaskItem, {
      key: i,
      ...task,
      onToggle: this.props.onToggle,
    });
  }

  render() {
    return this.props.tasks.map((task, i) => this.createTask(i, task));
  }
}

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  onSubmit(task) {
    this.props.onEnter(task);
    this.setState({ value: '' });
  }

  handleKeyDown(event) {
    const task = event.target.value;
    if (event.key === 'Enter' && task) return this.onSubmit(task);
  }

  render() {
    const inputElement = createElement('input', {
      type: 'text',
      value: this.state.value,
      onChange: this.handleChange,
      onKeyDown: this.handleKeyDown,
    });

    return inputElement;
  }
}

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [], nextTaskId: 1 };
    this.onToggle = this.onToggle.bind(this);
    this.addItem = this.addItem.bind(this);
    this.sort = this.sort.bind(this);
  }

  toggleStatus(task) {
    return { ...task, done: !task.done };
  }

  onToggle(taskId) {
    this.setState((prev) => {
      const tasks = prev.tasks.map((task) =>
        task.taskId === taskId ? this.toggleStatus(task) : task
      );
      return { ...prev, tasks };
    });
  }

  addItem(task) {
    const newTask = { taskId: this.state.nextTaskId, task, done: false };
    const updatedTasks = [...this.state.tasks, newTask];
    const nextTaskId = this.state.nextTaskId + 1;
    const newState = { tasks: updatedTasks, nextTaskId };
    this.setState(newState);
  }

  sort() {
    const { tasks } = this.state;
    const sortedTasks = tasks.toSorted((a, b) => a.done - b.done);
    this.setState((prev) => ({ ...prev, tasks: sortedTasks }));
  }

  render() {
    const input = createElement(Input, { onEnter: this.addItem });
    const sortButton = createElement('button', { onClick: this.sort }, 'Sort');
    const tasks = createElement(Tasks, {
      tasks: this.state.tasks,
      onToggle: this.onToggle,
    });

    return createElement('div', null, input, sortButton, tasks);
  }
}

const container = document.getElementById('main_container');
const root = createRoot(container);
root.render(createElement(Todo));
