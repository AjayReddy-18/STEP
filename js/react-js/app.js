const { createElement, Component } = React;
const { createRoot } = ReactDOM;

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timesClicked: 0 };
  }

  increment() {
    this.setState((prev) => prev.timesClicked++);
  }

  reset() {
    this.setState({ timesClicked: 0 });
  }

  incrementButton() {
    return React.createElement(
      'button',
      { onClick: () => this.increment() },
      `Clicked ${this.state.timesClicked} times`
    );
  }

  resetButton() {
    return React.createElement(
      'button',
      { onClick: () => this.reset() },
      `Reset`
    );
  }

  render() {
    return [this.incrementButton(), this.resetButton()];
  }
}

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { elapsedTime: 0 };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((prev) => {
        return { elapsedTime: ++prev.elapsedTime };
      });
    }, 1000);
  }

  render() {
    return React.createElement('p', null, `${this.state.elapsedTime} seconds`);
  }
}

class List extends Component {
  constructor(props) {
    super(props);
    console.log('In List constructor');
  }

  render() {
    return createElement(
      'ul',
      null,
      this.props.items.map((item, i) => {
        return createElement('li', { key: i }, item);
      })
    );
  }
}

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', items: props.items };
    console.log('Todos constructor is called');
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState((prev) => {
      return {
        items: [...prev.items, prev.value],
        value: '',
      };
    });
  }

  handleChange(event) {
    this.setState((prev) => {
      return {
        ...prev,
        value: event.target.value,
      };
    });
  }

  render() {
    console.log('Todos render is called...');
    const inputElement = createElement('input', {
      type: 'text',
      value: this.state.value,
      onChange: this.handleChange,
    });

    const button = createElement(
      'button',
      {
        onClick: this.handleSubmit,
      },
      'Add'
    );

    const list = createElement(List, { items: this.state.items });
    return [inputElement, button, list];
  }
}

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: true, clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const clicks = ++this.state.clicks % 3;
    const checked = clicks === 0;
    this.setState({ clicks, checked });
  }

  render() {
    const checkbox = createElement('input', {
      type: 'checkbox',
      checked: this.state.checked,
    });

    const label = createElement('label', null, `${this.state.clicks} clicks`);

    const button = createElement(
      'button',
      {
        onClick: this.handleClick,
      },
      'click'
    );

    return [checkbox, label, button];
  }
}

const container = document.getElementById('main_container');
const root = createRoot(container);
root.render(createElement(CheckBox, { items: [] }));
