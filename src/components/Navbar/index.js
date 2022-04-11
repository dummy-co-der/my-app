import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
// NavMember,
// NavBtn,
// NavBtnLink,

} from './NavbarElements';
 import { GiHamburgerMenu } from 'react-icons/gi';
  
const Navbar = () => {
return (
	<div class='divScroll'>
	<Nav>
		<Bars />
		<NavMenu >
		
		<img className="image1" src= "./logo192.png"/>
		<img className="image2"src="./Codecheftext2.png"/>
		<NavLink className='Navbarel'to='/home' activeStyle>
			Home
		</NavLink>
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
	<div className='hamburger-menu'>
		<a href='#'> <GiHamburgerMenu />
		</a>

	</div>

	</div>
	
);
};

export default Navbar;
