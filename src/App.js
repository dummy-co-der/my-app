import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
	<Navbar/>
	<Home/>
	<About/>
	<Events/>
	<Teams/>
	<Blogs/>
	<Become_A_Member/>
	<Contact/>
	<Address/>
	<Switch>
		
		{/* <Route path='/about' component={About} />
		{/* // <Route path='/' component={Home} />
		// <Route path='/' component={Events} />
		// <Route path='/' component={Teams} />
		// <Route path='/' component={Blogs} />
		// <Route path='/' component={Become_A_Member} />
		// <Route path='/' component={Contact} />
		// <Route path='/' component={Address} />   */}
		</Switch> 
	</Router>
);
}

export default App;
