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
	<Navbar/>
	<Home/>
	<About/>
	<Events/>
	{/* <Teams/> */}
	<Blogs/>
	{/* <Become_A_Member/> */}
	<Contact/>
	{/* <Address/> */}
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



// class App extends React.Component {
// 	constructor(props) {
// 	  super(props);
// 	  this.state = {
// 		name: '',
// 		email: '',
// 		message: ''
// 	  }
// 	}

// 	render() {
// 	  return(
// 		<div className="App">
// 		  <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
// 			<div className="form-group">
// 			  <label htmlFor="name">Name</label>
// 			  <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
// 			</div>
// 			<div className="form-group">
// 			  <label htmlFor="exampleInputEmail1">Email address</label>
// 			  <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
// 			</div>
// 			<div className="form-group">
// 			  <label htmlFor="message">Message</label>
// 			  <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
// 			</div>
// 			<button type="submit" className="btn btn-primary">Submit</button>
// 		  </form>
// 		</div>
// 	  );
// 	}
  
// 	onNameChange(event) {
// 	  this.setState({name: event.target.value})
// 	}
  
// 	onEmailChange(event) {
// 	  this.setState({email: event.target.value})
// 	}
  
// 	onMessageChange(event) {
// 	  this.setState({message: event.target.value})
// 	}
  
// 	handleSubmit(event) {
// 	}
//   }
export default App;
