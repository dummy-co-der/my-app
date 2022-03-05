import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import Become_A_Member from './pages/become a member';
import Contact from './pages/contact';
import Address from './pages/address';

function App() {
return (
	<Router>
	<Navbar />
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/events' component={Events} />
		<Route path='/team' component={Teams} />
		<Route path='/blogs' component={Blogs} />
		<Route path='/become a member' component={Become_A_Member} />
		<Route path='/contact' component={Contact} />
		<Route path='/address' component={Address} />
		
	</Switch>
	</Router>
);
}

export default App;
