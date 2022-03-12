import React from 'react';

const Home = () => {
return (
	<>

	<div
	style={{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '90vh',
		backgroundImage: `url("./planet.jpg")`,
		backgroundSize:'cover',
		flexDirection:'column',
		color:'white',
	}}
	>
	<img src= "./mainlogo.png" alt="center" width="125" height="125"/>
	 <h2>CodeChef ADGITM</h2>
	 <h1>A Community propelling you to your future</h1>
	 </div>
	</>
);
}

export default Home;
