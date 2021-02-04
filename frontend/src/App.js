import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Help from './pages/Help/Help'

function App() {
  return (
    <div className="App">
		<Router>
			<Header></Header>

			<div className="mainContent">
				<Switch>
					<Route path="/shop" component={Shop}></Route>
					<Route path="/help" component={Help}></Route>
					<Route path="/" component={Home}></Route>
				</Switch>

			</div>

		</Router>
		<Footer></Footer>
    </div>
  );
}

export default App;
