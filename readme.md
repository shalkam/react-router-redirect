## Plugin the component ... Redirect from anywhere.

# Installation

```
yarn add react-router-redirect or npm install react-router-redirect --save
```

# Setup

1. Include the `<Redirector />` component anywhere in your app below the `<Router>` component from `react-router`.

```
import {Redirector} from 'react-router-redirect';

const App = () =>(
    <Router>
      <React.Fragment>
        <Redirector />
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </React.Fragment>
    </Router>
  )
```

2. Now you can change the Route from anywhere

### Inside a React component
```
import {push} from 'react-router-redirect';

class TestComponent extends React.Component {
  onClick = () => {
    push("/login")
  }
  render() {
    return <button onClick={this.onClick}>Go to login</button>
  }
}
```

### Inside a saga or side effect

```
import { push } from 'react-router-redirect'; // or import replace, go, goForward, goBack
import client from 'client';
import clientLoginMutation from 'gql/mutations/clientLogin';

const sagas = [
  {
    saga: 'MUTATION.LOGIN.SUCESS',
    handler: ({ login }) => {
      client
        .mutate({ mutation: clientLoginMutation, variables: { user: login } })
        .then(() => {
          push('/dashboard');
        });
    }
  }
];

export default sagas;
```

### Or even in React's javascript outer space

```
import {replace} from 'react-router-redirect';

push("/")
class TestComponent extends React.Component {
```

# API
The module has all the methods available in React Router history property

- push
- replace
- go
- goForward
- goBack
