import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import './App.css';

import Nav from './components/Nav/Nav';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';

import Home from './pages/Home/Home'
import Media from './pages/Media/Media'
import Shop from './pages/Shop/Shop'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
//import Account from './pages/Account/Account'

function App() {
  return (
    <div className="App">
		<Router>
			<Nav></Nav>

			<div className="mainContent">
				<Switch>
					<Route path="/shop" component={Shop}></Route>
					<Route path="/media" component={Media}></Route>
					<Route path="/login" component={Login}></Route>
					<Route path="/signup" component={Signup}></Route>
					<Route path="/" component={Home}></Route>
				</Switch>
				<MusicPlayer></MusicPlayer>
			</div>

		</Router>
    </div>
  );
}

export default App;
