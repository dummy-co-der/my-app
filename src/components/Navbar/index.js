import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavMember,
NavBtn,
NavBtnLink,

} from './NavbarElements';

const Navbar = () => {
return (
	<div class='divScroll'>
	<Nav>
		<Bars />
		<NavMenu>
		<img src= "./logo192.png"/>
		<img src="./Codechef.png"/>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/events' activeStyle>
			Events
		</NavLink>
		<NavLink to='/team' activeStyle>
			Teams
		</NavLink>
		<NavLink to='/blogs' activeStyle>
			Blogs
		</NavLink>
		<NavLink to='/become a member' activeStyle>
			Become A Member
		</NavLink>
		<NavLink to='/contact' activeStyle>
			Contact
		</NavLink>
		<NavLink to='/address' activeStyle>
			Address
		</NavLink>
	</NavMenu>	
		
	</Nav>
	</div>
);
};

export default Navbar;
