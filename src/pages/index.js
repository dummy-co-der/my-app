import React from 'react';

const Home = () => {
return (
	<>

	<div
	style={{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
		backgroundImage: `url("./planet.jpg")`,
		color:'white',
	}}
	>
	<img src= "./mainlogo.png" width="125" 
     height="125"/>
	 <h1>CodeChef ADGITM</h1>
	 </div>
	</>
);
}

export default Home;
