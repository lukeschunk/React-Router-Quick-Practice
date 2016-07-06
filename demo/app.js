const React = require('react');
const ReactDOM = require('react-dom');
const { Route, Router, browserHistory } = require('react-router');

const App = React.createClass({

  render () {
    return (
      <div>
        TEST
      </div>
    );
  }
});

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={App} path='/' />
  </Router>
), document.getElementById('demo'));
