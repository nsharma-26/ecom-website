import React from 'react';
import HomePage from './container/homepage/homepage.component';
import ShopPage from './container/shop/shop';
import Header from './component/header/header'
// import OrderSearch from './container/OrderSearch/OrderSearch';
import { Switch, Route } from 'react-router-dom';
import Login from './container/Login/Login'
//import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { auth } from './firebase/firebase.utils'
import { ThemeProvider } from 'react-bootstrap';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser:null
    }
  }

  unsubscribeFromAuth = null
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user})
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={Login} />
          </Switch>
        
        {/* <OrderSearch /> */}
        </div>
    );
  }
}

export default App;
