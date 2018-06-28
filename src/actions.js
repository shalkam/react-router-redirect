import pubsub from 'pubsub-js';

export const push = location => {
  pubsub.publish('ROUTER.PUSH', location);
};

export const replace = location => {
  pubsub.publish('ROUTER.REPLACE', location);
};

export const go = number => {
  pubsub.publish('ROUTER.GO', number);
};

export const goBack = () => {
  pubsub.publish('ROUTER.BACK');
};

export const goForward = () => {
  pubsub.publish('ROUTER.FORWARD');
};
