import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage.js';
import ShopPage from './pages/ShopPage/ShopPage.js';
import SignInAndSignUpPage from './pages/SignIn-SignUp/SignIn-SignUp.js';
import Header from './components/Header/Header.js'
import {Switch,Route} from 'react-router-dom';
import {auth} from './firebase/firebase.utils.js'
import {createUserProfileDocument} from './firebase/firebase.utils.js'




class App extends React.Component {
  constructor () {
    super();
    this.state= {
      currentUser:null
    }
  }

  unsubscribeFromAuth=null;

  componentDidMount() {
    this.unsubscribeFromAuth=auth.onAuthStateChanged( async userAuth=>{
      if (userAuth) {
        const userRef= await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=> {
          this.setState({
            currentUser: {
              id:snapShot.id,
              ...snapShot.data()
            }
          }, ()=>{
            console.log(this.state);
          })
        });
        
      } else {
        this.setState({currentUser:userAuth})
      }
      
      //console.log(user)
    }); //Method we get from Firebase which gives the session details,login status of the user(Subscription is always open as long as App component is mounted on the DOM)
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render () {
    return (
    <div className="">
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component= {SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
  }
}

export default App;
