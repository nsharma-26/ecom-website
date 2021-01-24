import React from 'react';
import HomePage from './container/homepage/homepage.component';
import OrderSearch from './container/OrderSearch/OrderSearch';
//import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <HomePage />
        {/* <OrderSearch /> */}
      </div>
    );
  }
}

export default App;
