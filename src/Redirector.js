import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import pubsub from 'pubsub-js';

class Redirector extends React.Component {
  componentDidMount() {
    const {
      history: { push, replace, go, goBack, goForward }
    } = this.props;
    pubsub.subscribe('ROUTER.PUSH', (topic, location) => {
      push(location);
    });
    pubsub.subscribe('ROUTER.REPLACE', (topic, location) => {
      replace(location);
    });
    pubsub.subscribe('ROUTER.GO', (topic, number) => {
      go(number);
    });
    pubsub.subscribe('ROUTER.BACK', () => {
      goBack();
    });
    pubsub.subscribe('ROUTER.FORWARD', () => {
      goForward();
    });
  }
  render() {
    return null;
  }
}

Redirector.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Redirector);
