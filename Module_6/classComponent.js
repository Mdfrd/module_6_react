'use strict';

const e = React.createElement;

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Hello Farid!!'
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'CLICK HERE'
    );

  }
};

const classComponent = document.querySelector('#class-component');
const root = ReactDOM.createRoot(classComponent);
root.render(e(Greeting));