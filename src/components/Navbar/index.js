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
		<NavMenu >
		
		<img className="images" src= "./logo192.png"/>
		<img className="images"src="./Codechef.png"/>
		<NavLink className='Navbarel'to='/about' activeStyle>
			About
		</NavLink>
		<NavLink className='Navbarel'to='/events' activeStyle>
			Events
		</NavLink>
		<NavLink className='Navbarel'to='/team' activeStyle>
			Teams
		</NavLink>
		<NavLink className='Navbarel'to='/blogs' activeStyle>
			Blogs
		</NavLink>
		<NavLink className='Navbarel'to='/become a member' activeStyle>
			Become A Member
		</NavLink>
		<NavLink className='Navbarel'to='/contact' activeStyle>
			Contact
		</NavLink>
		<NavLink className='Navbarel'to='/address' activeStyle>
			Address
		</NavLink>
	</NavMenu>	
		
	</Nav>
	</div>
);
};

export default Navbar;
