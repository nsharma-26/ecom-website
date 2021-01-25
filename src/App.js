import React from 'react';
import HomePage from './container/homepage/homepage.component';
import ShopPage from './container/shop/shop';
import Header from './component/header/header'
// import OrderSearch from './container/OrderSearch/OrderSearch';
import { Switch, Route } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
          </Switch>
        
        {/* <OrderSearch /> */}
        </div>
    );
  }
}

export default App;
