import React from 'react';
import { connect } from 'react-redux'

import HomePage from './container/homepage/homepage.component';
import ShopPage from './container/shop/shop';
import Header from './component/header/header'
// import OrderSearch from './container/OrderSearch/OrderSearch';
import { Switch, Route } from 'react-router-dom';
import Login from './container/Login/Login'
//import 'bootstrap/dist/css/bootstrap.min.css';
import { setCurrentUser } from './redux/user/user.actions'

import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { ThemeProvider } from 'react-bootstrap';

class App extends React.Component {
  // constructor(){
  //   super();

  //   this.state = {
  //     currentUser:null
  //   }
  // }

  unsubscribeFromAuth = null
  componentDidMount(){
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //this.setState({currentUser:user})
      //createUserProfileDocument(user)
      //console.log(user);
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            
              id:snapShot.id,
              ...snapShot.data()
            
          })
        })
        //console.log(this.state);
      }
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div>
          <Header/>
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
